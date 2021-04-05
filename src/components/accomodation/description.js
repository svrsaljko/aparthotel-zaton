import React from "react"
import { FormattedMessage } from "gatsby-plugin-react-intl"
import { DescriptionContainer } from "./styled"
import { FaChild, FaBed, FaStar } from "react-icons/fa"
import { ImMan } from "react-icons/im"
import { GrView } from "react-icons/gr"
import { GiStickFrame } from "react-icons/gi"
import { AiOutlineEye } from "react-icons/ai"
import styled from "styled-components"
import { TRIADIC_GOLD } from "../../constants"

const DescriptionRowElement = styled.div`
  display: flex;
  flex-direction: row;
`
const IconWrapper = styled.div`
  font-size: 2.2rem;
  color: ${TRIADIC_GOLD};
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`
const DescriptionWrapper = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const DescriptionRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15rem;
`

const RowText = styled.div`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
`

const description = ({ description }) => {
  return (
    <DescriptionContainer>
      <DescriptionWrapper>
        <div style={{ fontSize: "1.5rem" }}>
          Our premium family room with a sea view is bathed with sun and offers
          an unforgettable experience of enjoying the romantic sunsets.
        </div>
        <DescriptionRowWrapper>
          <DescriptionRowElement>
            <IconWrapper>
              <ImMan />
            </IconWrapper>
            <RowText>
              <FormattedMessage
                id="body.accomodation.page.adults"
                defaultMessage={"accomodation details"}
              />
            </RowText>
          </DescriptionRowElement>

          <DescriptionRowElement>
            <IconWrapper>
              <FaChild />
            </IconWrapper>
            <RowText>
              <FormattedMessage
                id="body.accomodation.page.children"
                defaultMessage={"accomodation details"}
              />
            </RowText>
          </DescriptionRowElement>

          <DescriptionRowElement>
            <IconWrapper>
              <AiOutlineEye />
            </IconWrapper>
            <RowText>
              <FormattedMessage
                id="body.accomodation.page.view"
                defaultMessage={"accomodation details"}
              />
            </RowText>
          </DescriptionRowElement>

          <DescriptionRowElement>
            <IconWrapper>
              <GiStickFrame />
            </IconWrapper>
            <RowText>
              <FormattedMessage
                id="body.accomodation.page.size"
                defaultMessage={"accomodation details"}
              />
            </RowText>
          </DescriptionRowElement>

          <DescriptionRowElement>
            <IconWrapper>
              <FaBed />
            </IconWrapper>
            <RowText>
              <FormattedMessage
                id="body.accomodation.page.bed.type"
                defaultMessage={"accomodation details"}
              />
            </RowText>
          </DescriptionRowElement>

          <DescriptionRowElement>
            <IconWrapper>
              <FaStar />
            </IconWrapper>
            <RowText>
              <FormattedMessage
                id="body.accomodation.page.amenities"
                defaultMessage={"accomodation details"}
              />
            </RowText>
          </DescriptionRowElement>
        </DescriptionRowWrapper>
      </DescriptionWrapper>
    </DescriptionContainer>
  )
}

export default description
