import { DISPLAY_NAV_LINK_HAMBURGER } from "../actions/types"

const initState = {
  showMenu: false,
}
const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case DISPLAY_NAV_LINK_HAMBURGER:
      const { payload } = action
      return { ...state, showMenu: payload }
    default:
      return state
  }
}

export default menuReducer
