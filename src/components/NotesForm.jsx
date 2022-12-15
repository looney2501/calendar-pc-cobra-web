import { Form, Grid, GridRow } from "semantic-ui-react";

export default function NotesForm({ notes, setNotes }) {
  const onNoteChange = (e, index) => {
    let currentNotes = [...notes];
    currentNotes[index] = e?.target?.value;
    setNotes(currentNotes);
  };
  return (
   
      <Grid padded="vertically" columns={1} >
        <Grid.Row>
          <Form.Field>Notes</Form.Field>
        </Grid.Row>
        <p></p>
        {notes.map((note, index) => {
          return (
            <Grid.Row>
              <Grid.Column>
                <Form.Input
                  value={note}
                  key={index}
                  onChange={(e) => onNoteChange(e, index)}
                  className="formButton"
                />
              </Grid.Column>
            </Grid.Row>
          );
        })}
   
      <Form.Button
    
        size="huge"
        onClick={() => {
          const newNotes = [...notes, ""];
          setNotes(newNotes);
        }}
        color="green"
        content="+ New..."
        
      >
       
      
      </Form.Button>
      </Grid>

  );
}
