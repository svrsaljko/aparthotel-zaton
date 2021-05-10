import React from "react"
import styled from "styled-components"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
// import NavLink from "../components/header/navLink"
import { FormattedMessage, Link } from "gatsby-plugin-react-intl"
import {
  LOGO_DARK_BLUE_ANALOGUS_DARKER,
  LOGO_DARK_BLUE_COMPLEMENT,
  LOGO_DARK_BLUE,
  LOGO_LIGHT_BLUE,
  TRIADIC_GOLD,
} from "../constants"
import "../css/footer.css"
import { FaInstagram } from "react-icons/fa"
import { AiFillFacebook } from "react-icons/ai"

const Container = styled.div`
  //border: 3px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`
const SafeTravelAndMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 480px) {
    margin-right: 1rem;
  }
`
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`
const ImageWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

const activeStyle = {
  color: "#027bd4",
  fontWeight: "bold",
}

const FooterLink = ({ name, to }) => (
  <Link
    activeStyle={activeStyle}
    className="footer-nav-link"
    // problem sa linkovima
    // activeClassName="header-nav-link-active"
    to={to}
  >
    <FormattedMessage
      id={`header.navlink.${to.slice(1, to.length)}`}
      defaultMessage={name}
    />
  </Link>
)

const SocialMediaAndContact = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  //border: 2px solid green;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 480px) {
    // div {
    // border: 3px solid red;
    margin-left: 1rem;
    // }
  }
`
const GoldText = styled.div`
  color: ${TRIADIC_GOLD};
`

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  // border: 2px solid red;
`
const SocialMediaChild = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.8rem;

  div {
    margin-left: 0.5rem;
  }

  // @media (max-width: 480px) {
  //   margin-left: 1rem;
  // }
`
const Instagram = styled(SocialMediaChild)`
  color: #e1306c;
`

const Facebook = styled(SocialMediaChild)`
  color: #3b5998;
`

const SocialMediaLink = styled.a`
  text-decoration: none;
`

// najbolji nacin za imenovati alt za bolji SEO

const FooterImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const AllRights = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-top: 1px solid ${TRIADIC_GOLD};

  @media (max-width: 480px) {
    div {
      margin-left: 1rem;
    }
  }
`
//dodati linkoveeeee, dodati i fragment link na odredeni dio stranice, i ikonu na gugl mape
const FooterImages = () => (
  <FooterImagesWrapper>
    <a href="https://croatia.hr/en-GB" target="_blank">
      <ImageWrapper>
        <StaticImage
          src="../images/footer/hrvatska-puna-zivota.png"
          alt="croatia-full-of-life"
          quality={100}
          loading="eager"
          layout="constrained"
        />
      </ImageWrapper>
    </a>
    <a href="https://www.zadar.hr/" target="_blank">
      <ImageWrapper>
        <StaticImage
          src="../images/footer/zadar-region.png"
          alt="zadar"
          quality={100}
          loading="eager"
          layout="constrained"
        />
      </ImageWrapper>
    </a>
    <a href="https://zadar.travel/" target="_blank">
      <ImageWrapper>
        <StaticImage
          src="../images/footer/zadar-tourist-board.png"
          alt="zadar-tourits-board"
          quality={100}
          loading="eager"
          layout="constrained"
        />
      </ImageWrapper>
    </a>
    <a href="https://www.zadar-airport.hr/" target="_blank">
      <ImageWrapper>
        <StaticImage
          src="../images/footer/zadar-airport.png"
          alt="zadar-airport"
          quality={100}
          loading="eager"
          layout="constrained"
        />
      </ImageWrapper>
    </a>
    <a href="https://www.lulic.hr/taxi/en/" target="_blank">
      <ImageWrapper>
        <StaticImage
          src="../images/footer/lulic-taxi.png"
          alt="taxi-lulic"
          quality={100}
          loading="eager"
          layout="constrained"
        />
      </ImageWrapper>
    </a>
  </FooterImagesWrapper>
)

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
// adresa itd itd ide iz site metadata!! + prijevod

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <SafeTravelAndMenu>
          <a href="https://croatia.hr/en-GB" target="_blank">
            <ImageWrapper>
              <StaticImage
                src="../images/footer/safe-stay.png"
                alt="safe-travel-img1"
                quality={100}
                loading="eager"
                layout="constrained"
              />
            </ImageWrapper>
          </a>
          <Menu>
            <FooterLink name={"Hotel"} to="/hotel" />
            <FooterLink name={"Accomodation"} to="/accomodation" />
            <FooterLink name={"Destination"} to="/destination" />
            <FooterLink name={"Gallery"} to="/gallery" />
            <FooterLink name={"Contact us"} to="/contact" />
          </Menu>
        </SafeTravelAndMenu>
        <SocialMediaAndContact>
          <div>Dražnikova ul. 17, 23232, Zaton </div>
          <div>
            Hrvatska Phone:<GoldText>023 265 900</GoldText>
          </div>
          <div>
            E-mail: <GoldText>reservations@aparthotel-zaton.hr</GoldText>
          </div>
          <SocialMedia>
            <SocialMediaLink
              href="https://www.instagram.com/ahzaton/"
              target="_blank"
            >
              <Instagram>
                <FaInstagram />
                <div>Instagram</div>
              </Instagram>
            </SocialMediaLink>
            <SocialMediaLink
              href="https://www.facebook.com/pages/category/Hotel/Aparthotel-Zaton-358649838337449/"
              target="_blank"
            >
              <Facebook>
                <AiFillFacebook />
                <div>Facebook</div>
              </Facebook>
            </SocialMediaLink>
          </SocialMedia>
        </SocialMediaAndContact>
      </Container>
      <FooterImages />
      <AllRights>
        <div>Aparthotel Zaton © 2021 All Rights Reserved</div>
      </AllRights>
    </FooterWrapper>
  )
}

export default Footer
