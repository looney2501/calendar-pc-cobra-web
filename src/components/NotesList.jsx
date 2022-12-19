import { useContext } from "react";
import { EventContext } from "../context/EventProvider";
import { TbNotes } from 'react-icons/tb'
import LoadingEffect from "./LoadingEffect";
import '../assets/styles/NotesList.scss'

export function NotesList({ eventNotes }) {
  const { isLoadingEvent } = useContext(EventContext)
  
  return (
    <>
      { isLoadingEvent ? (
        <LoadingEffect message="Loading notes" />
          ) : (
            <div className='event-notes-list-wrapper'>
              <TbNotes size={30}/>
              <span>Notes</span>
              <div>
                { !eventNotes || eventNotes.length === 0 ? (
                  <div>
                    No notes added to this event
                  </div>
                ) : (
                  <div className='event-notes-list'>
                    { eventNotes
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