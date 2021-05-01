import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper"
import "swiper/swiper-bundle.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import isMobile from "is-mobile"
import {
  LOGO_DARK_BLUE_ANALOGUS_DARKER,
  LOGO_DARK_BLUE_COMPLEMENT,
  LOGO_DARK_BLUE,
  LOGO_LIGHT_BLUE,
  TRIADIC_GOLD,
} from "../constants"

const ReviewsContainer = styled.div`
  text-align: center;
  color: white;
  background: ${LOGO_DARK_BLUE};
  // margin-top: 3rem;
  display: flex;
  flex-direction: column;
`
const ReviewsContainerTitle = styled.div`
 margin-top: 2rem;
  // color: ${TRIADIC_GOLD};
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
`
const ReviewTitle = styled.div`
  // color: ${TRIADIC_GOLD};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 4rem;

  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`
const ReviewBody = styled.div`
  // color: ${TRIADIC_GOLD};
  margin-bottom: 4rem;
  font-size: 1.2rem;
  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`

const Container = styled.div`
// margin-top:10rem;
 padding: 2rem 0 2rem 0;
 margin: 2rem 0 2rem 0;

  border-top: 1px solid ${TRIADIC_GOLD};
  border-bottom: 1px solid ${TRIADIC_GOLD};
  //  border: 1px solid ${TRIADIC_GOLD};

  // padding: 10px;
  // box-shadow:10px 0 10px ${TRIADIC_GOLD};
  // padding: 3rem 0 3rem 0;
`

SwiperCore.use([Navigation, Pagination, Controller, Thumbs])

const getSwiperProps = () => {
  const swiperProps = {
    pagination: true,
  }
  if (!isMobile()) {
    swiperProps["navigation"] = true
    swiperProps["onSlideChange"] = swiper => swiper
  }

  return swiperProps
}

const ReviewSwiper = ({ reviews }) => {
  const swiperProps = getSwiperProps()
  const reviewSwiper = reviews.map((review, index) => {
    return (
      <SwiperSlide
        key={uuidv4()}
        style={{
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <ReviewWrapper key={index + 100} backgroundColor={index % 2 === 0}>
          <ReviewBody>{review.review}</ReviewBody>
          <ReviewTitle> {review.customer} </ReviewTitle>
        </ReviewWrapper>
      </SwiperSlide>
    )
  })

  return (
    <Container>
      <ReviewsContainer>
        <ReviewsContainerTitle>
          What are quest says about us
        </ReviewsContainerTitle>

        <Swiper {...swiperProps} style={{ width: "100%" }}>
          {reviewSwiper}
        </Swiper>
      </ReviewsContainer>
    </Container>
  )
}

export default ReviewSwiper
