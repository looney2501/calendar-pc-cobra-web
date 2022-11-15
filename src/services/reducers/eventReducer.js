import moment from 'moment'
import { CHANGE_SELECTED_DAY, GET_EVENTS_DAY, CHANGE_LOADING } from '../actions/actionTypes'

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
    default:
      return state
  }
}
