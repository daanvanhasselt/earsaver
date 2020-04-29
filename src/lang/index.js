import React from "react"

import LangNL from "./nl"
import LangEN from "./en"

const GetLangData = (props) => {
    const url = props.location ? props.location.search : ""
    const urlParams = new URLSearchParams(url)
    let langId = "nl"
    if(urlParams.has('lang')) {
      langId = urlParams.get('lang')
    }

    let langData = {}
    switch(langId) {
      case "nl":
        langData = LangNL
        break
      default:
        langData = LangEN
    }

    return { langId, langData}
}

export default GetLangData