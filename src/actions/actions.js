import { DISPLAY_NAV_LINK_HAMBURGER } from "./types"

export const displayNavLinkHamburger = showMenu => {
  console.log("calling: showMenu: ", showMenu)
  return { type: DISPLAY_NAV_LINK_HAMBURGER, payload: showMenu }
}
