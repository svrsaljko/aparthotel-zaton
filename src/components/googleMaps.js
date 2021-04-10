import React, { memo } from "react"
import {
  GoogleMap,
  // useLoadScript,
  LoadScript,
  // useJsApiLoader,
  // Marker,
} from "@react-google-maps/api"
import styled from "styled-components"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: 44.2253927,
  lng: 15.1745283,
}

const Container = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    height: 300px;
  }
`

function GoogleMaps() {
  return (
    <Container>
      <LoadScript
        googleMapsApiKey={`${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          //mapContainerClassName="google-map"
          center={center}
          zoom={16}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </Container>
  )
}

export default memo(GoogleMaps)
