import EventsMap from './EventsMap'
import moment from 'moment/moment'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import React, { useContext } from 'react'
import { EventContext } from '../context/EventProvider'
import "../assets/styles/AllEventsMap.scss"

const AllEventsMap = () => {
  const {
    currentDay,
    selectedDay,
    selectedMonth,
    selectedMonthEvents,
    changeSelectedDay,
    changeSelectedMonth,
    isLoadingMonthEvents
  } = useContext(EventContext)

  return (
    <div id="AllEventsMap" className="d-flex flex-column">
      <div className="calendar-header">
        <button className="btn btn-default" onClick={() => changeSelectedDay(moment(selectedDay.subtract(1, 'd')))}>
          <SlArrowLeft className="prev-month-button"/>
        </button>
        <div className="selected-month">
          {selectedDay.format('dddd, Do MMMM YYYY')}
        </div>
        <button className="btn btn-default" onClick={() => changeSelectedMonth(moment(selectedDay.add(1, 'd')))}>
          <SlArrowRight className="next-month-button"/>
        </button>
      </div>
      <EventsMap/>
    </div>
  )
}

export default AllEventsMap
