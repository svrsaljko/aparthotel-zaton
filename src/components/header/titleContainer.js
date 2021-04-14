import React from "react"
import { useSelector, useDispatch } from "react-redux"
import LanguageSelector from "../languageSelector"
import { displayNavLinkHamburger } from "../../actions/actions"
import {
  TitleWrapper,
  TitleContainerStyled,
  TitleImageWrapper,
  HamburgerMenuWrapper,
  StarContainer,
  StarWrapper,
  LanguageSelectorMailtoWrapper,
} from "./headerStyled"
import { navigate } from "gatsby-plugin-react-intl"
import Mailto from "../mailto"
import { Divide as Hamburger } from "hamburger-react"
import { StaticImage } from "gatsby-plugin-image"
import { FaStar } from "react-icons/fa"

const TitleContainer = () => {
  const showMenu = useSelector(state => state.menuReducer.showMenu)
  const dispatch = useDispatch()
  // const ref = useRef()

  return (
    <TitleWrapper>
      <TitleContainerStyled
        onClick={() => {
          navigate("/hotel")
        }}
      >
        <TitleImageWrapper>
          <StaticImage
            src="../../images/aparthotel-zaton-logo.jpeg"
            alt="aparthotel-zaton-logo"
            quality={100}
            //width={300}
            //height={100}
            // loading="lazy"
            loading="eager"
            //placeholder="blurred"
            layout="constrained"
            //layout="fixed"
          />
          {/* <LogoImage src={"../../images/aparthotel-zaton-logo.jpeg"} /> */}
        </TitleImageWrapper>

        <StarContainer>
          <StarWrapper>
            <FaStar />
          </StarWrapper>
          <StarWrapper>
            <FaStar />
          </StarWrapper>
          <StarWrapper>
            <FaStar />
          </StarWrapper>
        </StarContainer>
      </TitleContainerStyled>
      <LanguageSelectorMailtoWrapper>
        <LanguageSelector />
        <Mailto />
        <HamburgerMenuWrapper show={showMenu}>
          <Hamburger
            duration={0.3}
            // duration={0.4}

            toggled={showMenu}
            toggle={() => dispatch(displayNavLinkHamburger(!showMenu))}
          />
        </HamburgerMenuWrapper>
      </LanguageSelectorMailtoWrapper>
    </TitleWrapper>
  )
}

export default TitleContainer
