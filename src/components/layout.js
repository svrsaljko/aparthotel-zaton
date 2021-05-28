import React from "react"
import Helemet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import Footer from "./footer"
import Header from "./header"
import "../css/index.css"
import styled, { ThemeProvider } from "styled-components"

// ZABRANIT DA SE SLIKE SKIDAJU NA DRZANJE PRSTOM

const mapStateToProps = state => {
  return { state }
}

const PageWrapper = styled.div`
  //border: 3px solid black;
  margin-right: 27rem;
  margin-left: 27rem;
  margin-top: 1rem;
  @media (max-width: 480px) {
    // margin-right: 0.1rem;
    // margin-left: 0.1rem;
    margin: 0;
  }
`

const theme = {
  textMainColor: "#444444",
  cardShadowColor: "#ececec",
}

// const mapDispatchToProps = dispatch => {
//   return { increment: () => dispatch({ type: `INCREMENT` }) }
// }

const Layout = ({ children }) => {
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
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Header />
          {children}
          <Footer />
        </PageWrapper>
      </ThemeProvider>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.object,
// }

// export default Layout
export default connect(mapStateToProps, null)(Layout)
