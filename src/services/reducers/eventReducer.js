import moment from 'moment'
import * as actionTypes from '../actions/actionTypes'

export const initialState = {
  selectedMonth: moment(),
  selectedMonthEvents: [],
  selectedDay: moment(),
  selectedDayEvents: [],
  selectedEvent: null,
  isLoadingDayEvents: false,
  isLoadingMonthEvents: false,
  isLoadingEvent: false
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOADING_DAY_EVENTS:
      return { ...state, isLoadingDayEvents: action.payload.isLoading }
    case actionTypes.CHANGE_LOADING_MONTH_EVENTS:
      return { ...state, isLoadingMonthEvents: action.payload.isLoading }
    case actionTypes.CHANGE_LOADING_EVENT:
      return { ...state, isLoadingEvent: action.payload.isLoading }
    case actionTypes.CHANGE_SELECTED_DAY:
      return { ...state, selectedDay: action.payload.selectedDay }
    case actionTypes.GET_EVENTS_DAY:
      return { ...state, selectedDayEvents: action.payload.dayEvents }
    case actionTypes.CHANGE_SELECTED_MONTH:
      return { ...state, selectedMonth: action.payload.selectedMonth }
    case actionTypes.GET_EVENTS_MONTH:
      return { ...state, selectedMonthEvents: action.payload.monthEvents }
    case actionTypes.CHANGE_SELECTED_EVENT:
      return { ...state, selectedEvent: action.payload.selectedEvent }
    case actionTypes.GET_EVENT:
      return { ...state }
    default:
      return state
  }
}
