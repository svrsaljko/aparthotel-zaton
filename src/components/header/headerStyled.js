import styled from "styled-components"
import { LOGO_LIGHT_BLUE, LOGO_DARK_BLUE } from "../../constants"

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  @media (max-width: 480px) {
    //justify-content: space-between;
    // margin-bottom: 1rem;
  }
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
    color: ${({ show }) => (show ? LOGO_LIGHT_BLUE : LOGO_DARK_BLUE)};
    color: ${LOGO_DARK_BLUE};
  }
`

export const NavBar = styled.div`
  display: block;
  @media (max-width: 480px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
  }
`

const WIDTH = 180
const HEIGHT = 60

export const TitleImageWrapper = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  @media (max-width: 480px) {
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
    //margin-top: 1.5rem;
    //margin-right: 1.5rem;
  }
`
export const StarWrapper = styled.div`
font-size:2.2rem;
//color: ${LOGO_DARK_BLUE};
color: ${LOGO_LIGHT_BLUE};
`
