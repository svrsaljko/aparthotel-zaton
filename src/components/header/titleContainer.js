import React from "react"
import { useSelector, useDispatch } from "react-redux"
import LanguageSelector from "../languageSelector"
import { displayNavLinkHamburger } from "../../actions/actions"
import {
  TitleWrapper,
  TitleImageWrapper,
  LogoImage,
  HamburgerMenuWrapper,
  StarContainer,
  StarWrapper,
  StarContainerWrapper,
} from "./headerStyled"
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <HamburgerMenuWrapper show={showMenu}>
          <Hamburger
            duration={0.3}
            // duration={0.4}

            toggled={showMenu}
            toggle={() => dispatch(displayNavLinkHamburger(!showMenu))}
          />
        </HamburgerMenuWrapper>
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
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <LanguageSelector />
        <Mailto />
      </div>
    </TitleWrapper>
  )
}

export default TitleContainer
