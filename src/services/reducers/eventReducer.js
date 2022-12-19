import moment from 'moment'
import {
  CHANGE_SELECTED_DAY,
  GET_EVENTS_DAY,
  CHANGE_LOADING_DAY_EVENTS,
  GET_EVENTS_MONTH,
  CHANGE_SELECTED_MONTH,
  CHANGE_LOADING_MONTH_EVENTS, POST_EVENT, CHANGE_LOADING_POST_EVENT
} from '../actions/actionTypes'

export const initialState = {
  selectedMonth: moment(),
  selectedMonthEvents: [],
  selectedDay: moment(),
  selectedDayEvents: [],
  isLoadingDayEvents: false,
  isLoadingMonthEvents: false,
  isLoadingAddEvent: false
}

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LOADING_DAY_EVENTS:
      return { ...state, isLoadingDayEvents: action.payload.isLoading }
    case CHANGE_LOADING_MONTH_EVENTS:
      return { ...state, isLoadingMonthEvents: action.payload.isLoading }
    case CHANGE_SELECTED_DAY:
      return { ...state, selectedDay: action.payload.selectedDay }
    case GET_EVENTS_DAY:
      return { ...state, selectedDayEvents: action.payload.dayEvents }
    case CHANGE_SELECTED_MONTH:
      return { ...state, selectedMonth: action.payload.selectedMonth }
    case GET_EVENTS_MONTH:
      return { ...state, selectedMonthEvents: action.payload.monthEvents }
    case POST_EVENT:
      let newSelectedMonthEvents = { ...state.selectedMonthEvents }
      newSelectedMonthEvents[`${action.payload.day}`] = newSelectedMonthEvents[`${action.payload.day}`].concat(action.payload.newEvent)
      return {
        ...state,
        selectedDayEvents: state.selectedDayEvents.concat(action.payload.newEvent),
        selectedMonthEvents: newSelectedMonthEvents
      }
    case CHANGE_LOADING_POST_EVENT:
      return { ...state, isLoadingAddEvent: action.payload.isLoading }
    default:
      return state
  }
}
