import React from "react"
import { NavLinkWrapper } from "./headerStyled"
import NavLink from "./navLink"

const NavLinkContainer = () => {
  return (
    <NavLinkWrapper>
      <NavLink name={"Hotel"} to="/hotel" />
      <NavLink name={"Contact us"} to="/contact" />
      <NavLink name={"Accomodation"} to="/accomodation" />
      <NavLink name={"Destination"} to="/destination" />
      <NavLink name={"Gallery"} to="/gallery" />
    </NavLinkWrapper>
  )
}

export default NavLinkContainer
