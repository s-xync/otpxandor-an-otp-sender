import React, { Component, Fragment } from 'react';
import { NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component{
  render(){
    return(
      <Fragment>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <NavbarBrand tag={Link} to="/">OTPXANDOR</NavbarBrand>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <NavItem>
                <NavLink tag={Link} to="/contacts">Contacts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/otps">All OTPs</NavLink>
              </NavItem>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBar;
