import { initialState, reducer } from '../services/reducers/eventReducer'
import React, { useCallback, useEffect, useReducer } from 'react'
import {
  GET_EVENTS_DAY,
  CHANGE_LOADING_DAY_EVENTS,
  CHANGE_SELECTED_DAY,
  GET_EVENTS_MONTH,
  CHANGE_SELECTED_MONTH,
  CHANGE_LOADING_MONTH_EVENTS
} from '../services/actions/actionTypes'
import { getEventsDay, getEventsMonth } from '../services/actions/eventActions'
import moment from 'moment/moment'
import * as events from 'events'

export const EventContext = React.createContext(initialState)

const EventProvider = ({ children }) => {
  const [eventState, dispatch] = useReducer(reducer, initialState)

  const changeDayCallback = async (newDayMoment) => {
    dispatch({ type: CHANGE_SELECTED_DAY, payload: { selectedDay: newDayMoment } })
    try {
      dispatch({ type: CHANGE_LOADING_DAY_EVENTS, payload: { isLoading: true } })
      var month = newDayMoment.format('M')
      var day   = newDayMoment.format('D')
      var year  = newDayMoment.format('YYYY')
      const response = await getEventsDay(year, month, day)
      const dayEvents = response.data
      dispatch({ type: GET_EVENTS_DAY, payload: { dayEvents: dayEvents } })
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
    } finally {
      dispatch({ type: CHANGE_LOADING_DAY_EVENTS, payload: { isLoading: false } })
    }
  }

  const changeMonthCallback = async (newMonth) => {
    dispatch({ type: CHANGE_SELECTED_MONTH, payload: { selectedMonth: newMonth } })
    try {
      dispatch({ type: CHANGE_LOADING_MONTH_EVENTS, payload: { isLoading: true } })
      var month = newMonth.format('M')
      var year = newMonth.format('YYYY')
      const response = await getEventsMonth(year, month)
      const monthEvents = response.data
      dispatch({ type: GET_EVENTS_MONTH, payload: { monthEvents: monthEvents } })
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
    } finally {
      dispatch({ type: CHANGE_LOADING_MONTH_EVENTS, payload: { isLoading: false } })
    }
  }

  const changeSelectedDay = useCallback(changeDayCallback, [])
  const changeSelectedMonth = useCallback(changeMonthCallback, [])

  const value = { ...eventState, changeSelectedDay, changeSelectedMonth}

  useEffect(() => {
    moment.updateLocale('en', {
      week: {
        dow: 1, // Monday is the first day of the week.
      }
    })
    //Incarca evenimentele pentru ziua curenta
    changeSelectedDay(eventState.selectedDay)
    changeSelectedMonth(eventState.selectedMonth)
  }, [])
  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  )
}

export default EventProvider