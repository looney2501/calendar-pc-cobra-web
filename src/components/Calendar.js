import React, { useCallback, useEffect, useMemo, useState } from 'react'
import moment from 'moment'
import { getWeekdaysShort } from '../utils/calendarUtils'
import '../assets/styles/Calendar.scss'

const Calendar = () => {

  const weekdaysShort = useMemo(() => getWeekdaysShort(), [])

  const currentDay = useMemo(() => {
    return moment().format("D")
  }, [])

  useEffect(() => {
    moment.updateLocale('en', {
      week: {
        dow: 1, // Monday is the first day of the week.
      }
    })
  }, [])

  const firstDayOfMonth = useCallback(() => {
    return moment()
      .startOf('month')
      .format('d') - 1
  }, [])

  const noDaysInMonth = useCallback(() => {
    return moment()
      .daysInMonth()
  }, [])

  const getBeforeBlankDays = useCallback(() => {
    let blanks = []
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(
        <td className="calendar-day-empty">{''}</td>
      )
    }
    return blanks
  }, [])

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
  }, [])

  const getAfterBlankDays = useCallback(() => {
    let blanks = []
    const noBeforeBlanks = firstDayOfMonth()
    const noMonthDays = noDaysInMonth()
    const totalDays = noMonthDays + noBeforeBlanks
    for (let d = 0; d < 42 - totalDays; d++) {
      blanks.push(
        <td className="calendar-day-empty">{''}</td>
      )
    }
    return blanks
  }, [])

  const getCalendarSlots = useCallback(() => {
    const totalSlots = [...getBeforeBlankDays(), ...getMonthDays(), ...getAfterBlankDays()]
    const rows = []
    for (let i = 0; i < 6; i++) {
      rows.push(totalSlots.slice(i * 7, (i + 1) * 7))
    }

    return (
      <>
        {rows.map(row => {
          return (
            <tr>{row}</tr>
          )
        })
        }
      </>
    )
  }, [])

  return (
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
        {
          getCalendarSlots()
        }
      </tbody>
    </table>
  )
}

export default Calendar