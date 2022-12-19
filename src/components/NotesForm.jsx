import {Form, Grid} from "semantic-ui-react";
import "../assets/styles/Note.scss";
import {FormControl} from "react-bootstrap";
import React from 'react';

export default function NotesForm({notes, setNotes}) {
    const onNoteChange = (e, index) => {
        let currentNotes = [...notes];
        currentNotes[index] = e?.target?.value;
        setNotes(currentNotes);
    };
    const textRef = React.useRef();
    const value = React.useState();
    React.useEffect(() => {
        if (textRef && textRef.current) {
            textRef.current.style.height = "0px";
            const taHeight = textRef.current.scrollHeight;
            if (taHeight < 200)
                textRef.current.style.height = taHeight + "px";
            else
                textRef.current.style.height = "200px";
        }
    }, [value]);
    return (

        <Grid padded="vertically" columns={1}>
            <Grid.Row>
                <Form.Field className="title">Notes</Form.Field>
            </Grid.Row>
            <p></p>
            <Form.Button
                size="huge"
                onClick={() => {
                    const newNotes = [...notes, ""];
                    setNotes(newNotes);
                }}
                color="green"
                content="+ New..."
                className="new-note-button"
            >
            </Form.Button>
            {notes.map((note, index) => {
                return (
                    <Grid.Row className="note-card">
                        <Grid.Column>
                            <Form.Input>
                                <FormControl as="textarea" rows="3" ref={textRef}
                                             value={note}
                                             key={index}
                                             onChange={(e) => onNoteChange(e, index)}
                                             id="text-area">
                                </FormControl>
                            </Form.Input>
                        </Grid.Column>
                    </Grid.Row>
                );
            })}
        </Grid>

    );
}
