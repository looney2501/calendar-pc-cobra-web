import { useContext, useState } from 'react'
import useEvent from '../hooks/useEvent'
import EventsForm from './EventsForm'
import NotesForm from './NotesForm'

import '../assets/styles/EventAndNotes.scss'
import { Card } from 'react-bootstrap'
import { EventContext } from '../context/EventProvider'

const EventsAndNotesForm = ({ closeAction }) => {
  const { addEvent, selectedDay } = useContext(EventContext)
  const [notes, setNotes] = useState([
    '',
  ])
  const [event, setEvent] = useEvent()
  const prepareObjectToSendToServer = () => {
    return {
      date: selectedDay,
      notes: [...notes],
      ...event
    }
  }
  const onSaveClicked = () => {
    const newEvent = prepareObjectToSendToServer()
    addEvent(newEvent)
    closeAction()
  }

  return (
    <Card border="light" style={{ width: '100%', height: '100%' }}>
      <Card.Header className="details-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
        Create a new event
        <button className="btn-close" onClick={closeAction}/>
      </Card.Header>
      <Card.Body className="details-body">
        <div style={{ display: 'flex', gap: '8px' }}>
          <div>
            <EventsForm event={event} setEvent={setEvent}/>
            <button onClick={onSaveClicked} className="save-event-button">Save</button>
          </div>
          <NotesForm notes={notes} setNotes={setNotes}/>
        </div>
      </Card.Body>
    </Card>
  )
}

export default EventsAndNotesForm
