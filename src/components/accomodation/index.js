import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { v4 as uuidv4 } from "uuid"
import { FormattedMessage } from "gatsby-plugin-react-intl"
import MainImage from "./mainImage"
import {
  Card,
  Title,
  MainImageAndDescriptionContainer,
  MainImageContainer,
} from "./styled"
import ImageSwiper from "../imageSwiper"
import Description from "./description"
import styled from "styled-components"

// const sliderParams = {
//   slidesPerView: "auto",
//   centeredSlides: true,
// }

const ImageSwiperContainer = styled.div`
  // position: absolute;
  width: 60%;
  @media (max-width: 480px) {
    // display: none;
    // border: 3px solid red;
    position: relative;
    height: 50%;
    width: 100%;
  }
`

// first image maknit iz parenta
const Accomodation = ({ title, images, description, firstImage, hashLink }) => {
  return (
    <Card
    // fragment tu ako je visak
    //id={hashLink}
    //ref={ref}
    >
      <Title>
        <FormattedMessage id={title} defaultMessage={"accomodation"} />
      </Title>
      <MainImageAndDescriptionContainer>
        <ImageSwiperContainer>
          <ImageSwiper images={images} />
        </ImageSwiperContainer>
        <Description description={description} />
      </MainImageAndDescriptionContainer>
    </Card>
  )
}

export default Accomodation
