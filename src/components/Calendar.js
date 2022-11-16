import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import moment from 'moment'
import { getWeekdaysShort } from '../utils/calendarUtils'
import '../assets/styles/Calendar.scss'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { EventContext } from '../context/EventProvider'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const Calendar = () => {
  // const [selectedMonth, setSelectedMonth] = useState(moment())
  // const [selectedDay, setSelectedDay] = useState(moment())
  const weekdaysShort = useMemo(() => getWeekdaysShort(), [])
  const currentDay = useMemo(() => moment(), [])

  const { selectedDay, selectedMonth, selectedMonthEvents, changeSelectedDay, changeSelectedMonth, isLoadingMonthEvents } = useContext(EventContext)

  const firstDayOfMonth = useCallback(() => {
    return (Number.parseInt(selectedMonth
      .startOf('month')
      .format('d')) + 6) % 7
  }, [selectedMonth])

  const noDaysInMonth = useCallback(() => {
    return selectedMonth
      .daysInMonth()
  }, [selectedMonth])

  const getBeforeBlankDays = useCallback(() => {
    let blanks = []
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(
        <td key={-i} className="calendar-day-empty">{''}</td>
      )
    }
    return blanks
  }, [selectedMonth])


  const getMonthDays = useCallback(() => {
    let daysInMonth = []
    for (let d = 1; d <= noDaysInMonth(); d++) {
      daysInMonth.push(
        <td key={d} className={`${d.toString() === currentDay.format('D') && selectedMonth.format('M Y') === currentDay.format('M Y') ? 'today' : ''}` +
                              ` ${d.toString() === selectedDay.format('D') && selectedMonth.format('M Y') === selectedDay.format('M Y') ? 'selected' : ''}`}>
          <div className='calendar-day-wrapper' onClick={() => changeSelectedDay(moment(selectedMonth.date(d))) }>
            <div className='calendar-day'>
              <div className='calendar-day-circle'>
                {d}
              </div>
            </div>
            {isLoadingMonthEvents === true ? (
              <></>
            ) : (
              <div className='calendar-day-events'>
                <ListGroup className='calendar-day-event-list'>
                  { selectedMonthEvents[d] && selectedMonthEvents[d]
                    .slice(0, 2)
                    .map((ev, i) => <ListGroupItem key={i} className='calendar-day-event'>{ev.name}</ListGroupItem>) }
                </ListGroup>
                { selectedMonthEvents[d] && selectedMonthEvents[d].length > 2 &&
                  <div className='calendar-day-more-events'> +{selectedMonthEvents[d].length - 2} </div>}
              </div>
            )}
          </div>
        </td>
      )
    }
    return daysInMonth
  }, [selectedMonth, selectedDay, selectedMonthEvents, isLoadingMonthEvents])

  const getAfterBlankDays = useCallback(() => {
    let blanks = []
    const noBeforeBlanks = firstDayOfMonth()
    const noMonthDays = noDaysInMonth()
    const totalDays = noMonthDays + noBeforeBlanks
    for (let d = 0; d < 42 - totalDays; d++) {
      blanks.push(
        <td key={42 - totalDays + d} className="calendar-day-empty">{''}</td>
      )
    }
    return blanks
  }, [selectedMonth])

  const getCalendarSlots = useCallback(() => {
    const totalSlots = [...getBeforeBlankDays(), ...getMonthDays(), ...getAfterBlankDays()]
    const rows = []
    for (let i = 0; i < 6; i++) {
      rows.push(totalSlots.slice(i * 7, (i + 1) * 7))
    }
    let i = 0;
    return (
      <>
        {rows.map(row => {
          return (
            <tr key={i++}>{row}</tr>
          )
        })
        }
      </>
    )
  }, [selectedMonth, selectedDay, selectedMonthEvents, isLoadingMonthEvents])

  return (
    <div id="Calendar" className="d-flex flex-column">
      <div className='calendar-header'>
        <button className="btn btn-default" onClick={() => changeSelectedMonth(moment(selectedMonth.subtract(1, 'M')))}>
          <SlArrowLeft className='prev-month-button' />
        </button>
        <div className='selected-month'>
          {selectedMonth.format('MMMM YYYY')}
        </div>
        <button className="btn btn-default" onClick={() => changeSelectedMonth(moment(selectedMonth.add(1, 'M')))}>
          <SlArrowRight className='next-month-button' />
        </button>
      </div>
      <table className='calendar-table'>
        <thead>
          <tr>
            {weekdaysShort.map(day => {
                return (
                  <th key={day} className="week-day">
                    {day}
                  </th>
                )
              }
            )}
          </tr>
        </thead>
        <tbody>
          {getCalendarSlots()}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar