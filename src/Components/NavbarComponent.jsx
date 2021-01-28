import React, { Component, Fragment, useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Dropdown, Row, Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {
  faUserCircle,
  faShoppingCart,
  faHeart,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";


const NavbarComponent = () => {

  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false);
  const [suggestion, setSuggestion] = useState(undefined)


  const handleChange = async(event) => {
    try {
      
      setSearch(event.target.value)
      setOpen(true)
      const result = await axios.get(`https://api.altoshift.com/v1/suggestions?query=${event.target.value}&token=c471208bd81e9b15621be1a3b214c996`)
      setSuggestion(result.data.terms)
      // console.log(result.data.terms)
    } catch (error) {
      console.log(error)
    }
    
  }


  return suggestion == undefined ? <div/> : (

      <div className="mb-3">
        <Container fluid className="shadow bg-light">
          <section style={{ paddingTop:"20px", paddingBottom:"20px", }}>
            <Container>
              <Row>
                <div className="col-2">
                  Doss
                </div>
                  <div className="col-6">
                    <div className="d-flex">
                      <input type="text" className="form-control" name="cari" value={search} onChange={(value) => handleChange(value)} />
                      <button className="btn btn-primary">Cari</button>
                    </div>
                      <Collapse in={open}>
                        <div id="example-collapse-text">
                            {
                              suggestion.map((sugesti) => {
                                return console.log(sugesti)                            })
                            }
                        </div>
                    </Collapse>
                  </div>
                <div className="col-4">
                  <div className="d-flex justify-content-around">
                      <div className="login-menu">
                        <p><FontAwesomeIcon icon={faSignInAlt} /> Login</p>
                      </div>
                      <div className="register-menu">
                        <p><FontAwesomeIcon icon={faUserCircle} /> Register</p>
                      </div>
                  </div>
                </div>
              </Row>
            </Container>
          </section>
        </Container>

        <Container fluid className="bg-dark">
            <Navbar collapseOnSelect expand="lg" bg="bg-dark" variant="dark">
              
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                  <Nav.Link href="#features">Menu</Nav.Link>

                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">
                    <FontAwesomeIcon icon={faHeart} /> Wishlist</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </Container>
      </div>
  )
}


export default NavbarComponent;
