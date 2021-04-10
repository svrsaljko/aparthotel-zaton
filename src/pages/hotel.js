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

// const HashLink = genericHashLink(Link)

const StyledCard = styled.div`
  background: #fcf5ed;
  margin-right: 5rem;
  margin-left: 5rem;
  &:not(:first-child) {
    margin-right: 0;
  }
  &:not(:last-child) {
    margin-left: 0;
  }

  @media (max-width: 480px) {
    margin: 0;
    margin-bottom: 3rem;
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
  color: ${LOGO_DARK_BLUE_COMPLEMENT};
  //color:#9802d4;
  font-size: 2rem;
  text-align: center;
  margin-top: 1.5rem;
  min-height: 5rem;
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
const ReviewsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`
const ReviewsContainerTitle = styled.div`
  color: ${TRIADIC_GOLD};
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //padding-top: 1rem;
  padding-bottom: 1.5rem;
  background: ${({ backgroundColor }) =>
    backgroundColor ? "#fff4e5" : "white"};
`
const ReviewTitle = styled.div`
  color: ${TRIADIC_GOLD};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`
const ReviewBody = styled.div`
  color: ${TRIADIC_GOLD};
  font-size: 1.2rem;
  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5rem;
  @media (max-width: 480px) {
    flex-direction: column;
    //margin-right: -1.5rem;
    //margin-left: -1.5rem;
  }
`

const ImageWrapper = styled.div`
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

const reviews = [
  {
    customer: "Medo",
    review:
      "Usluga je bila super sve je bilo top, skočia sam u bazen na glavu iako se nesmi",
  },
  {
    customer: "Brize",
    review:
      "Dosa sam popit heineken i okupa se u bazenu, usput sam malo popravlja vodoinstalacije",
  },
  {
    customer: "Cuza",
    review: "Nema grmalja u blizini ali svakako je bilo dobro prenoćiti",
  },
  {
    customer: "Dome",
    review: "Spiza je bila dobra, ali mogu ja spremit bolje ;)",
  },
]

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

function Hotel({ data }) {
  const { cardImages } = data.allMarkdownRemark

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

      <BodyMainTitle>SMJEŠTAJ</BodyMainTitle>
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
            <StyledCard key={uuidv4()}>
              <GatsbyImage
                image={image}
                // alt prominit-prijevod
                alt="aparthotel-zaton-logo"
                quality={100}
                loading="lazy"
              />
              <StyledCardTitle>
                <FormattedMessage id={title} defaultMessage={"Accomodation"} />
              </StyledCardTitle>
              <DetailsButton
                onClick={() => {
                  navigate("/accomodation/")
                }}
              >
                PRIKAZI POJEDINOSTI
              </DetailsButton>
            </StyledCard>
          )
        })}
      </CardsContainer>
      <CoronaText>
        <BodyTitle>OSTANITE SIGURNI S NAMA</BodyTitle>
        <StyledLink> KORONAVIRUS MJERE</StyledLink>
      </CoronaText>
      <StaticImage
        src="../images/slider-1.jpg"
        alt="aparthotel-zaton-logo"
        quality={100}
        loading="eager"
        layout="constrained"
      />
      <ReviewsContainer>
        <ReviewsContainerTitle>RECENZIJE GOSTIJU</ReviewsContainerTitle>

        {reviews.map((review, index) => (
          <ReviewWrapper key={index + 100} backgroundColor={index % 2 === 0}>
            <ReviewTitle> {review.customer} </ReviewTitle>
            <ReviewBody>{review.review}</ReviewBody>
          </ReviewWrapper>
        ))}
      </ReviewsContainer>
      <GoogleMaps />
    </Layout>
  )
}

export const query = graphql`
  query CardImages {
    allMarkdownRemark(
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
  }
`

export default Hotel
