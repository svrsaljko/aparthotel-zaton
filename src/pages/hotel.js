import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import GoogleMaps from "../components/googleMaps"
import { graphql } from "gatsby"
import { v4 as uuidv4 } from "uuid"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { FormattedMessage, navigate } from "gatsby-plugin-react-intl"
// import { genericHashLink } from "react-router-hash-link"
import {
  LOGO_DARK_BLUE_ANALOGUS_DARKER,
  LOGO_DARK_BLUE_COMPLEMENT,
  LOGO_DARK_BLUE,
  LOGO_LIGHT_BLUE,
  TRIADIC_GOLD,
} from "../constants"
import ReviewSwiper from "../components/reviewSwiper"

// const HashLink = genericHashLink(Link)

const StyledCard = styled.div`
  position: relative;
  background: #fcf5ed;

  &:first-child {
    margin-right: 1rem;
  }
  &:nth-child(2) {
    margin-left: 1rem;
  }
  &:last-child {
    margin-top: 2rem;
    width: 120%;
    margin-left: 40%;
    margin-right: 40%;
  }
  :&hover  {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    margin: 0;
    margin-bottom: 3rem;
    &:first-child {
      margin: 0;
    }
    &:nth-child(2) {
      margin: 2rem 0 2rem 0;
    }

    &:last-child {
      width: 100%;
      margin: 0;
    }
  }
`
const BodyMainTitle = styled.div`
  // color: ${LOGO_DARK_BLUE_ANALOGUS_DARKER};
  //color: ${LOGO_DARK_BLUE_COMPLEMENT};
  color: ${LOGO_DARK_BLUE};
  margin-top:4rem;
  font-size: 2.2rem;
  font-weight: bold;
  @media (max-width: 480px) {
    margin-left: 1rem;
    //margin-bottom: 3rem;
  }
`
const BodyTitle = styled.div`
  color: ${LOGO_DARK_BLUE};
  font-size: 1.5rem;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
`

const StyledCardTitle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  width: 100%;
  text-align: center;
  top: 45%;
  z-index: 2;
  //color:#9802d4;
  font-size: 2rem;
  cursor: pointer;
`
const StyledCardLink = styled.div`
  //color: #9802d4;
  color: ${LOGO_DARK_BLUE_COMPLEMENT};
  text-decoration: underline;
  font-size 1.5rem;
  text-align:center;
  margin-top:1.5rem;
  margin-bottom: 1.5rem;

`

const StyledLink = styled.div`
margin-left: 0.5rem;
color: ${LOGO_LIGHT_BLUE};
//color: #9802d4;
text-decoration: underline;
font-size 1.5rem;
//text-align:center;
margin-top:4rem;
margin-bottom: 1.5rem;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // flex-direction: row;
  justify-content: stretch;
  margin-top: 5rem;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    //margin-right: -1.5rem;
    //margin-left: -1.5rem;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  &:hover {
    cursor: pointer;
  }

  ${StyledCard}:hover & {
    filter: brightness(50%);
  }
  @media (max-width: 480px) {
    // margin-right: -1.5rem;
    // margin-left: -1.5rem;
  }
`

const CoronaText = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`

const DetailsButton = styled.button`
  // background: ${TRIADIC_GOLD};
  background: ${LOGO_LIGHT_BLUE};
  color: white;
  padding: 1.5rem;
  border: none;
  width: 100%;
  &:hover {
    background: ${LOGO_DARK_BLUE};

    cursor: pointer;
  }
`

const TitleWrapper = styled.div`
  border: 2px solid white;
  max-width: 65%;

  ${StyledCard}:hover & {
    border: 2px solid ${LOGO_DARK_BLUE};
    background: ${LOGO_DARK_BLUE};
  }

  // &:hover {
  //   border: 2px solid ${LOGO_DARK_BLUE};
  //   background: ${LOGO_DARK_BLUE};
  // }
`

function Hotel({ data }) {
  const { cardImages } = data.accomodations
  const { reviews } = data.allMarkdownRemark.nodes[0].frontmatter
  // console.log("data:", data)
  // console.log("review:", reviews)

  return (
    <Layout>
      <ImageWrapper>
        <StaticImage
          src="../images/slider-2.jpg"
          alt="aparthotel-zaton-logo"
          quality={100}
          loading="eager"
          layout="constrained"
        />
      </ImageWrapper>

      {/* <BodyMainTitle>SMJEŠTAJ</BodyMainTitle> */}
      <CardsContainer>
        {cardImages.map(({ cardImage }) => {
          const { featuredImage } = cardImage
          const { title } = cardImage
          // const titleArray = title.split(".")
          // ubaciti u markdown nakraju
          // const hashLink = "#" + titleArray[3] + titleArray[5]
          //const { id } = featuredImage.childImageSharp
          const image = getImage(featuredImage)
          return (
            <StyledCard
              key={uuidv4()}
              onClick={() => {
                navigate("/accomodation/")
              }}
            >
              <StyledCardTitle>
                <TitleWrapper>
                  <FormattedMessage
                    id={title}
                    defaultMessage={"Accomodation"}
                  />
                </TitleWrapper>
              </StyledCardTitle>
              <ImageWrapper>
                <GatsbyImage
                  image={image}
                  // alt prominit-prijevod
                  alt="aparthotel-zaton-logo"
                  quality={100}
                  loading="lazy"
                  layout="constrained"
                  // width={200}
                  // height={200}
                />
              </ImageWrapper>
            </StyledCard>
          )
        })}
      </CardsContainer>

      <ReviewSwiper reviews={reviews} />

      <GoogleMaps />
    </Layout>
  )
}

export const query = graphql`
  query CardImages {
    accomodations: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(data/hotel/accomodation)/" } }
    ) {
      cardImages: nodes {
        cardImage: frontmatter {
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }

    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(data/hotel/reviews)/" } }
    ) {
      nodes {
        frontmatter {
          reviews {
            customer
            review
          }
        }
      }
    }
  }
`

export default Hotel
