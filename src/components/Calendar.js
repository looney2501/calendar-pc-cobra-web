import React, { useCallback, useEffect, useMemo, useState } from 'react'
import moment from 'moment'
import { getWeekdaysShort } from '../utils/calendarUtils'

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(moment())

  const weekdaysShort = useMemo(() => getWeekdaysShort(), [])

  const currentDay = moment().format("D")

  useEffect(() => {
    moment.updateLocale('en', {
      week: {
        dow: 1, // Monday is the first day of the week.
      }
    })
  }, [])

  const firstDayOfMonth = useCallback(() => {
    return (selectedDay
      .startOf('month')
      .format('d') - 1 + 7) % 7
  }, [selectedDay])

  const noDaysInMonth = useCallback(() => {
    return selectedDay
      .daysInMonth()
  }, [selectedDay])

  const getBeforeBlankDays = useCallback(() => {
    let blanks = []
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(
        <td key={-i} className="calendar-day-empty">{''}</td>
      )
    }
    return blanks
  }, [selectedDay])

  const getMonthDays = useCallback(() => {
    let daysInMonth = []
    for (let d = 1; d <= noDaysInMonth(); d++) {
      daysInMonth.push(
        <td key={d} className={`${d.toString() === currentDay ? "today" : ""}`}>
          <div className='calendar-day-wrapper'>
            <div className='calendar-day'>
              <div className='calendar-day-circle'>
                {d}
              </div>
            </div>
            <div className='calendar-day-events'></div>
          </div>
        </td>
      )
    }
    return daysInMonth
  }, [selectedDay])

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
  }, [selectedDay])

  const getCalendarSlots = () => {
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
  }
  const [calendarSlots, setCalendarSlots] = useState(getCalendarSlots())
  useEffect(() => {
    setCalendarSlots(getCalendarSlots())
  }, [selectedDay])
  return (
    <>
      <div>
        <span className='prev-month-button' onClick={ () => setSelectedDay(moment(selectedDay.subtract(1, 'M')))}>
          prev----
        </span>
        <span className='selected-month'>
          { selectedDay.format('MMMM YYYY') }
        </span>      
        <span className='next-month-button' onClick={ () => setSelectedDay(moment(selectedDay.add(1, 'M')))}>
          ----next
        </span>
      </div>
      <table>
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
          { calendarSlots }
        </tbody>
      </table>
    </>
  )
}

export default Calendar