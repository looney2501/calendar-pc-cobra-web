import { Form } from 'semantic-ui-react'
import '../assets/styles/EventForm.scss'

export default function EventsForm({ event, setEvent }) {
  return (
    <>
      <Form>
        <Form.Field className="title">Create event</Form.Field>
        <p></p>
        <Form.Input
          className="form-field"
          placeholder="Name"
          value={event.name}
          onChange={(e) => {
            setEvent.setName(e.target.value)
          }}
        />
        <Form.Input
          className="form-field"
          placeholder="Description"
          value={event.description}
          onChange={(e) => {
            setEvent.setDescription(e.target.value)
          }}
        />
        <Form.Input
          className="form-field"
          placeholder="Start Time (ex: 09:00)"
          value={event.startTime}
          onChange={(e) => {
            setEvent.setStartTime(e.target.value)
          }}
        />
        <Form.Input
          className="form-field"
          placeholder="End Time (ex: 18:00)"
          value={event.endTime}
          onChange={(e) => {
            setEvent.setEndTime(e.target.value)
          }}
        />
      </Form>
    </>
  )
}
