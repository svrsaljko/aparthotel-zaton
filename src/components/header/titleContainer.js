import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { displayNavLinkHamburger } from "../../actions/actions"
import { TitleWrapper, LogoImage, HamburgerMenuWrapper } from "./headerStyled"
import { Divide as Hamburger } from "hamburger-react"
import { StaticImage } from "gatsby-plugin-image"

const TitleContainer = () => {
  const showMenu = useSelector(state => state.menuReducer.showMenu)
  const dispatch = useDispatch()
  // const ref = useRef()

  return (
    <TitleWrapper>
      <HamburgerMenuWrapper show={showMenu}>
        <Hamburger
          duration={0.3}
          // duration={0.4}

          toggled={showMenu}
          toggle={() => dispatch(displayNavLinkHamburger(!showMenu))}
        />
      </HamburgerMenuWrapper>
      <StaticImage
        src="../../images/aparthotel-zaton-logo.jpeg"
        alt="aparthotel-zaton-logo"
        width={200}
        height={70}
        //placeholder="blurred"
        //layout="fixed"
      />
      {/* <LogoImage src={"../../images/aparthotel-zaton-logo.jpeg"} /> */}
    </TitleWrapper>
  )
}

export default TitleContainer
