import React, { useState, Component } from "react"
import {
  GoogleMap,
  useLoadScript,
  LoadScript,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api"

const containerStyle = {
  width: "400px",
  height: "400px",
}

const center = {
  lat: 44.2253927,
  lng: 15.1745283,
}
function GoogleMaps() {
  return (
    <LoadScript
    //      googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY_DEV}`}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        // mapContainerClassName="google-map"
        center={center}
        zoom={16}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMaps)
