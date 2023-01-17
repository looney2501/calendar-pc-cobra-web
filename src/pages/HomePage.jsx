import { Header } from '../components/Header'
import Calendar from '../components/Calendar'
import '../assets/styles/HomePage.scss'
import { EventList } from '../components/EventList'
import EventsMap from '../components/EventsMap'
import AllEventsMap from '../components/AllEventsMap'
import { useState } from 'react'

const HomePage = () => {
  const [calendarStyle, setCalendarStyle] = useState('calendar')
  const [showEventDetails, setShowEventDetails] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState({
    name: 'default',
    date: new Date().toLocaleString(),
    description: 'deafult',
  })

  return (
    <div id="HomePage" className="h-100">
      <Header calendarStyle={calendarStyle} changeCalendarStyle={setCalendarStyle}/>
      <div className="calendar-wrapper">
        {calendarStyle === 'calendar' ? <Calendar/> :
          <AllEventsMap setShowEventDetails={setShowEventDetails} setSelectedEvent={setSelectedEvent}/>}
        <div className="event-list-wrapper">
          <EventList
            showEventDetails={showEventDetails}
            setShowEventDetails={setShowEventDetails}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
            events={[{
              name: 'default',
              date: new Date().toLocaleString(),
              description: 'deafult'
            }]}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
