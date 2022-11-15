import { initialState, reducer } from '../services/reducers/eventReducer'
import React, { useCallback, useEffect, useReducer } from 'react'
import { GET_EVENTS_DAY, CHANGE_LOADING, CHANGE_SELECTED_DAY } from '../services/actions/actionTypes'
import { getEventsDay } from '../services/actions/eventActions'
import moment from 'moment/moment'
import * as events from 'events'

export const EventContext = React.createContext(initialState)

const EventProvider = ({ children }) => {
  const [eventState, dispatch] = useReducer(reducer, initialState)

  const changeDayCallback = async (newDayMoment) => {
    dispatch({ type: CHANGE_SELECTED_DAY, payload: { selectedDay: newDayMoment } })
    try {
      dispatch({ type: CHANGE_LOADING, payload: { isLoading: true } })
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
      dispatch({ type: CHANGE_LOADING, payload: { isLoading: false } })
    }
  }

  const changeSelectedDay = useCallback(changeDayCallback, [])

  const value = { ...eventState, changeSelectedDay}

  useEffect(() => {
    moment.updateLocale('en', {
      week: {
        dow: 1, // Monday is the first day of the week.
      }
    })
    //Incarca evenimentele pentru ziua curenta
    changeSelectedDay(eventState.selectedDay)
  }, [])

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  )
}

export default EventProvider;