import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function useEvent(
  defaultForm = { startDate: new Date(), location: "" }
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
        setEvent((event) => ({ ...event, startDate }));
      },

      setLocation(location) {
        setEvent((event) => ({ ...event, location }));
      },
    };
  }
  return [event, setters.current];
}
