import { useEffect, useRef, useState } from 'react'
import {
  DndContext,
  DragOverlay,
  closestCorners,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  useDroppable,
} from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
  arrayMove,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { columnsMeta } from '../../utils/constants'
import TaskCard from './TaskCard'
import Skeleton from '../Skeleton/Skeleton'

const COLUMN_PREFIX = 'col-'

// { todo: [...], doing: [...], done: [...] } built from the flat task list
function groupTasks(tasks) {
  const result = { todo: [], doing: [], done: [] }
  tasks.forEach((t) => {
    ;(result[t.status] || result.todo).push(t)
  })
  return result
}

// Finds which column an id belongs to. The id can be a task or a column.
function locate(cols, id) {
  if (typeof id === 'string' && id.startsWith(COLUMN_PREFIX)) {
    return id.slice(COLUMN_PREFIX.length)
  }
  return columnsMeta.find((c) => cols[c.key].some((t) => t.id === id))?.key
}

function SortableTaskCard({ task, draggable, onEdit, onDelete, onBreakdown }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id, disabled: !draggable })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} className={isDragging ? 'opacity-40' : ''}>
      <TaskCard
        task={task}
        onEdit={onEdit}
        onDelete={onDelete}
        onBreakdown={onBreakdown}
        dragHandleRef={setActivatorNodeRef}
        dragHandleProps={draggable ? { ...attributes, ...listeners } : undefined}
      />
    </div>
  )
}

function Column({ col, tasks, loading, draggable, onAdd, onEdit, onDelete, onBreakdown }) {
  const { setNodeRef, isOver } = useDroppable({ id: `${COLUMN_PREFIX}${col.key}` })

  return (
    <div
      ref={setNodeRef}
      className={`bg-gray-100 dark:bg-gray-900 rounded-xl p-3 border transition ${
        isOver
          ? 'border-blue-400 dark:border-blue-600'
          : 'border-gray-200 dark:border-gray-800'
      }`}
    >
      <div className="flex items-center justify-between px-1 mb-3">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${col.dot}`} />
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{col.name}</h3>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
          {loading ? '-' : tasks.length}
        </span>
      </div>

      <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <div className="space-y-3 min-h-[72px]">
          {loading ? (
            <>
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </>
          ) : (
            <>
              {tasks.map((task) => (
                <SortableTaskCard
                  key={task.id}
                  task={task}
                  draggable={draggable}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onBreakdown={onBreakdown}
                />
              ))}
              {tasks.length === 0 && (
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 py-4">
                  No tasks here yet.
                </p>
              )}
            </>
          )}
        </div>
      </SortableContext>

      <button
        type="button"
        onClick={() => onAdd(col.key)}
        className="mt-3 w-full text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 py-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition"
      >
        + Add task
      </button>
    </div>
  )
}

export default function TaskBoard({
  tasks,
  loading,
  onAdd,
  onEdit,
  onDelete,
  onMove,
  onBreakdown,
  draggable = true,
}) {
  const [columns, setColumns] = useState(() => groupTasks(tasks))
  const [activeId, setActiveId] = useState(null)
  const dragging = useRef(false)

  // Keep the board in sync with Firestore, except while a card is being dragged
  useEffect(() => {
    if (!dragging.current) setColumns(groupTasks(tasks))
  }, [tasks])

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  const activeTask = activeId
    ? columnsMeta.flatMap((c) => columns[c.key]).find((t) => t.id === activeId)
    : null

  const handleDragStart = ({ active }) => {
    dragging.current = true
    setActiveId(active.id)
  }

  // Runs while dragging. Moves the card between columns on screen.
  const handleDragOver = ({ active, over }) => {
    if (!over) return

    setColumns((prev) => {
      const from = locate(prev, active.id)
      const to = locate(prev, over.id)
      if (!from || !to || from === to) return prev

      const fromItems = prev[from]
      const toItems = prev[to]
      const moving = fromItems.find((t) => t.id === active.id)
      if (!moving) return prev

      const overIndex = toItems.findIndex((t) => t.id === over.id)
      let newIndex
      if (overIndex >= 0) {
        const translated = active.rect.current.translated
        const below = translated && translated.top > over.rect.top + over.rect.height
        newIndex = overIndex + (below ? 1 : 0)
      } else {
        newIndex = toItems.length
      }

      return {
        ...prev,
        [from]: fromItems.filter((t) => t.id !== active.id),
        [to]: [...toItems.slice(0, newIndex), moving, ...toItems.slice(newIndex)],
      }
    })
  }

  const revert = () => setColumns(groupTasks(tasks))

  // Runs on drop. Works out the new status and order, then saves them.
  const handleDragEnd = ({ active, over }) => {
    dragging.current = false
    setActiveId(null)

    if (!over) return revert()

    const destCol = locate(columns, active.id)
    const overCol = locate(columns, over.id)
    if (!destCol || !overCol) return revert()

    let next = columns

    // Dropped inside the same column: change the position
    if (destCol === overCol) {
      const oldIndex = columns[destCol].findIndex((t) => t.id === active.id)
      const newIndex = String(over.id).startsWith(COLUMN_PREFIX)
        ? columns[destCol].length - 1
        : columns[destCol].findIndex((t) => t.id === over.id)

      if (oldIndex >= 0 && newIndex >= 0 && oldIndex !== newIndex) {
        next = { ...columns, [destCol]: arrayMove(columns[destCol], oldIndex, newIndex) }
      }
    }

    setColumns(next)

    // Only the column the card left and the column it landed in can change
    const moved = next[destCol].find((t) => t.id === active.id)
    const affected = new Set([moved.status, destCol])

    const updates = []
    affected.forEach((key) => {
      next[key]?.forEach((task, index) => {
        const order = (index + 1) * 1000
        const statusChanged = task.status !== key
        if (statusChanged || task.order !== order) {
          updates.push({ id: task.id, status: key, order, statusChanged })
        }
      })
    })

    if (updates.length === 0) return

    Promise.resolve(onMove(updates)).catch(revert)
  }

  const handleDragCancel = () => {
    dragging.current = false
    setActiveId(null)
    revert()
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columnsMeta.map((col) => (
          <Column
            key={col.key}
            col={col}
            tasks={columns[col.key]}
            loading={loading}
            draggable={draggable && !loading}
            onAdd={onAdd}
            onEdit={onEdit}
            onDelete={onDelete}
            onBreakdown={onBreakdown}
          />
        ))}
      </div>

      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  )
}