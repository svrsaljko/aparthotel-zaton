import React from "react"
import Helemet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"

import { IntlProvider } from "gatsby-plugin-react-intl"
// import store from "../state/createStore"
import PropTypes from "prop-types"
import Header from "./header"
import LanguageSelector from "../components/languageSelector"
import "../css/index.css"

const mapStateToProps = state => {
  console.log("state: ", state)
  return { state }
}

// const mapDispatchToProps = dispatch => {
//   return { increment: () => dispatch({ type: `INCREMENT` }) }
// }

const Layout = ({ children }) => {
  // console.log("children: ", Layout)

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log("data after: ", data)

  return (
    <div>
      <Helemet
        title={data.site.siteMetadata.title}
        // da li keywordsi pomazu SEO? maknit iz query-a ako se ne dili title okolo brze je
        meta={[
          {
            name: "description",
            content: "Aparthotel zaton offical page",
          },
          {
            name: "keywords",
            content: "zaton, apartman, hotel, aparthotel, pool, bazen, nin",
          },
        ]}
      />
      <Header />
      <LanguageSelector />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

// export default Layout
export default connect(mapStateToProps, null)(Layout)
