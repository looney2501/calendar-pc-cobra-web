import { ListGroup } from "react-bootstrap";
import { MdEventNote } from "react-icons/md";
import "../assets/styles/EventList.scss";
import "../assets/styles/globals.scss";
import { useContext, useState } from "react";
import LoadingEffect from "./LoadingEffect";
import EventDetails from "./EventDetails";
import { EventContext } from "../context/EventProvider";
import { getEventById } from "../services/actions/eventActions";
import { useEffect } from "react";

export function EventList() {
  const { selectedDayEvents, isLoadingDayEvents, isLoadingMonthEvents } = useContext(EventContext)
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({
    name: "default",
    date: new Date().toLocaleString(),
    description: "default",
  });

  useEffect(() => {
    setShowEventDetails(false);
  }, [selectedDayEvents]);

  const onEventClick = (listEventObject) => {
    setShowEventDetails(!showEventDetails);

    getEventById(listEventObject.id)
      .then((resp) => resp.data)
      .then((resp) => {
        setSelectedEvent(resp);
      })
      .catch((err) => console.error(err));
  };

  const colorsList = ["#34ace070", "#34ace0AA", "#34ace040"];

  return (
    <>
      {isLoadingDayEvents || isLoadingMonthEvents ? (
        <LoadingEffect message="Loading events" />
      ) : (
        <>
          {!showEventDetails ? (
            <div id="EventList" className='event-list'>
              <ListGroup variant="flush">
                {selectedDayEvents.map((event, index) => {
                  const color = `${colorsList[index % 3]}`;
                  return (
                    <ListGroup.Item
                      key={index}
                      className="item"
                      style={{ backgroundColor: color }}
                      onClick={() => onEventClick(event)}
                    >
                      <MdEventNote />
                      <span> </span>
                      {event.name}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </div>
          ) : (
            <EventDetails
              name={selectedEvent.name}
              notes={selectedEvent.notes}
              date={selectedEvent.date}
              description={selectedEvent.description}
              show = {setShowEventDetails}
            />
          )}
        </>
      )}
    </>
  );
}
