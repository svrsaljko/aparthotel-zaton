import React from "react"
import Helemet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"

import { IntlProvider } from "gatsby-plugin-react-intl"
// import store from "../state/createStore"
import PropTypes from "prop-types"
import Header from "./header"
import LanguageSelector from "../components/languageSelector"
import Footer from "./footer"
import "../css/index.css"
import styled from "styled-components"

const mapStateToProps = state => {
  return { state }
}

const PageWrapper = styled.div`
  //border: 3px solid black;
  margin-right: 20rem;
  margin-left: 20rem;
  margin-top: 1rem;
  @media (max-width: 480px) {
    margin-right: 0;
    margin-left: 0;
    margin: 0;
  }
`

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

  return (
    <>
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

      <PageWrapper>
        <Header />
        {children}
      </PageWrapper>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.object,
// }

// export default Layout
export default connect(mapStateToProps, null)(Layout)
