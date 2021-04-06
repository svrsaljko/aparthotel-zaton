import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"
import styled from "styled-components"

const LeftArrowWrapper = styled.div`
  font-size: 4rem;
  color: white;
  z-index: 999;
  top: 45%;
  position: absolute;
  opacity: 0.5;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  @media (max-width: 480px) {
    //display: none;
  }
`

const RightArrowWrapper = styled.div`
  font-size: 4rem;
  color: white;
  position: absolute;
  z-index: 999;
  top: 45%;
  right: 0%;
  opacity: 0.5;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  @media (max-width: 480px) {
    //display: none;
  }
`

const mainImage = ({ nextImageOnClick, prevImageOnClick, activeImage }) => {
  return (
    <>
      <LeftArrowWrapper onClick={prevImageOnClick}>
        <RiArrowLeftSLine />
      </LeftArrowWrapper>
      <GatsbyImage image={activeImage} alt="accomodation-main-image" />
      <RightArrowWrapper onClick={nextImageOnClick}>
        <RiArrowRightSLine />
      </RightArrowWrapper>
    </>
  )
}

export default mainImage
