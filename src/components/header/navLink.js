import React from "react"
// import { NavLink } from 'react-router-dom'
// import { Link } from "gatsby"
import { FormattedMessage, Link } from "gatsby-plugin-react-intl"
// import { FormattedMessage } from 'react-intl'
// import { Provider, useSelector, useDispatch } from 'react-redux'
// import { setShowMenu } from '../actions/headerActions'

const activeStyle = {
  color: "#027bd4",
  fontWeight: "bold",
}
const NavLink = ({ name, to }) => {
  //const dispatch = useDispatch()
  //const showMenu = useSelector((state) => state.headerReducer.showMenu)

  return (
    <Link
      activeStyle={activeStyle}
      className="header-nav-link"
      activeClassName="header-nav-link-active"
      to={to}
      //onClick={() => (showMenu ? dispatch(setShowMenu(false)) : null)}
    >
      <FormattedMessage
        id={`header.navlink.${to.slice(1, to.length)}`}
        defaultMessage={name}
      />
    </Link>
  )
}

export default NavLink
