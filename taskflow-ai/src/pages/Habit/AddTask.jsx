import { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Saving:', title)   // Firebase comes later
    setShowForm(false)
    setTitle('')
  }

  return (
    <>
      <Button onClick={() => setShowForm(true)}>+ New task</Button>
     
      <Modal open={showForm} onClose={() => setShowForm(false)} title="New task">
        <form onSubmit={handleSave} className="space-y-4">
          <Input
            id="title"
            label="Title"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex gap-3 justify-end">
            <Button variant="secondary" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
            <Button type="submit">Save task</Button>
          </div>
        </form>
      </Modal>
    </>
  )
}