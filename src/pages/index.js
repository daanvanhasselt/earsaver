import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

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
      <Layout>
        <SEO title="Comfort for healthworkers"/>
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
            <h2 className="text-center mt-0">How To Use</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                  <h3 className="h4 mb-2">1. Attach one side</h3>
                  <p className="text-muted mb-0">Before putting on your face mask, attach one of the elastic bands to the EarSaver.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 className="h4 mb-2">2. Hold in place</h3>
                  <p className="text-muted mb-0">With one elastic band attached, hold the EarSaver in place on the back of your head.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                  <h3 className="h4 mb-2">3. Attach other side</h3>
                  <p className="text-muted mb-0">While holding the EarSaver in place, attach the second elastic band.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 className="h4 mb-2">4. Adjust for comfort</h3>
                  <p className="text-muted mb-0">Adjust the tightness and placement of the EarSaver.</p>
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
              <h2 className="mb-4">Download the 3D model</h2>
              <p className="text-muted mb-5">Wanna help out? Download the STL file and start making EarSavers!</p>
              <p className="text-muted mb-5">A full <i>Production Kit</i> with more resources and instructions will be available soon.</p>
              <a className="btn btn-light btn-xl" href="/EarSaver-STL.zip">Download Now!</a>
            </div>
          </section>

        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Get in touch!</h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">Would you like to request a batch of EarSavers for you and your co-workers? Or do you have any feedback you'd like to share with the team?<br/><br/>
                We love to hear from you!<br/><br/>
                Please fill in the form below and we will get back to you as soon as possible.
                </p>
              </div>
            </div>

            <form name="earsaver-contact" method="POST" data-netlify="true">
              <input name="form-name" value="earsaver-contact" type="hidden" />

              <div className="form-group">
                <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Your email" required/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div className="form-group">
                <textarea name="message" className="form-control" id="message" rows="3" placeholder="Your message.."></textarea>
              </div>

              <button style={{width:'100%'}} type="submit" className="btn btn-primary">Send message</button>
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
