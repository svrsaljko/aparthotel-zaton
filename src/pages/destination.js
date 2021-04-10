import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { navigate } from "gatsby-plugin-react-intl"
import Layout from "../components/layout"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import {
  // LOGO_DARK_BLUE_ANALOGUS_DARKER,
  LOGO_DARK_BLUE_COMPLEMENT,
  // LOGO_DARK_BLUE,
  // LOGO_LIGHT_BLUE,
  TRIADIC_GOLD,
  CARD_BACKGROUND_ORANGE,
} from "../constants"

const Container = styled.div`
  background: ${CARD_BACKGROUND_ORANGE};
  display: flex;
  flex-direction: column;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  width: 100%;
  // border: 3px solid black;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 10rem;
  }
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  // border: 3px solid red;
  justify-content: space-around;
  width: 50%;
  @media (max-width: 480px) {
    justify-content: space-between;
    width: 100%;
  }
`

const DescriptionTitle = styled.div`
  margin-left: ${({ reverse }) => (reverse ? "5rem" : "0")};
  color: ${LOGO_DARK_BLUE_COMPLEMENT};
  font-size: 2rem;
  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`

const BriefDescription = styled.div`
  margin-left: ${({ reverse }) => (reverse ? "5rem" : "0")};

  color: black;
  font-size: 1.5rem;
  @media (max-width: 480px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-left: 1rem;
  }
`

const ButtonWrapper = styled.div`
  margin-left: ${({ reverse }) => (reverse ? "5rem" : "0")};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 480px) {
    margin-left: 0;
  }
`

const ReadMoreButton = styled.button`
  background: ${TRIADIC_GOLD};
  color: white;
  padding: 1.5rem;
  border: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    width: 100%;
    // margin-right: 1rem;
    // margin-left: 1rem;
  }
`
const ImageContainer = styled.div`
  // border: 3px solid yellow;
  width: 50%;
  @media (max-width: 480px) {
    width: 100%;
  }
`

export default function DestinationPage({ data }) {
  const { cards } = data.allMarkdownRemark
  return (
    <Layout>
      <Container>
        {cards.map(({ card }, index) => {
          const {
            briefDescription,
            featuredImage,
            featuredImage_alt,
            slug,
            title,
          } = card
          const image = getImage(featuredImage)
          const reverse = index % 2 === 1
          const regionBlogPath = "/destination/" + slug
          return (
            <CardContainer reverse={reverse} key={uuidv4()}>
              <Description>
                <DescriptionTitle reverse={reverse}>{title}</DescriptionTitle>
                <BriefDescription reverse={reverse}>
                  {briefDescription}
                </BriefDescription>
                <ButtonWrapper reverse={reverse}>
                  <ReadMoreButton
                    onClick={() => {
                      navigate(regionBlogPath)
                    }}
                  >
                    READ MORE
                  </ReadMoreButton>
                </ButtonWrapper>
              </Description>
              <ImageContainer>
                <GatsbyImage image={image} alt={featuredImage_alt} />
              </ImageContainer>
            </CardContainer>
          )
        })}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query RegionPageData {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(data/region)/" } }
    ) {
      cards: nodes {
        card: frontmatter {
          title
          slug
          featuredImage_alt
          briefDescription
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
