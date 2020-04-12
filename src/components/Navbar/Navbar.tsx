import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const AppNav = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Furniture Shop</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default AppNav;
