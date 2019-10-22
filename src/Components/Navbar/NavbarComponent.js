import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarComponent.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
  NavLink
} from "react-router-dom";
import HomeComponent from "../Home/HomeComponent";
import AboutUsComponent from "../AboutUs/AboutUsComponent";
import GalleryComponent from "../Gallery/GalleryComponent";
import whatsapp2 from "../../images/whatsapp2.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import styled, { css, keyframes } from "styled-components";
import navAnimation from "react-animations/lib/fade-in";
import StyledNavBarComponent from "./StyledNavBarComponent"

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: window.location.pathname,
      navTransparency: false
    };
  }
  componentDidMount() {
    this.props.history.listen(() => {
      this.setState({ currentPage: window.location.pathname });
    });
  }
  handleLinkClick = (e, data) => {
    if (data != null) {
      this.pageChange(data);

      this.setState({ currentPage: data });
    }
  };
  render() {
    const anim = keyframes`${navAnimation}`;

    return (
      <div>
        <Router>
          <div>
            <StyledNavBarComponent
              page={this.state.currentPage}
              setOnPageChange={change => (this.pageChange = change)}
            >
              <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="#home" className="nav-head">
                  <Container>
                    <Row>
                      <Col md={3}>
                        <Image src="https://picsum.photos/64/32" />
                      </Col>
                      <Col md={3}>
                        <p>Dijital Baskı ve Afiş</p>
                      </Col>
                    </Row>
                  </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link
                      to="/home"
                      as={NavLink}
                      // className="link"
                      onClick={e => this.handleLinkClick(e, "/home")}
                    >
                      Ana Sayfa
                    </Nav.Link>
                    <Nav.Link
                      to="/aboutus"
                      as={NavLink}
                      // className="link link-active"
                      onClick={e => this.handleLinkClick(e, "/aboutus")}
                    >
                      Hakkımızda
                    </Nav.Link>
                    <NavDropdown
                      title="Dijitak Baskı"
                      id="basic-nav-dropdown"
                      className="link"
                    >
                      <NavDropdown.Item
                        className="navdropdown-item"
                        href="#action/3.1"
                      >
                        Vinyl Baskı
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="navdropdown-item"
                        href="#action/3.1"
                      >
                        Folyo Baskı
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="navdropdown-item"
                        href="#action/3.1"
                      >
                        Afiş Baskı
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="navdropdown-item"
                        href="#action/3.1"
                      >
                        Poster Baskı
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="navdropdown-item"
                        href="#action/3.1"
                      >
                        Billboard Baskı
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="navdropdown-item"
                        href="#action/3.1"
                      >
                        One Way Vision Baskı
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="navdropdown-item"
                        href="#action/3.1"
                      >
                        Mesh Baskı
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="navdropdown-item"
                        href="#action/3.1"
                      >
                        Folyo Kesim
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="navdropdown-item"
                        href="#action/3.1"
                      >
                        Kanvas Baskı (Tablo)
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="navdropdown-item"
                        href="#action/3.1"
                      >
                        Cam Kumlama
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link
                      to="/gallery"
                      as={NavLink}
                      // className="link"
                      onClick={e => this.handleLinkClick(e, "/gallery")}
                    >
                      Galeri
                    </Nav.Link>
                    <Nav.Link
                      to="/contact"
                      as={NavLink}
                      // className="link"
                      onClick={e => this.handleLinkClick(e, "/contact")}
                    >
                      İletişim
                    </Nav.Link>
                  </Nav>
                  <div>
                    <a href="https://api.whatsapp.com/send?phone=905322261654&text=&source=&data=">
                      <img
                        className="whatsapp-nav-text"
                        src={whatsapp2}
                        alt="whatsapp"
                      ></img>
                    </a>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </StyledNavBarComponent>
            <Switch>
              <Route exact path="/home" component={HomeComponent} />
              <Route path="/aboutus" component={AboutUsComponent} />
              <Route path="/gallery" component={GalleryComponent} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default withRouter(NavbarComponent);
