import React from "react"
import { HeaderWrapper } from "./headerStyled"
import NavLinkContainer from "./navLinkContainer"
import TitleContainer from "./titleContainer"
import "../../css/header.css"

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleContainer />
      <NavLinkContainer />
    </HeaderWrapper>
  )
}

export default Header
