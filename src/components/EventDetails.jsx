import { Card } from "react-bootstrap";
import "../assets/styles/EventDetails.scss";

// date e de tipul Date javascript
function EventDetails({ name, date, description, location,show }) {
  return (
    <Card border="light" style={{ width: "100%", height: "100%" }}>
      <Card.Header className="details-header" style={{display:"flex",justifyContent: "space-between"}}>{date}
      <button className="btn-close" onClick={() => show(false)}></button>
      </Card.Header>
      <Card.Body className="details-body">
        <Card.Title>{name}</Card.Title>
        {/*<Card.Text>Location: {location}</Card.Text>*/}
        <Card.Text>Description: {description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventDetails;
