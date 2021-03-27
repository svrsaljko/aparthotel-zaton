import styled from "styled-components"

export const SliderImage = styled.img`
  width: 825px;
  height: 495px;
  @media (max-width: 480px) {
    width: 350px;
    height: auto;
  }
`
export const SlideShowGallery = styled.div`
  position: relative;
  & img {
    display: none;
  }
  & img:nth-child(${props => props.activeIndex + 1}) {
    display: block;
  }
`
export const ImageButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
`
export const ImageButton = styled.div`
  width: 20px;
  height: 20px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  background-color: ${props => (props.active ? "#ededed" : "#ffffff")};
  &:hover {
    cursor: pointer;
  }
  &:not(:first-child) {
    margin-left: 16px;
  }
`
