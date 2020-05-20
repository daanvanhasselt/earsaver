import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Accordion, Card, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

import Lang from "../lang"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
    this.submitGTMEvent = this.submitGTMEvent.bind(this)

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
    e.preventDefault()
    this.setModal(true, index)
  }

  submitGTMEvent(event) {
    if(typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: event
        })
    }
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    })
  }

  render() {
    return (
      <Layout lang={this.langData}>
        <SEO title="EarSaver" lang={this.langId}/>

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

        <section id="produce">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              {this.imageRows}
            </div>
          </div>

          <section className="page-section bg-dark text-white">
            <div className="container text-center">
              <h2 className="mb-4">{this.langData.produce.title}</h2>
              <hr className="divider light my-4"/>
              <p className="text-muted mb-5">{this.langData.produce.paragraph1}</p>
              <p className="text-muted mb-5">{this.langData.produce.paragraph2}</p>

              <div style={{paddingTop:'56.25%', marginBottom: 60, position:'relative'}}>
                <iframe src="https://player.vimeo.com/video/415844850?color=1A79F9&byline=0&portrait=0" 
                  style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                  frameBorder="0" allow="autoplay; fullscreen" 
                  allowFullScreen>
                </iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>

              <p className="text-muted mb-5">{this.langData.produce.paragraph3}</p>

              <a className="btn btn-light btn-xl" onClick={this.submitGTMEvent("download-stl")} href="/EarSaver-STL.zip">{this.langData.produce.downloadButtonTitle}</a>
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

            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {this.langData.contact.form.order.title}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <form name="earsaver-order" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                      <input name="form-name" value="earsaver-order" type="hidden" />
                      <p className="d-none">
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                      </p>

                      <div className="form-group">
                        <input name="name" type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder={this.langData.contact.form.order.namePlaceholder} required/>
                        <small id="nameHelp" className="form-text text-muted">{this.langData.contact.form.order.nameDisclaimer}</small>
                      </div>

                      <div className="form-group">
                        <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder={this.langData.contact.form.order.emailPlaceholder} required/>
                        <small id="emailHelp" className="form-text text-muted">{this.langData.contact.form.order.emailDisclaimer}</small>
                      </div>

                      <div className="form-group">
                        <input name="organisation" type="text" className="form-control" id="organisation" aria-describedby="organisationHelp" placeholder={this.langData.contact.form.order.organisationPlaceholder} required/>
                        <small id="organisationHelp" className="form-text text-muted">{this.langData.contact.form.order.organisationHelp}</small>
                      </div>

                      <div className="form-group">
                        <input name="quantity" type="number" className="form-control" id="quantity" aria-describedby="quantityHelp" placeholder={1} min={1} max={500} required/>
                        <small id="quantityHelp" className="form-text text-muted">{this.langData.contact.form.order.quantityHelp}</small>
                      </div>

                      <div className="form-group">
                        <textarea name="message" className="form-control" id="message" rows="3" placeholder={this.langData.contact.form.order.messagePlaceholder}></textarea>
                      </div>

                      <button style={{width:'100%'}} type="submit" onClick={() => {
                        const form = document.forms["earsaver-contact"]
                        if(form === undefined) return
                        const input = form["email"]
                        if(input === undefined) return
                        if(input.value === "") return 
                        
                        this.submitGTMEvent("submit-order-form")
                      }} className="btn btn-primary">{this.langData.contact.form.order.submitButtonTitle}</button>
                    </form>            
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  {this.langData.contact.form.general.title}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <form name="earsaver-contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                      <input name="form-name" value="earsaver-contact" type="hidden" />
                      <p className="d-none">
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                      </p>

                      <div className="form-group">
                        <input name="name" type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder={this.langData.contact.form.general.namePlaceholder} required/>
                        <small id="nameHelp" className="form-text text-muted">{this.langData.contact.form.general.nameDisclaimer}</small>
                      </div>

                      <div className="form-group">
                        <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder={this.langData.contact.form.general.emailPlaceholder} required/>
                        <small id="emailHelp" className="form-text text-muted">{this.langData.contact.form.general.emailDisclaimer}</small>
                      </div>

                      <div className="form-group">
                        <textarea name="message" className="form-control" id="message" rows="3" placeholder={this.langData.contact.form.general.messagePlaceholder}></textarea>
                      </div>

                      <button style={{width:'100%'}} type="submit" onClick={() => {
                        const form = document.forms["earsaver-contact"]
                        if(form === undefined) return
                        const input = form["email"]
                        if(input === undefined) return
                        if(input.value === "") return 
                        
                        this.submitGTMEvent("submit-contact-form")
                      }} className="btn btn-primary">{this.langData.contact.form.general.submitButtonTitle}</button>
                    </form>            
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </section>

        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">{this.langData.about.title}</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">{this.langData.about.paragraph1}</p>

                <h2 className="text-white mt-0">{this.langData.about.donateTitle}</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">{this.langData.about.paragraph2}</p>

                <a className="btn btn-light btn-xl" onClick={this.submitGTMEvent("donate")} href="https://www.gofundme.com/f/earsaver-maakt-mondkapjes-comfortabeler">{this.langData.about.donateButtonTitle}</a>

              </div>
            </div>

            <hr className="divider light my-4"/>
            
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <p className="text-white-50 mb-4">{this.langData.about.donatedParagraph(202)}</p>
                
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1NWTP8JSZ50ZMa1k2olUn-ZL44T4QsVoS" width="640" height="480"></iframe>
                
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}

export default IndexPage

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
