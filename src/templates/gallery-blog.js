import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageSwiper from "../components/imageSwiper"

import styled from "styled-components"
import {
  // LOGO_DARK_BLUE,
  // LOGO_DARK_BLUE_ANALOGUS_DARKER,
  LOGO_DARK_BLUE_COMPLEMENT,
  // LOGO_DARK_BLUE,
  // LOGO_LIGHT_BLUE,
  TRIADIC_GOLD,
  CARD_BACKGROUND_ORANGE,
} from "../constants"
import { navigate } from "gatsby-plugin-react-intl"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${CARD_BACKGROUND_ORANGE};
`

const Title = styled.div`
  color: ${LOGO_DARK_BLUE_COMPLEMENT};
  font-size: 2rem;
  margin-bottom: 3rem;
  @media (max-width: 480px) {
    // margin-right: 1rem;
    margin-left: 1rem;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`

const Button = styled.div`
  //display: flex;
  margin-bottom: 1rem;
  flex-direction: row;
  background: ${TRIADIC_GOLD};
  color: white;
  padding: 1.5rem;
  border: none;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    // margin-right: 1rem;
    // margin-left: 1rem;
  }
`

function GalleryBlog({ data }) {
  const { title, links, images } = data.markdownRemark.gallery
  return (
    <Layout>
      <Container>
        <Title>{title}</Title>
        <ImageSwiper images={images} />
        <ButtonsContainer>
          {links.map(link => (
            <Button
              onClick={() => {
                navigate("/gallery/" + link)
              }}
            >
              {link.toUpperCase()}
            </Button>
          ))}
        </ButtonsContainer>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query GalleryBlog($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      gallery: frontmatter {
        title
        links
        images {
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

export default GalleryBlog
