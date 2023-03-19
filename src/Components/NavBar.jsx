import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    return (
        <>
        {['sm'].map((expand) => (
            <Navbar key={expand} expand={expand} className='mb-3 '>
                <Container fluid>
                    <Navbar.Brand>
                        Jacob Doffing
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand} `}>
                    <NavDropdown className="justify-content-end flex-grow-1 pe-3 ">
                        <Nav.Link href="#action1">About Me</Nav.Link>
                        <Nav.Link href="#action2">Videos</Nav.Link>
                        <Nav.Link href="#action2">Stats</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </NavDropdown>
                    </Navbar.Toggle>
                    <Nav className="justify-content-end flex-grow-1 pe-3 d-none d-sm-flex">
                        <Nav.Link href="#action1">About Me</Nav.Link>
                        <Nav.Link href="#action2">Videos</Nav.Link>
                        <Nav.Link href="#action2">Stats</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        ))}
        </>
    )
}

export default NavBar