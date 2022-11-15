import { ListGroup } from 'react-bootstrap'
import { MdEventNote } from 'react-icons/md'
import '../assets/styles/EventList.scss'
import '../assets/styles/globals.scss'
import { useContext,useState } from 'react'
import LoadingEffect from './LoadingEffect'
import EventDetails from "./EventDetails";
import {EventContext} from "../context/EventProvider";

export function EventList() {

  const { selectedDayEvents, isLoading } = useContext(EventContext)
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent,setSelectedEvent] = useState({name:"default",date:new Date().toLocaleString(),description:"deafult"});
  const onEventClick = (listEventObject) => {
    // write here what happens when clicking an event from event list
    console.log("****" + listEventObject.date + "****")
    console.log(listEventObject)
      setShowEventDetails(!showEventDetails);
      setSelectedEvent(listEventObject);

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
      {/*TODO check description existance in selectedEvent object*/}
      {showEventDetails ? <EventDetails name={selectedEvent.name} date={selectedEvent.date} description={selectedEvent.description}
                                        /> : null}
    </div>
  )
}
