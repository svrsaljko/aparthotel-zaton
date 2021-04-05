import React, { useState, useEffect, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { v4 as uuidv4 } from "uuid"
import { FormattedMessage } from "gatsby-plugin-react-intl"
import {
  Card,
  Title,
  ImagesContainer,
  MainImageAndDescriptionContainer,
  MainImageContainer,
  DescriptionContainer,
  ImagesMenuContainer,
  MenuImage,
} from "./styled"
import Description from "./description"

const Accomodation = ({ title, firstImage, images, description, hashLink }) => {
  // const ref = useRef(hashLink)
  // console.log("refff: ", ref)
  return (
    <Card
    //id={hashLink}
    //ref={ref}
    >
      <Title>
        <FormattedMessage id={title} defaultMessage={"accomodation"} />
      </Title>
      <ImagesContainer>
        <MainImageAndDescriptionContainer>
          <MainImageContainer>
            <GatsbyImage image={firstImage} alt="accomodation-main-image" />
          </MainImageContainer>
          <Description description={description} />
        </MainImageAndDescriptionContainer>

        <ImagesMenuContainer>
          {images.map(({ featuredImage }) => {
            const image = getImage(featuredImage)
            return (
              <MenuImage key={uuidv4()}>
                <GatsbyImage image={image} alt="accomodation-main-image" />
              </MenuImage>
            )
          })}
        </ImagesMenuContainer>
      </ImagesContainer>
    </Card>
  )
}

export default Accomodation
