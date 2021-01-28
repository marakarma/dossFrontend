import React, { Component, Fragment } from "react";
import {  Container, Dropdown  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
class TilteMenuBar extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mb-3">

        <Dropdown >
          <Dropdown.Toggle variant="default" id="dropdown-basic">
          <FontAwesomeIcon icon={faShoppingBag} /> Product
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">List</Dropdown.Item>
            <Dropdown.Item href="#/action-2">List</Dropdown.Item>
            <Dropdown.Item href="#/action-3">List</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        </Container>
      </Fragment>
    );
  }
}

export default TilteMenuBar;
