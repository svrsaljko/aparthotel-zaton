import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
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
import { FormattedMessage, navigate } from "gatsby-plugin-react-intl"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${CARD_BACKGROUND_ORANGE};
`
const Title = styled.div`
  font-size: 3rem;
  //text-align: center;
  color: ${LOGO_DARK_BLUE_COMPLEMENT};
  margin-bottom: 3rem;
  @media (max-width: 480px) {
    margin-left: 1rem;
    text-align: left;
  }
`

const Description = styled.div`
  margin-top: 3rem;
  font-size: 1.5rem;
  @media (max-width: 480px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`
const ButtonsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: ${({ showOnRight }) =>
    showOnRight ? "flex-end" : "flex-start"};
  margin-top: 3px solid red;
  width: 100%;
`

const Button = styled.div`
  //display: flex;
  display: ${({ show }) => (show ? "flex" : "none")};

  flex-direction: row;
  width: 50%;
  background: ${TRIADIC_GOLD};
  color: white;
  padding: 1.5rem;
  border: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    // margin-right: 1rem;
    // margin-left: 1rem;
  }
`
const ButtonLeft = styled(Button)`
  text-align: left;
`
const ButtonRight = styled(Button)`
  text-align: right;

  justify-content: flex-end;
`
const ButtonText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`
const IconWrapper = styled.div`
  margin-top: 0.5rem;
`

function RegionDetails({ data }) {
  const {
    title,
    description,
    featuredImage_alt,
    featuredImage,
    prevSlug,
    prevTitle,
    nextSlug,
    nextTitle,
  } = data.markdownRemark.region

  const image = getImage(featuredImage)

  return (
    <Layout>
      <Title>{title}</Title>
      <Container>
        <GatsbyImage image={image} alt={featuredImage_alt} />
        <Description>
          <FormattedMessage
            id={description}
            defaultMessage="region description"
          />
        </Description>
        <ButtonsContainer showOnRight={prevSlug === null}>
          <ButtonLeft
            show={prevSlug}
            onClick={() => navigate("/destination/" + prevSlug)}
          >
            <IconWrapper>
              <FaArrowLeft />
            </IconWrapper>
            <ButtonText>{prevTitle}</ButtonText>
          </ButtonLeft>
          <ButtonRight
            show={nextSlug}
            onClick={() => navigate("/destination/" + nextSlug)}
          >
            <ButtonText>{nextTitle}</ButtonText>
            <IconWrapper>
              <FaArrowRight />
            </IconWrapper>
          </ButtonRight>
        </ButtonsContainer>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query RegionDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      region: frontmatter {
        title
        prevSlug
        prevTitle
        nextSlug
        nextTitle
        description
        featuredImage_alt
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default RegionDetails
