import moment from 'moment'
import { CHANGE_SELECTED_DAY, GET_EVENTS_DAY, CHANGE_LOADING, GET_EVENTS_MONTH, CHANGE_SELECTED_MONTH } from '../actions/actionTypes'

export const initialState = {
  selectedMonth: moment(),
  selectedMonthEvents: [],
  selectedDay: moment(),
  selectedDayEvents: [],
  isLoading: false
}

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LOADING:
      return { ...state, isLoading: action.payload.isLoading }
    case CHANGE_SELECTED_DAY:
      return { ...state, selectedDay: action.payload.selectedDay }
    case GET_EVENTS_DAY:
      return { ...state, selectedDayEvents: action.payload.dayEvents }
    case CHANGE_SELECTED_MONTH:
      return { ...state, selectedMonth: action.payload.selectedMonth }
    case GET_EVENTS_MONTH:
      return { ...state, selectedMonthEvents: action.payload.monthEvents }
    default:
      return state
  }
}
