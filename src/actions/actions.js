import { DISPLAY_NAV_LINK_HAMBURGER } from "./types"

export const displayNavLinkHamburger = showMenu => {
  return { type: DISPLAY_NAV_LINK_HAMBURGER, payload: showMenu }
}
