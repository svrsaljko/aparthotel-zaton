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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // border: "3px solid green",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "flex-end",
          marginLeft: "2rem",
          minWidth: "14rem",
          minHeight: "2.7rem",
          // border: "1px solid red",
        }}
        onMouseLeave={() => setShowAvailableLanguages(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              // border: "3px solid black",
              minWidth: "9rem",
              minHeight: "3rem",
              display: "flex",
              // display: showAvailableLanguages ? "flex" : "none",
              flexDirection: "row",
            }}
          >
            {availableLanguages.map(language => (
              <LanguageButton
                show={showAvailableLanguages}
                key={language}
                onClick={() => onChangeSelectedLanguage(language)}
              >
                {language}
              </LanguageButton>
            ))}
          </div>
        </div>

        {/* <div>
        <div style={{ color: "red" }}> {currentLanguage} </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
        {availableLanguages.map(language => (
          <div> {language} </div>
          ))}
          </div>
        </div> */}

        {/* <select
        value={currentLanguage}
        onChange={e => onChangeSelectedLanguage(e)}
        >
        {LANGUAGES.map(language => (
          <option key={language} value={language}>
          {language}
          </option>
          ))}
        </select> */}
        <ActiveLanguageButton
          onMouseOver={() => setShowAvailableLanguages(true)}
        >
          {" "}
          {currentLanguage}
          {/* <RiArrowDownSLine />{" "} */}
        </ActiveLanguageButton>
      </div>
    </div>
  )
}

export default LanguageSelector
