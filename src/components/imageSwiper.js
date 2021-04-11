import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper"
import "swiper/swiper-bundle.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import isMobile from "is-mobile"

const ImageWrapper = styled.div`
  //   border: 3px solid yellow;
  //   height: 100%;
  //   width: 100%;

  display: flex;
  flex-direction: row;
  position: relative;
  // border: 3px solid red;

  //   @media (max-width: 480px) {
  //     width: 100%;
  //   }
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

function ImageSwiper({ images }) {
  const swiperProps = getSwiperProps()
  const imageSwiper = images.map(({ featuredImage }, index) => {
    const image = getImage(featuredImage)

    return (
      <SwiperSlide
        key={uuidv4()}
        style={{
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <ImageWrapper>
          <GatsbyImage
            loading="eager"
            image={image}
            alt="accomodation-main-image"
          />
        </ImageWrapper>
      </SwiperSlide>
    )
  })

  return (
    <Swiper {...swiperProps} style={{ width: "100%" }}>
      {imageSwiper}
    </Swiper>
  )
}

export default ImageSwiper
