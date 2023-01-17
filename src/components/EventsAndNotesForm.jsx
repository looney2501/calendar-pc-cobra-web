import { useCallback, useContext, useEffect, useState } from 'react'
import useEvent from '../hooks/useEvent'
import EventsForm from './EventsForm'
import NotesForm from './NotesForm'
import EventsMap from './EventsMap'

import '../assets/styles/EventAndNotes.scss'
import { Card } from 'react-bootstrap'
import { EventContext } from '../context/EventProvider'

const EventsAndNotesForm = ({ closeAction }) => {
  const { addEvent, selectedDay } = useContext(EventContext)
  const [notes, setNotes] = useState([''])
  const [event, setEvent] = useEvent()
  const [mapMarker, setMapMarker] = useState({})
  const [addLocation, setAddLocation] = useState(false)

  useEffect(async () => {
    if (addLocation) {
      await navigator.geolocation.getCurrentPosition(
        (position) => {
          setMapMarker({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        }
      )
    }
  }, [addLocation])

  const prepareObjectToSendToServer = useCallback(() => {
    return {
      ...event,
      date: selectedDay.format('YYYY-MM-DDThh:mm:ss'),
      notes: [...notes]
    }
  }, [selectedDay, event, notes])

  const onSaveClicked = useCallback(() => {
    const newEvent = prepareObjectToSendToServer()
    addEvent(newEvent)
    closeAction()
  }, [prepareObjectToSendToServer])

  const onMapClick = (_t, _map, coord) => {
    setMapMarker({
      lat: coord.latLng.lat(),
      lng: coord.latLng.lng()
    })
    setEvent.setLatitude(mapMarker.lat)
    setEvent.setLongitude(mapMarker.lng)
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
        <label className="add-location-label">
          <input id="addLocationInput" type="checkbox" onClick={() => {
            setAddLocation(!addLocation)
          }}/>
          Add location for event
        </label>
        {addLocation && (
          <EventsMap onMapClick={onMapClick} markers={[mapMarker]}/>
        )}
      </Card.Body>
    </Card>
  )
}

export default EventsAndNotesForm
