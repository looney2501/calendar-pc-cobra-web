import { useState } from "react";
import useEvent from "../hooks/useEvent";
import EventsForm from "./EventsForm";
import NotesForm from "./NotesForm";

import '../assets/styles/EventAndNotes.scss'

export default function EventsAndNotesForm() {
  const [notes, setNotes] = useState([
    "are",
    "afa faw faf afafehebfseuff sfhsf h ufgseghgufe",
    "afa faw faf afafehebfseuff sfhsf h ufgseghgufe afa faw faf afafehebfseuff sfhsf h ufgseghgufe nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
  ]);
  const [event, setEvent] = useEvent();
  const prepareObjectToSendToServer = () => {
    return {
      notes:[...notes],
      ...event
    }

  }
  const onSaveClicked = () => {
    const res = prepareObjectToSendToServer()
      console.log(res);
  }

  return (
    <>
      <div style={{ display: "flex", gap: "8px" }}>
        <div>
          <EventsForm event={event} setEvent={setEvent} />
          <button onClick={onSaveClicked} className="save-event-button">Save</button>
        </div>
        <NotesForm notes={notes} setNotes={setNotes} />
      </div>
    </>
  );
}
