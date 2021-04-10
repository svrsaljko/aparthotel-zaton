import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { v4 as uuidv4 } from "uuid"
import { FormattedMessage } from "gatsby-plugin-react-intl"
import MainImage from "./mainImage"
import {
  Card,
  Title,
  ImagesContainer,
  MainImageAndDescriptionContainer,
  MainImageContainer,
  ImagesMenuContainer,
  MenuImage,
} from "./styled"
import Description from "./description"

// first image maknit iz parenta
const Accomodation = ({ title, images, description, firstImage, hashLink }) => {
  // const ref = useRef(hashLink)
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeImage, setActiveImage] = useState(
    getImage(images[activeIndex].featuredImage)
  )

  const setImage = index => {
    setActiveIndex(index)
    setActiveImage(getImage(images[index].featuredImage))
  }

  const nextImageOnClick = () => {
    const index = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setImage(index)
  }

  const prevImageOnClick = () => {
    const index = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setImage(index)
  }
  return (
    <Card
    // fragment tu ako je visak
    //id={hashLink}
    //ref={ref}
    >
      <Title>
        <FormattedMessage id={title} defaultMessage={"accomodation"} />
      </Title>
      <ImagesContainer>
        <MainImageAndDescriptionContainer>
          <MainImageContainer>
            <MainImage
              nextImageOnClick={nextImageOnClick}
              prevImageOnClick={prevImageOnClick}
              activeImage={activeImage}
            />
          </MainImageContainer>
          <Description description={description} />
        </MainImageAndDescriptionContainer>

        <ImagesMenuContainer>
          {images.map(({ featuredImage }, index) => {
            const image = getImage(featuredImage)
            return (
              <MenuImage
                onClick={() => {
                  setImage(index)
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
