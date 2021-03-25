import React from "react"
import { TitleWrapper, LogoImage, HamburgerMenuWrapper } from "./headerStyled"
import { Divide as Hamburger } from "hamburger-react"
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
    {/* <LogoImage src={"../../images/aparthotel-zaton-logo.jpeg"} /> */}
    <HamburgerMenuWrapper>
      <Hamburger
        duration={0.3}
        // duration={0.4}

        //toggled={showMenu}
        //toggle={() => dispatch(setShowMenu(!showMenu))}
      />
    </HamburgerMenuWrapper>
  </TitleWrapper>
)

export default TitleContainer
