import React, { useCallback, useEffect, useMemo, useState } from 'react'
import moment from 'moment'
import { getWeekdaysShort } from '../utils/calendarUtils'
import '../assets/styles/Calendar.scss'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(moment())
  const [selectedDay, setSelectedDay] = useState(moment())

  useEffect(() => {
    moment.updateLocale('en', {
      week: {
        dow: 1, // Monday is the first day of the week.
      }
    })
  }, [])
  const weekdaysShort = useMemo(() => getWeekdaysShort(), [])
  const currentDay = moment()

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
          <div className='calendar-day-wrapper' onClick={() => setSelectedDay(moment(selectedMonth.date(d))) }>
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
  }, [selectedMonth, selectedDay])

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
  }, [selectedMonth, selectedDay])

  const [calendarSlots, setCalendarSlots] = useState(getCalendarSlots())

  useEffect(() => {
    setCalendarSlots(getCalendarSlots())
  }, [selectedMonth, selectedDay])

  return (
    <>
      <div className='calendar-month'>
        <SlArrowLeft className='prev-month-button' onClick={() => setSelectedMonth(moment(selectedMonth.subtract(1, 'M')))}/>
        <SlArrowRight className='next-month-button' onClick={() => setSelectedMonth(moment(selectedMonth.add(1, 'M')))}/>
        <span className='selected-month'>
          { selectedMonth.format('MMMM YYYY') }
        </span>    
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
          { calendarSlots }
        </tbody>
      </table>
    </>
  )
}

export default Calendar