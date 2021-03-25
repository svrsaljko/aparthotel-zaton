import React from "react"
import { useSelector } from "react-redux"
import { HeaderWrapper, NavBar } from "./headerStyled"
import NavLinkContainer from "./navLinkContainer"
import TitleContainer from "./titleContainer"
import "../../css/header.css"

const Header = () => {
  const showMenu = useSelector(state => state.menuReducer.showMenu)

  return (
    <HeaderWrapper>
      <TitleContainer />
      <NavBar show={showMenu}>
        <NavLinkContainer />
      </NavBar>
    </HeaderWrapper>
  )
}

export default Header
