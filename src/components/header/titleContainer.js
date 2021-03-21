import React from "react"
import { TitleWrapper } from "./headerStyled"
import { StaticImage } from "gatsby-plugin-image"

const TitleContainer = () => (
  <TitleWrapper>
    <StaticImage
      src="../../images/aparthotel-zaton-logo.jpeg"
      alt="aparthotel-zaton-logo"
      width={300}
      height={100}
      //placeholder="blurred"
      //layout="fixed"
    />
  </TitleWrapper>
)

export default TitleContainer
