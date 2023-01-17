import EventsMap from './EventsMap'
import moment from 'moment/moment'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import React, { useCallback, useContext } from 'react'
import { EventContext } from '../context/EventProvider'
import "../assets/styles/AllEventsMap.scss"
import { Marker } from 'google-maps-react-17'

const AllEventsMap = ({ setShowEventDetails, setSelectedEvent }) => {
  const {
    selectedDay,
    selectedDayEvents,
    changeSelectedDay,
  } = useContext(EventContext)

  const getMarkersFromEvents = useCallback(() => {
    return selectedDayEvents.map((e) => {
      return { lat: e.latitude, lng: e.longitude, event: e }
    })
  }, [selectedDayEvents])

  const handleMarkerClick = (event) => {
    setShowEventDetails(true)
    setSelectedEvent(event)
  }

  return (
    <div id="AllEventsMap" className="d-flex flex-column">
      <div className="calendar-header">
        <button className="btn btn-default" onClick={() => changeSelectedDay(moment(selectedDay.subtract(1, 'day')))}>
          <SlArrowLeft className="prev-month-button" />
        </button>
        <div className="selected-month">
          {selectedDay.format('dddd, Do MMMM YYYY')}
        </div>
        <button className="btn btn-default" onClick={() => changeSelectedDay(moment(selectedDay.add(1, 'day')))}>
          <SlArrowRight className="next-month-button" />
        </button>
      </div>
      <EventsMap markers={getMarkersFromEvents()} onClickMarker={handleMarkerClick} />
    </div>
  )
}

export default AllEventsMap
