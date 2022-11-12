import {Card} from 'react-bootstrap'
import "../assets/styles/EventDetails.scss"

// date e de tipul Date javascript
function EventDetails({title, date, description, location}) {
    return (
        <Card border="light" style={{width: '18rem'}}>
            <Card.Header className='details-header'>{date}</Card.Header>
            <Card.Body className='details-body'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Location: {location}</Card.Text>
                <Card.Text>Description: {description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default EventDetails;