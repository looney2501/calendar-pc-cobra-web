import { useState } from "react";
import NotesTaker from "./NotesTaker";

export default function EventsAndNotesForm(){
    const [notes,setNotes] = useState(["ana","are","afa faw faf afafehebfseuff sfhsf h ufgseghgufe"])
    return <NotesTaker notes={notes} setNotes={setNotes}/>
}   