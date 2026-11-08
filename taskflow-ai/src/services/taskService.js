import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'

const tasksRef = collection(db, 'tasks')

// CREATE
export async function addTask(userId, task) {
  return addDoc(tasksRef, {
    title: task.title.trim(),
    description: task.description || '',
    status: task.status || 'todo',
    priority: task.priority || 'Medium',
    due: task.due || '',
    order: Date.now(),
    userId,
    createdAt: serverTimestamp(),
    completedAt: task.status === 'done' ? serverTimestamp() : null,
  })
}

// UPDATE / EDIT (change any fields, including status)
export async function updateTask(taskId, changes) {
  const data = { ...changes }

  // Keep completedAt in sync with the status
  if (changes.status === 'done') {
    data.completedAt = serverTimestamp()
  } else if (changes.status) {
    data.completedAt = null
  }

  return updateDoc(doc(db, 'tasks', taskId), data)
}

// DELETE
export async function deleteTask(taskId) {
  return deleteDoc(doc(db, 'tasks', taskId))
}

// READ in real time. Returns a function that stops the listener.
export function subscribeToTasks(userId, onData, onError) {
  const q = query(tasksRef, where('userId', '==', userId))

  return onSnapshot(
    q,
    (snapshot) => {
      const tasks = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
      tasks.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      onData(tasks)
    },
    onError
  )
}