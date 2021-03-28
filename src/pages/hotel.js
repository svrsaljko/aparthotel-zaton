import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import {
  LOGO_DARK_BLUE_ANALOGUS_DARKER,
  LOGO_DARK_BLUE_COMPLEMENT,
  LOGO_DARK_BLUE,
} from "../constants"

const StyledCard = styled.div`
  //background: #faf9f7;
  //background #ffddbd;
  // background: #fcebdc;
  background: #fcf5ed;
  margin-right: 5rem;
  margin-left: 5rem;
  &:not(:first-child) {
    margin-right: 0;
  }
  &:not(:last-child) {
    margin-left: 0;
  }
`
const BodyMainTitle = styled.div`
  // color: ${LOGO_DARK_BLUE_ANALOGUS_DARKER};
  color: ${LOGO_DARK_BLUE_COMPLEMENT};

  font-size: 2.2rem;
  font-weight: bold;
`
const StyledCardTitle = styled.div`
  color: ${LOGO_DARK_BLUE_COMPLEMENT};
  font-size: 2rem;
  text-align: center;
  margin-top: 1.5rem;
  min-height: 5rem;
`
const StyledCardLink = styled.div`
  color: ${LOGO_DARK_BLUE_COMPLEMENT};
  text-decoration: underline;
  font-size 1.5rem;
  text-align:center;
  margin-top:1.5rem;
  margin-bottom: 1.5rem;

`

const StyledLink = styled.div`
color: ${LOGO_DARK_BLUE};
text-decoration: underline;
font-size 1.5rem;
//text-align:center;
margin-top:4rem;
margin-bottom: 1.5rem;
`

function Hotel() {
  return (
    <Layout>
      <StaticImage
        src="../images/slider-2.jpg"
        alt="aparthotel-zaton-logo"
        quality={100}
        loading="eager"
        layout="constrained"
      />

      <div style={{ marginTop: "5rem" }}>
        <BodyMainTitle>SMJEŠTAJ</BodyMainTitle>
        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <StyledCard>
            <StaticImage
              src="../images/slider-3.jpg"
              alt="aparthotel-zaton-logo"
              quality={100}
              loading="eager"
              layout="constrained"
            />
            <StyledCardTitle>Premium soba s balkonom</StyledCardTitle>
            <StyledCardLink> PRIKAŽI POJEDINOSTI </StyledCardLink>
          </StyledCard>
          <StyledCard>
            <StaticImage
              src="../images/slider-4.jpg"
              alt="aparthotel-zaton-logo"
              quality={100}
              loading="eager"
              layout="constrained"
            />

            <StyledCardTitle>Premium soba s krevetom</StyledCardTitle>
            <StyledCardLink> PRIKAŽI POJEDINOSTI </StyledCardLink>
          </StyledCard>
          <StyledCard>
            <StaticImage
              src="../images/slider-5.jpg"
              alt="aparthotel-zaton-logo"
              quality={100}
              loading="eager"
              layout="constrained"
            />

            <StyledCardTitle>Premium soba s pogledom na bazen</StyledCardTitle>
            <StyledCardLink> PRIKAŽI POJEDINOSTI </StyledCardLink>
          </StyledCard>
        </div>
      </div>

      <StyledLink>KORONAVIRUS MJERE</StyledLink>
      <StaticImage
        src="../images/slider-1.jpg"
        alt="aparthotel-zaton-logo"
        quality={100}
        loading="eager"
        layout="constrained"
      />
    </Layout>
  )
}

export default Hotel
