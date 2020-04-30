import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

import Lang from "../lang"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);

    const { langId, langData } = Lang(this.props.pageContext.lang || 'nl')
    this.langId = langId
    this.langData = langData

    const imageRow = (index) => (<div key={index} className="col-lg-4 col-sm-6">
      <a className="portfolio-box" href={"img/portfolio/fullsize/" + toString(index + 1) + ".jpg"} onClick={this.handlePortfolioClick.bind(this, index)}>
        <Img fluid={this.props.data.thumbnails.edges[index].node.childImageSharp.fluid}/>
      </a>
    </div>)

    const numImages = 6
    const offset = Math.max(0, Math.floor(Math.random() *this.props.data.thumbnails.edges.length - numImages))
    this.imageRows = [...Array(numImages).keys()].map((i) => imageRow(i + offset))
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout lang={this.langData}>
        <SEO title="EarSaver" lang={this.langId}/>
        {/* <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">We've got what you need!</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">Start Bootstrap has everything you need to get your new website up
                  and
                  running in no time! Choose one of our open source, free to download, and easy to use themes! No
                  strings
                  attached!</p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services"
                   onClick={Scroller.handleAnchorScroll}>Get Started!</a>
              </div>
            </div>
          </div>
        </section> */}

        <section className="page-section" id="instructions">
          <div className="container">
            <h2 className="text-center mt-0">{this.langData.instructions.title}</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-6 col-md-12 text-center">
                <div className="mt-5">
                  <img className="instruction" src="/img/instructions/1.png"/>
                  <h3 className="h4 mb-2">{this.langData.instructions.steps[0].title}</h3>
                  <p className="text-muted mb-0">{this.langData.instructions.steps[0].description}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 text-center">
                <div className="mt-5">
                  <img className="instruction" src="/img/instructions/2.png"/>
                  <h3 className="h4 mb-2">{this.langData.instructions.steps[1].title}</h3>
                  <p className="text-muted mb-0">{this.langData.instructions.steps[1].description}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 text-center">
                <div className="mt-5">
                <img className="instruction" src="/img/instructions/3.png"/>
                  <h3 className="h4 mb-2">{this.langData.instructions.steps[2].title}</h3>
                  <p className="text-muted mb-0">{this.langData.instructions.steps[2].description}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 text-center">
                <div className="mt-5">
                <img className="instruction" src="/img/instructions/4.png"/>
                  <h3 className="h4 mb-2">{this.langData.instructions.steps[3].title}</h3>
                  <p className="text-muted mb-0">{this.langData.instructions.steps[3].description}</p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 text-center">
                <div className="mt-5">
                <img className="instruction" src="/img/instructions/5.png"/>
                  <h3 className="h4 mb-2">{this.langData.instructions.steps[4].title}</h3>
                  <p className="text-muted mb-0">{this.langData.instructions.steps[4].description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              {this.imageRows}
            </div>
          </div>

          <section className="page-section bg-dark text-white">
            <div className="container text-center">
              {/* <h2 className="mb-4">Download the Production Kit</h2>
              <p className="text-muted mb-5">Wanna help out? Download the Production Kit and start making EarSavers!</p> */}
              <h2 className="mb-4">{this.langData.produce.title}</h2>
              <p className="text-muted mb-5">{this.langData.produce.paragraph1}</p>
              <p className="text-muted mb-5">{this.langData.produce.paragraph2}</p>
              <a className="btn btn-light btn-xl" href="/EarSaver-STL.zip">{this.langData.produce.downloadButtonTitle}</a>
            </div>
          </section>

        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">{this.langData.contact.title}</h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">{this.langData.contact.paragraph}</p>
              </div>
            </div>

            <form name="earsaver-contact" method="POST" data-netlify="true">
              <input name="form-name" value="earsaver-contact" type="hidden" />

              <div className="form-group">
                <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder={this.langData.contact.form.emailPlaceholder} required/>
                <small id="emailHelp" className="form-text text-muted">{this.langData.contact.form.emailDisclaimer}</small>
              </div>

              <div className="form-group">
                <textarea name="message" className="form-control" id="message" rows="3" placeholder={this.langData.contact.form.messagePlaceholder}></textarea>
              </div>

              <button style={{width:'100%'}} type="submit" className="btn btn-primary">{this.langData.contact.form.submitButtonTitle}</button>
            </form>
            
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    },
    thumbnails: allFile(filter: {relativePath: {glob: "portfolio/thumbnails/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
