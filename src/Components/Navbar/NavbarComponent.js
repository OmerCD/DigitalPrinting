import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarComponent.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeComponent from "../Home/HomeComponent";
import AboutUsComponent from "../AboutUs/AboutUsComponent";
import GalleryComponent from "../Gallery/GalleryComponent";
import whatsappsquare from "../../images/whatsappsquare.png";
import whatsapp2 from "../../images/whatsapp2.png";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar
              variant="dark"
              expand="lg"
              sticky="top"
              className="navigation"
            >
              <Navbar.Brand href="#home" className="nav-head">
                Dijital Baskı ve Afiş
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Ana Sayfa</Nav.Link>
                  <Nav.Link href="/aboutus">Hakkımızda</Nav.Link>
                  <NavDropdown title="Dijitak Baskı" id="basic-nav-dropdown">
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
                  <Nav.Link href="/gallery">Galeri</Nav.Link>
                  <Nav.Link href="#contact">İletişim</Nav.Link>
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
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/aboutus" component={AboutUsComponent} />
              <Route exact path="/gallery" component={GalleryComponent} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
