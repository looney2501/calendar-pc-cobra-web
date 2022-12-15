import { Form } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";

export default function EventsForm({ event, setEvent }) {
  return (
    <>
      <Form>
        <Form.Field>Event</Form.Field>
        <p></p>
        <Form.Field placeholder="Start date"
        onChange={(e) => {
          setEvent.startDate(e.target.value)
        }}
        >
          <SemanticDatepicker />
        </Form.Field>
        <Form.Input
          placeholder="Location"
          value={event.location}
          onChange={(e) => {
            setEvent.setLocation(e.target.value);
          }}
        />
      </Form>
    </>
  );
}
