import React from "react"
import { graphql } from "gatsby"
import { navigate } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { v4 as uuidv4 } from "uuid"
import Layout from "../components/layout"
import styled from "styled-components"
import {
  // LOGO_DARK_BLUE_ANALOGUS_DARKER,
  // LOGO_DARK_BLUE_COMPLEMENT,
  // LOGO_DARK_BLUE,
  // LOGO_LIGHT_BLUE,
  // TRIADIC_GOLD,
  CARD_BACKGROUND_ORANGE,
} from "../constants"

const Container = styled.div`
  background: ${CARD_BACKGROUND_ORANGE};
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`
const Card = styled.div`
  margin-bottom: 5rem;
  // border: 3px solid red;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  // border: 3px solid black;
`

const Title = styled.div`
  padding-top: 22rem;
  position: absolute;
  z-index: 700;
  color: white;
  font-size: 3.5rem;
  text-align: center;
  @media (max-width: 480px) {
    padding-top: 11rem;
  }
`
const ImageWrapper = styled.div`
  z-index: 1000;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

function GalleryPage({ data }) {
  const { galleries } = data.allMarkdownRemark
  return (
    <Layout>
      <Container>
        {galleries.map(({ gallery }) => {
          const { title, slug, featuredImage, featuredImage_alt } = gallery
          const image = getImage(featuredImage)
          return (
            <Card onClick={() => navigate("/gallery/" + slug)} key={uuidv4()}>
              <TitleWrapper>
                <Title>{title}</Title>
              </TitleWrapper>
              <ImageWrapper>
                <GatsbyImage alt={featuredImage_alt} image={image} />
              </ImageWrapper>
            </Card>
          )
        })}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query GalleryQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(data/gallery)/" } }
    ) {
      galleries: nodes {
        gallery: frontmatter {
          title
          featuredImage_alt
          slug
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default GalleryPage
