import styled from "styled-components"

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 480px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
  }
`
