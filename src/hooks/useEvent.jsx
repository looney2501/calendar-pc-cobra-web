import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function useEvent(
  defaultForm = { date: new Date(), location: "",startTime:"01:00", endTime:"23:00" }
) {
  const [event, setEvent] = useState(defaultForm);
  const setters = useRef(null);
  function unwrapValue(x) {
    if (typeof x === "object" && x.target) {
      x = x.target.value;
    }
    return x;
  }

  if (!setters.current) {
    // Only true on first call
    setters.current = {
      setStartDate(startDate) {
        console.log(startDate);
        setEvent((event) => ({ ...event, date:startDate }));
      },

      setLocation(location) {
        setEvent((event) => ({ ...event, location }));
      },

      //time is string
      setStartTime(startTime){
        setEvent(event => ({...event,startTime}))
      },
      //endTime is string
      setEndTime(endTime){
        setEvent(event => ({...event,endTime}))
      }
    };
  }
  return [event, setters.current];
}
