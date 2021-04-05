import React from "react"
import { useSelector } from "react-redux"

import { NavLinkWrapper } from "./headerStyled"
import NavLink from "./navLink"

const NavLinkContainer = () => {
  const showMenu = useSelector(state => state.menuReducer.showMenu)

  return (
    <NavLinkWrapper show={showMenu}>
      <NavLink name={"Hotel"} to="/hotel" />
      <NavLink name={"Accomodation"} to="/accomodation" />
      <NavLink name={"Destination"} to="/destination" />
      <NavLink name={"Gallery"} to="/gallery" />
      <NavLink name={"Contact us"} to="/contact" />
    </NavLinkWrapper>
  )
}

export default NavLinkContainer
