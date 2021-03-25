import styled from "styled-components"
import { LOGO_LIGHT_BLUE, LOGO_DARK_BLUE } from "../../constants"

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 480px) {
    justify-content: space-between;
  }
`

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
    justify-content: center;
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
