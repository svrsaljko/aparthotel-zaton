import React, { useState, useEffect } from "react"
// import { useSelector } from 'react-redux'
import { LANGUAGES } from "../constants"
import { changeLocale } from "gatsby-plugin-react-intl"
import { useLocation } from "@reach/router"

//const LanguageSelector = ({ initialLanguage, onLangChange }) => {

const getLanguageFromPath = () => {
  if (typeof window !== "undefined") {
    return window.location.href.split("/")[3].toUpperCase()
  } else return "EN"
}

const LanguageSelector = () => {
  //   console.log("props", props)
  // const showMenu = useSelector((state) => state.headerReducer.showMenu)
  const [currentLanguage, setCurrentLanguage] = useState(getLanguageFromPath())
  //   console.log("current Language in selector: ", currentLanguage)

  const onChangeSelectedLanguage = language => {
    changeLocale(language.toLowerCase())
    // onLangChange(value)
    // setCurrentLanguage(language)
    // console.log("change language to: ", language)
  }
  //   console.log("currentLanguage: ", currentLanguage)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginLeft: "2rem",
        //border: '1px solid red',
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {LANGUAGES.map(language => (
          <button
            key={language}
            style={{
              border: currentLanguage === language ? "2px solid black" : "none",
            }}
            onClick={() => onChangeSelectedLanguage(language)}
          >
            {language}
          </button>
        ))}
      </div>

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
    </div>
  )
}

export default LanguageSelector
