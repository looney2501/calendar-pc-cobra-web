import {Form} from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import '../assets/styles/EventForm.scss';

export default function EventsForm({event, setEvent}) {
    return (
        <>
            <Form>
                <Form.Field className="title">Create event</Form.Field>
                <p></p>
                <Form.Field
                    className="form-field"
                    placeholder="Start date"
                    value={event.date.toLocaleString()}
                >
                    <SemanticDatepicker
                        placeholder="Select date"
                        onChange={(e, data) => {
                            setEvent.setStartDate(data.value);
                        }}
                    />
                </Form.Field>
                <Form.Input
                    className="form-field"
                    placeholder="Location"
                    value={event.location}
                    onChange={(e) => {
                        setEvent.setLocation(e.target.value);
                    }}
                />
                <Form.Input
                    className="form-field"
                    placeholder="Start Time (ex: 09:00)"
                    value={event.startTime}
                    onChange={(e) => {
                        setEvent.setStartTime(e.target.value);
                    }}
                />
                <Form.Input
                    className="form-field"
                    placeholder="End Time (ex: 18:00)"
                    value={event.endTime}
                    onChange={(e) => {
                        setEvent.setEndTime(e.target.value);
                    }}
                />
            </Form>
        </>
    );
}
