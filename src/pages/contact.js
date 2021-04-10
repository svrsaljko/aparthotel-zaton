import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  // LOGO_DARK_BLUE_ANALOGUS_DARKER,
  // LOGO_DARK_BLUE_COMPLEMENT,
  LOGO_DARK_BLUE,
  LOGO_LIGHT_BLUE,
  // TRIADIC_GOLD,
  CARD_BACKGROUND_ORANGE,
} from "../constants"
import Layout from "../components/layout"
import GoogleMaps from "../components/googleMaps"

const Container = styled.div`
  background: ${CARD_BACKGROUND_ORANGE};
`

const ImageWrapper = styled.div`
  margin-top: 3rem;
`

const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2rem;
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`
const Address = styled.div`
  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`

const Contact = styled.div`
  @media (max-width: 480px) {
    margin-right: 1rem;
  }
`

const Key = styled.div`
  color: ${LOGO_DARK_BLUE};
`

const Value = styled.div`
  color: ${LOGO_LIGHT_BLUE};
`

function ContactPage() {
  return (
    <Layout>
      <Container>
        <GoogleMaps />
        <ImageWrapper>
          <StaticImage
            src="../images/slider-1.jpg"
            alt="aparthotel-zaton-logo"
            quality={100}
            loading="eager"
            layout="constrained"
          />
        </ImageWrapper>
        <Data>
          <Address>
            <Key>Street:</Key>
            <Value>Dražnikova ul. 17, 23232, Zaton</Value>
          </Address>
          <Contact>
            <Key>Phone:</Key>
            <Value>023 265 900</Value>
          </Contact>
        </Data>
      </Container>
    </Layout>
  )
}

export default ContactPage
