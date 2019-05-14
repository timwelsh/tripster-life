import React from "react";
import { Navbar, NavItem } from "react-materialize";

export default function Header() {

    return (

        <Navbar brand={<a href="#" title="Tripster Life" />} alignLinks="right">
        
            <NavItem href="/">
                Login
            </NavItem>
            <NavItem href="/about">
                About
            </NavItem>
            <NavItem href="/benefits">
                Benefits
            </NavItem>
            <NavItem href="/contact">
                Contact
            </NavItem>
        </Navbar>
    );
}