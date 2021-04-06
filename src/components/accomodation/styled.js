import {
  // LOGO_DARK_BLUE_ANALOGUS_DARKER,
  LOGO_DARK_BLUE_COMPLEMENT,
  // LOGO_DARK_BLUE,
  // LOGO_LIGHT_BLUE,
  // TRIADIC_GOLD,
} from "../../constants"
import styled from "styled-components"

const Card = styled.div`
  margin-top: 5rem;
  height: 100%;
  // border: 2px solid red;
`

const Title = styled.div`
  color: ${LOGO_DARK_BLUE_COMPLEMENT};
  //color:#9802d4;
  font-size: 2rem;
  //text-align: center;
  //margin-top: 1.5rem;
  //min-height: 5rem;
  height: 10%;
  @media (max-width: 480px) {
    //margin-right: -1.5rem;
    //margin-left: -1.5rem;
  }
`
const ImagesContainer = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  background: #fcf5ed;
`

const MainImageAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`

const MainImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;
  width: 70%;
  // border: 3px solid red;
`
const DescriptionContainer = styled.div`
  width: 30%;

  // border: 3px solid yellow;
`

const ImagesMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
  @media (max-width: 480px) {
    display: none;
  }
`
const MenuImage = styled.div`
  // border: 1px solid black;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`
export {
  Card,
  Title,
  ImagesContainer,
  MainImageAndDescriptionContainer,
  MainImageContainer,
  DescriptionContainer,
  ImagesMenuContainer,
  MenuImage,
}
