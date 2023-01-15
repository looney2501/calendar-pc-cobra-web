import { Map, Marker, GoogleApiWrapper } from 'google-maps-react-17'
import { useEffect, useState } from 'react'
import "../assets/styles/EventsMap.scss"

const EventsMap = (props) => {
  const [initialLocation, setInitialLocation] = useState({ lng: 0, lat: 0 })

  const containerStyle = {
    position: 'relative',
    height: '100%',
    width: '100%'
  }

  useEffect(async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        setInitialLocation({
          lng: position.coords.longitude,
          lat: position.coords.latitude
        })
      }
    )
  }, [])

  return (
    <Map
      google={props.google}
      zoom={13}
      streetViewControl={false}
      fullScreenControl={false}
      center={initialLocation}
      containerStyle={containerStyle}
      onClick={props.onMapClick}
    >
      {props.markers && props.markers.map((marker, i) =>
        <Marker key={i}
          position={{
            lat: marker.lat,
            lng: marker.lng
          }} />
      )}
    </Map>
  )
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_API_KEY })(EventsMap)
