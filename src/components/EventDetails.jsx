import {Card} from 'react-bootstrap'
import "../assets/styles/EventDetails.scss"

// date e de tipul Date javascript
function EventDetails({name, date, description, location}) {
    return (
        <Card border="light" style={{width: "100%"}}>
            <Card.Header className='details-header'>{date}</Card.Header>
            <Card.Body className='details-body'>
                <Card.Title>{name}</Card.Title>
                {/*<Card.Text>Location: {location}</Card.Text>*/}
                <Card.Text>Description: {description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default EventDetails;