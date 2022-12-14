import { Form } from "semantic-ui-react";

export default function NotesTaker({ notes, setNotes }) {
  const onNoteChange = (e,index) => {
        let currentNotes = [...notes]
        currentNotes[index] = e?.target?.value
        setNotes(currentNotes)
  }
  return (
    <Form>
      <Form.Group widths={2}>
        {notes.map((note,index) => {
          return <Form.Input value={note} width={10} key={index} onChange={(e) => onNoteChange(e,index)}/>;
        })}
      </Form.Group>
      <Form.Button
        onClick={() => {
          const newNotes = [...notes, ""];
          setNotes(newNotes);
        }}
      >
        +
      </Form.Button>
    </Form>
  );
}
