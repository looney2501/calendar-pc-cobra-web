import { ListGroup } from "react-bootstrap";
import { MdEventNote } from "react-icons/md";
import "../assets/styles/EventList.scss";
import "../assets/styles/globals.scss"
export function EventList({ events }) {
  //listEvent un obiect de tipul event din aplicatia noastra
  const onEventClick = (listEventObject) => {
    // write here what happens when clicking an event from event list
  };
  const colorsList = ["#34ace070","#34ace0AA","#34ace040"];
  return (
    <ListGroup id="EventList" variant="flush">
      {events.map((listEventObject, index) => {
        const color = `${colorsList[index%3]}`
        return (
          <ListGroup.Item
            className="item"
            style={{backgroundColor:color}}
            onClick={() => onEventClick(listEventObject)}
          >
            <MdEventNote />
            <span> </span>
            {listEventObject.title}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
