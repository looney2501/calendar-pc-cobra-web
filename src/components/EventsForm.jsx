import { Form } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";

export default function EventsForm({ event, setEvent }) {
  return (
    <>
      <Form>
        <Form.Field>Event</Form.Field>
        <p></p>
        <Form.Field
          placeholder="Start date"
          value={event.date.toLocaleString()}
        >
          <SemanticDatepicker
            onChange={(e,data) => {
              setEvent.setStartDate(data.value);
            }}
          />
        </Form.Field>
        <Form.Input
          placeholder="Location"
          value={event.location}
          onChange={(e) => {
            setEvent.setLocation(e.target.value);
          }}
        />
        <Form.Input
          placeholder="Start Time"
          value={event.startTime}
          onChange={(e) => {
            setEvent.setStartTime(e.target.value);
          }}
        />
        <Form.Input
          placeholder="End Time"
          value={event.endTime}
          onChange={(e) => {
            setEvent.setEndTime(e.target.value);
          }}
        />
      </Form>
    </>
  );
}
