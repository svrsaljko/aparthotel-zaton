import React, { useState, useEffect } from "react"
// import { useSelector } from 'react-redux'
import { LANGUAGES } from "../constants"
import { changeLocale } from "gatsby-plugin-react-intl"
import { useLocation } from "@reach/router"
import { RiArrowDownSLine } from "react-icons/ri"
import { LOGO_LIGHT_BLUE, LOGO_DARK_BLUE } from "../constants"
import styled from "styled-components"
import { useSelector } from "react-redux"
//const LanguageSelector = ({ initialLanguage, onLangChange }) => {

const ActiveLanguageButton = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  max-height: 2.7rem;
  color: ${LOGO_LIGHT_BLUE};
  &:hover {
    cursor: pointer;
    border-top: 1px solid ${LOGO_DARK_BLUE};
    border-bottom: 1px solid ${LOGO_DARK_BLUE};
  }
  @media (max-width: 480px) {
    margin-right: 0;
    margin-left: 1rem;
    //border: 3px solid grey;
  }
`

const LanguageButton = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  font-size: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: ${LOGO_DARK_BLUE};
  max-height: 2.7rem;

  &:hover {
    cursor: pointer;
    border-top: 1px solid ${LOGO_DARK_BLUE};
    border-bottom: 1px solid ${LOGO_DARK_BLUE};
  }
  @media (max-width: 480px) {
    margin-right: 0;
    margin-left: 1rem;

    //border: 3px solid grey;
  }
`

const AvailableLanguagesContainer = styled.div`
  min-width: 9rem;
  min-height: 3rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 480px) {
    min-width: auto;
    margin: 0;
    //border: 3px solid grey;
  }
`
const AvailableLanguagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const LanguageSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  min-width: 14rem;
  min-height: 2.7rem;
  @media (max-width: 480px) {
    justify-content: flex-end;
    //border: 3px solid blue;
    min-width: auto;
  }
`

const LanguageSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 480px) {
    width: 80%;
    //width: 80%;
    //min-width:80%;
    //border: 3px solid blue;
    margin-top: 0.5rem;
  }
`

const getLanguageFromPath = () => {
  if (typeof window !== "undefined") {
    return window.location.href.split("/")[3].toUpperCase()
  } else return "EN"
}

const LanguageSelector = () => {
  // const showMenu = useSelector((state) => state.headerReducer.showMenu)
  const [currentLanguage, setCurrentLanguage] = useState(getLanguageFromPath())

  const onChangeSelectedLanguage = language => {
    changeLocale(language.toLowerCase())
    // onLangChange(value)
    // setCurrentLanguage(language)
  }

  const [availableLanguages, setAvailableLanguages] = useState([])
  const [showAvailableLanguages, setShowAvailableLanguages] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAvailableLanguages(
        LANGUAGES.filter(language => language !== currentLanguage)
      )
    }
  }, [])

  return (
    <LanguageSelectorWrapper>
      <LanguageSelectorContainer
        onMouseLeave={() => setShowAvailableLanguages(false)}
      >
        <AvailableLanguagesWrapper>
          <AvailableLanguagesContainer>
            {availableLanguages.map(language => (
              <LanguageButton
                show={showAvailableLanguages}
                key={language}
                onClick={() => onChangeSelectedLanguage(language)}
              >
                {language}
              </LanguageButton>
            ))}
          </AvailableLanguagesContainer>
        </AvailableLanguagesWrapper>

        <ActiveLanguageButton
          onMouseOver={() => setShowAvailableLanguages(true)}
        >
          {currentLanguage}
        </ActiveLanguageButton>
      </LanguageSelectorContainer>
    </LanguageSelectorWrapper>
  )
}

export default LanguageSelector
