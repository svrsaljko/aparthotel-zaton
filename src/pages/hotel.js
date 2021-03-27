import React, { useState, useEffect } from "react"
import SLIDER_1 from "../images/slider-1.jpg"
import SLIDER_2 from "../images/slider-2.jpg"
import SLIDER_3 from "../images/slider-3.jpg"
import SLIDER_4 from "../images/slider-4.jpg"
import SLIDER_5 from "../images/slider-5.jpg"
import SLIDER_6 from "../images/slider-6.jpg"
import Layout from "../components/layout"
import {
  SliderImage,
  SlideShowGallery,
  ImageButtonsContainer,
  ImageButton,
} from "../components/hotelStyled"

const SECOND = 1000
const TIME = 3 * SECOND
const IMAGE_SRC_ARRAY = [
  SLIDER_1,
  SLIDER_2,
  SLIDER_3,
  SLIDER_4,
  SLIDER_5,
  SLIDER_6,
]

export default function AparthotelHomePage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [timerRef, setTimerRef] = useState(null)
  const [initialTimerRef, setInitialTimerRef] = useState(null)

  const [isImageSelected, setIsImageSelected] = useState(false)

  const handleImageButtonClick = index => {
    setActiveIndex(index)
    setIsImageSelected(true)
  }

  const startSlideShow = () => {
    setActiveIndex(
      prevActiveIndex => (prevActiveIndex + 1) % IMAGE_SRC_ARRAY.length
    )
  }

  useEffect(() => {
    const timer = setInterval(startSlideShow, TIME)
    setInitialTimerRef(timer)
    return () => {
      clearInterval(timer)

      setInitialTimerRef(null)
    }
  }, [])

  useEffect(() => {
    if (isImageSelected) {
      if (initialTimerRef !== null) {
        clearInterval(initialTimerRef)
      }
      setIsImageSelected(false)
      return () => {
        let timer = setInterval(startSlideShow, TIME)
        setTimerRef(timer)
      }
    }
  }, [isImageSelected])

  useEffect(() => () => clearInterval(timerRef), [timerRef])

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <SlideShowGallery activeIndex={activeIndex}>
          {IMAGE_SRC_ARRAY.map(imgSrc => (
            <SliderImage key={imgSrc} src={imgSrc} />
          ))}
          <ImageButtonsContainer>
            {IMAGE_SRC_ARRAY.map((imgSrc, index) => (
              <ImageButton
                key={imgSrc + index}
                active={activeIndex === index}
                onClick={() => handleImageButtonClick(index)}
              />
            ))}
          </ImageButtonsContainer>
        </SlideShowGallery>
      </div>
    </Layout>
  )
}
