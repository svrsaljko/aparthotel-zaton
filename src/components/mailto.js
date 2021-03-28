import React from "react"
import styled from "styled-components"
import { ImMail4 } from "react-icons/im"
import { LOGO_LIGHT_BLUE, LOGO_DARK_BLUE } from "../constants"

const MailtoWrapper = styled.div`
  font-size: 3rem;
  // border: 1px solid green;
  max-height: 3rem;
  color: ${LOGO_LIGHT_BLUE};
  &:hover {
    cursor: pointer;
    color: ${LOGO_DARK_BLUE};
  }
  @media (max-width: 480px) {
    //border: 3px solid green;
    margin-left: 1rem;
`

export default function Mailto() {
  //const mailto = 'mailto:no-reply@example.com'
  // email needs to be changed
  // padding povecati, radi dometa klika,
  //probati poslati mail-linux u bug-ovima, vratiti title po potrebi i stilizirati ga
  const mailto = "mailto:vrsaljkostjepan@gmail.com"

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // border: "1px solid red",
      }}
    >
      <MailtoWrapper>
        <ImMail4
          //title="Write us an e-mail"
          onClick={e => {
            window.location = mailto
            e.preventDefault()
          }}
        />
      </MailtoWrapper>
    </div>
  )
}
