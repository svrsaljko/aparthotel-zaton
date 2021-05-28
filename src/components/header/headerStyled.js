import styled from "styled-components"
import { LOGO_LIGHT_BLUE, LOGO_DARK_BLUE, TRIADIC_GOLD } from "../../constants"

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  @media (max-width: 480px) {
    //justify-content: space-between;
    // margin-bottom: 1rem;
    magin-bottom: 0;
    width: 100%;
  }
`
export const TitleContainerStyled = styled.div`
  display: flex;
  flexdirection: row;
  justifycontent: space-between;
  // border: 3px solid red;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    width: 40%;
  }
`

export const LanguageSelectorMailtoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 480px) {
    width: 60%;
`

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 480px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    display: flex;
    flex-direction: column;
  }
`

export const LogoImage = styled.img`
  width: 100px;
  height: 100px;
`

export const HamburgerMenuWrapper = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    //justify-content: center;
    // border: 3px solid black;
    //margin-right: -0.75rem;
    color: ${({ show }) => (show ? LOGO_LIGHT_BLUE : LOGO_DARK_BLUE)};
    //color: ${LOGO_DARK_BLUE};
  }
`

export const NavBar = styled.div`
  margin-bottom: 2rem;
  display: block;
  @media (max-width: 480px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    margin-bottom: 0;
  }
`

const WIDTH = 180
const HEIGHT = 60

export const TitleImageWrapper = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  @media (max-width: 480px) {
    margin-left: 0.75rem;
    margin-top: 0.5rem;
    width: ${WIDTH * 0.6}px;
    height: ${HEIGHT * 0.6}px;
  }
`
export const StarContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: center;
`

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.75rem;
  //margin-right: 3.5rem;
  @media (max-width: 480px) {
    margin-top: 1.5rem;
    //margin-right: 1.5rem;
  }
`
export const StarWrapper = styled.div`
font-size:2.2rem;
color: ${TRIADIC_GOLD};
//color: ${LOGO_LIGHT_BLUE};
@media (max-width: 480px) {
  font-size:1.1rem;

}
`
