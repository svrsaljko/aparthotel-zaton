import React, { memo } from "react"
import {
  GoogleMap,
  // useLoadScript,
  LoadScript,
  // useJsApiLoader,
  Marker,
} from "@react-google-maps/api"
import styled from "styled-components"
import icon from "../images/icon.ico"
import { StaticImage } from "gatsby-plugin-image"

// ikona i fragment link

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
//const Icon = () => <img src={icon} alt="icon" />

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
          zoom={18}
        >
          {/* <StaticImage
            src="../../images/icon.ico"
            alt="aparthotel-zaton-icon"
            quality={100}
            width={20}
            height={20}
            // loading="lazy"
            loading="eager"
            //placeholder="blurred"
            layout="constrained"
            //layout="fixed"
          /> */}
          {/* Child components, such as markers, info windows, etc. */}
          {/* <div style={{ width: "20px", height: "30px" }}>
            <Marker position={center} icon={icon} /> */}
          {/* </div> */}
          <></>
        </GoogleMap>
      </LoadScript>
    </Container>
  )
}

export default memo(GoogleMaps)
