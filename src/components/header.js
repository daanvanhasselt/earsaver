import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>{this.props.lang.header.navTitle}</a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={[/*"about", */"instructions", "portfolio", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  {/* <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#about" onClick={Scroller.handleAnchorScroll}>About</Nav.Link>
                  </li> */}
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#instructions" onClick={Scroller.handleAnchorScroll}>{this.props.lang.header.navInstructions}</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#portfolio" onClick={Scroller.handleAnchorScroll}>{this.props.lang.header.navProduce}</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>{this.props.lang.header.navContact}</Nav.Link>
                  </li>
                  <li className="nav-item d-none d-lg-block">
                    <Nav.Link>|</Nav.Link>
                  </li>
                  <li className="nav-item d-lg-none">
                    <Nav.Link>_</Nav.Link>
                  </li>
                  <li className="nav-item">
                    {this.props.lang.id == 'en' && <Nav.Link href="/">Nederlands</Nav.Link> }
                    {this.props.lang.id == 'nl' && <Nav.Link href="?lang=en">English</Nav.Link> }
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">{this.props.error ? this.props.lang.error.title : this.props.lang.header.heroTitle}</h1>
                <hr className="divider my-4"/>
              </div>
              <div className="col-lg-8 align-self-baseline">
                {this.props.error || <p className="text-white-75 font-weight-light mb-5">{this.props.lang.header.heroSubtitle1}</p>}
                {this.props.error || <p className="text-white-75 font-weight-light mb-5">{this.props.lang.header.heroSubtitle2}<br/>{this.props.lang.header.heroSubtitle3}</p>}
                {this.props.error || <a className="btn btn-primary btn-xl js-scroll-trigger" href="#contact" onClick={Scroller.handleAnchorScroll}>{this.props.lang.header.requestButtonTitle}</a>}
                {this.props.error && <a className="btn btn-primary btn-xl" href="/">{this.props.lang.error.buttonTitle}</a>}
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
