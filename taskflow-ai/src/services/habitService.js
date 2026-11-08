import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'

const habitsRef = collection(db, 'habits')

// CREATE a habit
export function addHabit(userId, habit) {
  return addDoc(habitsRef, {
    name: habit.name.trim(),
    weeklyGoal: Number(habit.weeklyGoal) || 7,
    color: habit.color,
    completedDates: [],
    userId,
    createdAt: serverTimestamp(),
  })
}

// EDIT any field of a habit (name, weeklyGoal, color)
export function updateHabit(habitId, changes) {
  return updateDoc(doc(db, 'habits', habitId), changes)
}

// DELETE a habit
export function deleteHabit(habitId) {
  return deleteDoc(doc(db, 'habits', habitId))
}

// CHECK or UNCHECK one day, for example '2026-11-04'
export function setHabitDay(habitId, dateKey, done) {
  return updateDoc(doc(db, 'habits', habitId), {
    completedDates: done ? arrayUnion(dateKey) : arrayRemove(dateKey),
  })
}

// READ the user's habits in real time. Returns a function that stops the listener.
export function subscribeToHabits(userId, onData, onError) {
  const q = query(habitsRef, where('userId', '==', userId))

  return onSnapshot(
    q,
    (snapshot) => {
      const habits = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
      const stamp = (h) => h.createdAt?.seconds ?? Number.MAX_SAFE_INTEGER
      habits.sort((a, b) => stamp(a) - stamp(b))
      onData(habits)
    },
    onError
  )
}