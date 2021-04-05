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

// first image maknit iz parenta
const Accomodation = ({ title, images, description, firstImage, hashLink }) => {
  // const ref = useRef(hashLink)
  // console.log("refff: ", ref)
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeImage, setActiveImage] = useState(
    getImage(images[activeIndex].featuredImage)
  )

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
            <GatsbyImage image={activeImage} alt="accomodation-main-image" />
          </MainImageContainer>
          <Description description={description} />
        </MainImageAndDescriptionContainer>

        <ImagesMenuContainer>
          {images.map(({ featuredImage }, index) => {
            const image = getImage(featuredImage)
            return (
              <MenuImage
                onClick={() => {
                  setActiveIndex(index)
                  setActiveImage(getImage(images[index].featuredImage))
                }}
                active={activeIndex === index}
                key={uuidv4()}
              >
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
