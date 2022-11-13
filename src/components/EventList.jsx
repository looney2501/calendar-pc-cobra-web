import { ListGroup } from 'react-bootstrap'
import { MdEventNote } from 'react-icons/md'
import '../assets/styles/EventList.scss'
import '../assets/styles/globals.scss'
import { useContext } from 'react'
import { EventContext } from '../context/EventProvider'
import LoadingEffect from './LoadingEffect'

export function EventList() {

  const { selectedDayEvents, isLoading } = useContext(EventContext)

  const onEventClick = (listEventObject) => {
    // write here what happens when clicking an event from event list
  }

  const colorsList = ['#34ace070', '#34ace0AA', '#34ace040']

  return (
    <div id="EventList">
      {isLoading === true ? <LoadingEffect message="Loading events" /> : (
        <ListGroup variant="flush">
          {selectedDayEvents.map((event, index) => {
            const color = `${colorsList[index % 3]}`
            return (
              <ListGroup.Item
                className="item"
                style={{ backgroundColor: color }}
                onClick={() => onEventClick(event)}
              >
                <MdEventNote />
                <span> </span>
                {event.name}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      )}
    </div>
  )
}
