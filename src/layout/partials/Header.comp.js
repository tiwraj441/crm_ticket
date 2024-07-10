import React from "react";
import {Navbar, Nav, NavbarBrand, NavbarToggle, NavbarCollapse} from "react-bootstrap";
import logo from "../../assets/img/logo.png";

export const Header = () => {
    return <Navbar
       
        collapseOnSelect
        bg="info"
        variant="dark"
        expand="md">





        <NavbarBrand>
        <img src={logo} alt="logo" width="50 px" />
        </NavbarBrand>
        
        <NavbarToggle aria-controls="basic-navbar-nav"/>

         <NavbarCollapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/dashboard">Tickets</Nav.Link>
                <Nav.Link href="/dashboard">Logout</Nav.Link>
            </Nav>
         </NavbarCollapse>
</Navbar>;
};


