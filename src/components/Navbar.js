import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav, NavItem } from "react-bootstrap"
// import "./Navbar.css"
// import "../../style.css"


const Navbars = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Navbar.Brand href="#home"><strong className="brand"><span className="brand1">B<span className="brand2">e</span>li Baik</span></strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to="/"><strong>Tentang</strong></Nav.Link>
                    <Nav.Link to="/"><strong>Fitur & Bank Pilihan</strong></Nav.Link>
                    <Nav.Link to="/"><strong>Testimoni</strong></Nav.Link>
                    <Nav.Link to="/"><strong>Kontak</strong></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Navbars