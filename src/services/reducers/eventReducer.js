import moment from 'moment'
import {
  CHANGE_SELECTED_DAY,
  GET_EVENTS_DAY,
  CHANGE_LOADING_DAY_EVENTS,
  GET_EVENTS_MONTH,
  CHANGE_SELECTED_MONTH,
  CHANGE_LOADING_MONTH_EVENTS,
  CHANGE_LOADING_EVENT_NOTES,
  CHANGE_SELECTED_EVENT,
  GET_NOTES_EVENT
} from '../actions/actionTypes'

export const initialState = {
  selectedMonth: moment(),
  selectedMonthEvents: [],
  selectedDay: moment(),
  selectedDayEvents: [],
  selectedEvent: null,
  selectedEventNotes: [],
  isLoadingDayEvents: false,
  isLoadingMonthEvents: false,
  isLoadingEventNotes: false
}

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LOADING_DAY_EVENTS:
      return { ...state, isLoadingDayEvents: action.payload.isLoading }
    case CHANGE_LOADING_MONTH_EVENTS:
      return { ...state, isLoadingMonthEvents: action.payload.isLoading }
    case CHANGE_LOADING_EVENT_NOTES:
      return { ...state, isLoadingEventNotes: action.payload.isLoading }
    case CHANGE_SELECTED_DAY:
      return { ...state, selectedDay: action.payload.selectedDay }
    case GET_EVENTS_DAY:
      return { ...state, selectedDayEvents: action.payload.dayEvents }
    case CHANGE_SELECTED_MONTH:
      return { ...state, selectedMonth: action.payload.selectedMonth }
    case GET_EVENTS_MONTH:
      return { ...state, selectedMonthEvents: action.payload.monthEvents }
    case CHANGE_SELECTED_EVENT:
      return { ...state, selectedEvent: action.payload.selectedEvent }
    case GET_NOTES_EVENT:
      return { ...state, selectedEventNotes: action.payload.eventNotes }
    default:
      return state
  }
}
