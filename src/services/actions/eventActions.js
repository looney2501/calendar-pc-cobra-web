import Axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export const getEventsDay = (year, month, day) => {
  return Axios.get(baseUrl + "/events/by-day", {
    params: { year: year, month: month, day: day },
  });
};

//TODO assure that is the good endpoint
export const getEventById = (id) => {
  return Axios.get(baseUrl + `/events/${id}`);
};
