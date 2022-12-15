import { useState } from "react";
import useEvent from "../hooks/useEvent";
import EventsForm from "./EventsForm";
import NotesForm from "./NotesForm";

export default function EventsAndNotesForm() {
  const [notes, setNotes] = useState([
    "ana",
    "are",
    "afa faw faf afafehebfseuff sfhsf h ufgseghgufe",
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
        <EventsForm event={event} setEvent={setEvent} />
        <NotesForm notes={notes} setNotes={setNotes} />
      </div>
      <button onClick={onSaveClicked} style={{"border":"none"}}>Save All...</button>
    </>
  );
}
