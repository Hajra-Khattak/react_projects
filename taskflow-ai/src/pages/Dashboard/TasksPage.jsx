import { useOutletContext } from 'react-router'
import TaskBoard from '../../components/dashboard/TaskBoard'

export default function TasksPage() {
  const { visibleTasks, loadingTasks, openAdd, openEdit, askDelete } = useOutletContext()

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Tasks</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-8">
        Plan, track and finish your work.
      </p>
      <TaskBoard
        tasks={visibleTasks}
        loading={loadingTasks}
        onAdd={openAdd}
        onEdit={openEdit}
        onDelete={askDelete}
      />
    </>
  )
}