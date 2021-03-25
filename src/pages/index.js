import React, { useEffect } from "react"
import { navigate } from "gatsby-plugin-react-intl"

export default function Index() {
  useEffect(() => {
    navigate("/hotel")
  }, [])

  return <></>
}
