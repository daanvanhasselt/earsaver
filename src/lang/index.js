import LangNL from "./nl"
import LangEN from "./en"

const GetLangData = (langId) => {
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