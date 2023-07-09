import React from "react";
import {
  // Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to="/">Northwind Mağazası</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/saveproduct">Ürün Ekle</Link>
              </NavLink>
            </NavItem>
            <CartSummary></CartSummary>
          </Nav>
          {/* </Collapse> */}
        </Navbar>
      </div>
    );
  }
}
