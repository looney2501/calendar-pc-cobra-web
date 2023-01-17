import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function useEvent(
  defaultForm = { name: '', startTime: '', endTime: '' }
) {
  const [event, setEvent] = useState(defaultForm)
  const setters = useRef(null)

  function unwrapValue(x) {
    if (typeof x === 'object' && x.target) {
      x = x.target.value
    }
    return x
  }

  if (!setters.current) {
    // Only true on first call
    setters.current = {
      setName(name) {
        setEvent(event => ({ ...event, name }))
      },
      setDescription(description) {
        setEvent(event => ({ ...event, description }))
      },
      //time is string
      setStartTime(startTime) {
        setEvent(event => ({ ...event, startTime }))
      },
      //endTime is string
      setEndTime(endTime) {
        setEvent(event => ({ ...event, endTime }))
      },
      setLatitude(latitude) {
        setEvent(event => ({ ...event, latitude }))
      },
      setLongitude(longitude) {
        setEvent(event => ({ ...event, longitude }))
      }
    }
  }
  return [event, setters.current]
}
