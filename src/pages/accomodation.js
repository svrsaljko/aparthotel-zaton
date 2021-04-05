import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { v4 as uuidv4 } from "uuid"
import Layout from "../components/layout"
import { Accomodation } from "../components"

const Container = styled.div`
  // border: 3px solid black;
`

export default function AccomodationPage({ data }) {
  const { accomodations } = data.allMarkdownRemark

  return (
    <Layout>
      <Container>
        {accomodations.map(({ accomodation }) => {
          const { title, images, description } = accomodation
          const firstFeaturedImage = images[0].featuredImage
          const firstImage = getImage(firstFeaturedImage)
          console.log("description: ", description)
          console.log("title: ", title)
          const titleArray = title.split(".")
          // ubaciti u markdown nakraju
          const hashLink = "#" + titleArray[3] + titleArray[5]
          console.log("hashLink: ", hashLink)
          return (
            <Accomodation
              key={uuidv4()}
              title={title}
              firstImage={firstImage}
              images={images}
              description={description}
              hashLink={hashLink}
            />
          )
        })}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query AccomodationQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(data/accomodation)/" } }
    ) {
      accomodations: nodes {
        accomodation: frontmatter {
          title
          description
          images {
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            featuredImage_alt
          }
        }
      }
    }
  }
`
