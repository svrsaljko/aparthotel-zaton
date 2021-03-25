import React, { useCallback } from "react"

// import { NavLink } from 'react-router-dom'
// import { Link } from "gatsby"
import { FormattedMessage, Link } from "gatsby-plugin-react-intl"

// import { FormattedMessage } from 'react-intl'
import { useSelector, useDispatch } from "react-redux"
import { displayNavLinkHamburger } from "../../actions/actions"

// import { setShowMenu } from '../actions/headerActions'

const activeStyle = {
  color: "#027bd4",
  fontWeight: "bold",
}

const PAGE_CHANGE_TIME = 300

const NavLink = ({ name, to }) => {
  const dispatch = useDispatch()
  const showMenu = useSelector(state => state.menuReducer.showMenu)

  const onPageChange = useCallback(() => {
    setTimeout(() => {
      dispatch(displayNavLinkHamburger(false))
    }, PAGE_CHANGE_TIME)
  })

  return (
    <Link
      activeStyle={activeStyle}
      className="header-nav-link"
      activeClassName="header-nav-link-active"
      to={to}
      onClick={() => (showMenu ? onPageChange() : null)}
    >
      {console.log("prijevod: ", `header.navlink.${to.slice(1, to.length)}`)}
      <FormattedMessage
        id={`header.navlink.${to.slice(1, to.length)}`}
        defaultMessage={name}
      />
    </Link>
  )
}

export default NavLink
