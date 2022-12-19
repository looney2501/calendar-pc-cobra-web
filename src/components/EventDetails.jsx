import { Card } from "react-bootstrap";
import "../assets/styles/EventDetails.scss";
import moment from "moment";
import { NotesList } from "./NotesList";

function EventDetails({ name, notes, date, description, show }) {
    const d = new Date(date);
    const formattedDate = moment(d, true).format('DD/MM/YYYY hh:mm');

    return (
      <Card border="light" style={{ width: "100%", height: "100%" }}>
        <Card.Header className="details-header" style={{display:"flex",justifyContent: "space-between"}}>
        {formattedDate}
        <button className="btn-close" onClick={() => show(false)}></button>
        </Card.Header>
        <Card.Body className="details-body">
          <Card.Title>{name}</Card.Title>
          {/*<Card.Text>Location: {location}</Card.Text>*/}
          <Card.Text>Description: {description}</Card.Text>
          <NotesList eventNotes={notes}/>
        </Card.Body>
      </Card>
    );
}

export default EventDetails;
