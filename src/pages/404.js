import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Lang from "../lang"

const NotFoundPage = (props) => {
  const { langId, langData } = Lang(props.pageContext.lang || 'nl')

  return (
    <Layout lang={langData} error={true}>
      <SEO title="404: Not found" lang={langId}/>
    </Layout>)
  }

export default NotFoundPage
