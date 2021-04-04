import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  LOGO_DARK_BLUE_ANALOGUS_DARKER,
  LOGO_DARK_BLUE_COMPLEMENT,
  LOGO_DARK_BLUE,
  TETRADIC_PURPLE,
  LOGO_LIGHT_BLUE,
  TRIADIC_GOLD,
} from "../constants"

const StyledCard = styled.div`
  //background: #faf9f7;
  //background #ffddbd;
  // background: #fcebdc;
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
  }
`
const BodyMainTitle = styled.div`
  // color: ${LOGO_DARK_BLUE_ANALOGUS_DARKER};
  color: ${LOGO_DARK_BLUE_COMPLEMENT};
  //color:#9802d4;
  margin-top:4rem;
  font-size: 2.2rem;
  font-weight: bold;
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
`
const ReviewBody = styled.div`
  color: ${TRIADIC_GOLD};
  font-size: 1.2rem;
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5rem;
  @media (max-width: 480px) {
    flex-direction: column;
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

function Hotel({ data }) {
  console.log("data: ", data.allFile.cardImages)

  const { cardImages } = data.allFile

  // console.log("card images: ", cardImages)

  // console.log("data: ", data)

  return (
    <Layout>
      <StaticImage
        src="../images/slider-2.jpg"
        alt="aparthotel-zaton-logo"
        quality={100}
        loading="eager"
        layout="constrained"
      />

      <BodyMainTitle>SMJEŠTAJ</BodyMainTitle>
      <CardsContainer>
        {cardImages.map(({ cardImage }) => {
          // const { src } = cardImage.childImageSharp
          // const { srcSet } = cardImage.cardImage.childImageSharp.fluid

          // console.log("source: ", src)
          // console.log("srcSet: ", srcSet)
          // const image = getImage(src)
          // console.log("image: ", image)
          console.log("card image: ", cardImage)
          const image = getImage(cardImage)
          console.log("image: ", image)
          const { id } = cardImage
          console.log("id: ", id)
          return (
            <StyledCard key={id}>
              <GatsbyImage
                image={image}
                alt="aparthotel-zaton-logo"
                quality={100}
                loading="eager"
                //layout="constraint"
              />
              <StyledCardTitle>Premium soba s balkonom</StyledCardTitle>
              <StyledCardLink> PRIKAŽI POJEDINOSTI </StyledCardLink>
            </StyledCard>
          )
        })}

        {/* <StyledCard>
          <StaticImage
            src="../images/slider-3.jpg"
            alt="aparthotel-zaton-logo"
            quality={100}
            loading="eager"
            layout="constraint"
            width={480}
            height={320}
          />
          <StyledCardTitle>Premium soba s balkonom</StyledCardTitle>
          <StyledCardLink> PRIKAŽI POJEDINOSTI </StyledCardLink>
        </StyledCard>
        <StyledCard>
          <StaticImage
            src="../images/slider-4.jpg"
            alt="aparthotel-zaton-logo"
            quality={100}
            loading="eager"
            layout="constrained"
          />

          <StyledCardTitle>Premium soba s krevetom</StyledCardTitle>
          <StyledCardLink> PRIKAŽI POJEDINOSTI </StyledCardLink>
        </StyledCard>
        <StyledCard>
          <StaticImage
            src="../images/slider-5.jpg"
            alt="aparthotel-zaton-logo"
            quality={100}
            loading="eager"
            layout="constrained"
          />

          <StyledCardTitle>Premium soba s pogledom na bazen</StyledCardTitle>
          <StyledCardLink> PRIKAŽI POJEDINOSTI </StyledCardLink>
        </StyledCard> */}
      </CardsContainer>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <BodyTitle>OSTANITE SIGURNI S NAMA</BodyTitle>
        <StyledLink> KORONAVIRUS MJERE</StyledLink>
      </div>
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
    </Layout>
  )
}

export const query = graphql`
  query CardImages {
    allFile(
      filter: { relativePath: { regex: "regex: /(hotel/accomodation)/" } }
    ) {
      cardImages: edges {
        cardImage: node {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query CardImages {
//     allFile(
//       filter: { relativePath: { regex: "regex: /(hotel/accomodation)/" } }
//     ) {
//       cardImages: edges {
//         cardImage: node {
//           id
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default Hotel
