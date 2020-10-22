import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { connect } from "react-redux";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import LoginModal from "./auth/LoginModal";
import PropTypes from "prop-types";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="e-footer">
        <p>E-Translate</p>
        <p>Copyright : 2020</p>
      </div>
    );
  }
}
