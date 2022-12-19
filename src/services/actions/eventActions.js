import Axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export const getEventsDay = (year, month, day, username) => {
  return Axios.get(baseUrl + `/events/by-day/${username}`, {
    params: { year: year, month: month, day: day },
  });
};

export const getEventById = (id) => {
  return Axios.get(baseUrl + `/events/${id}`);
};

export const getEventsMonth = (year, month, username) => {
  return Axios.get(baseUrl + `/events/by-month-year/${username}`, {
    params: { year: year, month: month }
  })
}

export const postEvent = (event) => {
  return Axios.post(baseUrl + '/events', event)
}
