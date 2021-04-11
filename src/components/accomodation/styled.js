import {
  // LOGO_DARK_BLUE_ANALOGUS_DARKER,
  LOGO_DARK_BLUE_COMPLEMENT,
  // LOGO_DARK_BLUE,
  // LOGO_LIGHT_BLUE,
  // TRIADIC_GOLD,
} from "../../constants"
import styled from "styled-components"

const Card = styled.div`
  // margin-top: 5rem;
  //height: 100%;
  // border: 2px solid red;
  // margin-bottom: 40%;
  // &:not:first-child {
    // border: 3px solid green;
    // margin-top: 3rem;

    margin-bottom: 5rem;
  }
`

const Title = styled.div`
  color: ${LOGO_DARK_BLUE_COMPLEMENT};
  //color:#9802d4;
  font-size: 2rem;
  // font-weight: bold;
  //text-align: center;
  //margin-top: 1.5rem;
  //min-height: 5rem;
  @media (max-width: 480px) {
    //margin-right: -1.5rem;
    margin-left: 1rem;
  }
`
const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    // display: flex;
    flex-direction: column-reverse;
  }
`

const MainImageAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #fcf5ed;
  // justify-content: flex-end;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`

const MainImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  // border: 3px solid red;
  @media (max-width: 480px) {
    // display: none;
  }
`
const DescriptionContainer = styled.div`
  width: 40%;
  // border: 3px solid red;
  // left: 50%;
  // height: 80%;
  // position: absolute;
  @media (max-width: 480px) {
    border: none;
    position: relative;
    margin-left: 0;
    left: 0;
    width: 100%;
    // display: none;
    // border: 3px solid red;
  }
`

const MenuImage = styled.div`
  // border: 1px solid black;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
export {
  Card,
  Title,
  ImagesContainer,
  MainImageAndDescriptionContainer,
  MainImageContainer,
  DescriptionContainer,
  MenuImage,
}
