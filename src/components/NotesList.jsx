import { useContext } from "react";
import { EventContext } from "../context/EventProvider";
import { TbNotes } from 'react-icons/tb'
import LoadingEffect from "./LoadingEffect";
import '../assets/styles/NotesList.scss'

export function NotesList() {
  const { selectedEventNotes, isLoadingEventNotes } = useContext(EventContext)
  selectedEventNotes[0] = 'note1'
  selectedEventNotes[1] = 'vaaaaaaaaaaaaery long very longer nooooooooooooote note2'
  selectedEventNotes[2] = 'note3'
  
  return (
    <>
      { isLoadingEventNotes ? (
        <LoadingEffect message="Loading notes" />
          ) : (
            <div className='event-notes-list-wrapper'>
              <TbNotes size={30}/>
              <span>Notes</span>
              <div>
                { !selectedEventNotes || selectedEventNotes.length === 0 ? (
                  <div>
                    No notes added to this event
                  </div>
                ) : (
                  <div className='event-notes-list'>
                    { selectedEventNotes
                      .map((note, i) =>
                        <div title={note} key={i} className='event-note'> {note} </div>)
                    }
                  </div>
                )}
              </div>
            </div>
          )
      }
    </>
  )
}