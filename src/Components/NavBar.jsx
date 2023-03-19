import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Basketball from '../Assets/Basketball.png'

//https://react-bootstrap.github.io/components/navbar/#navbars-mobile-friendly
// check here for hamburger
const NavBar = () => {
    return (
        <>
            <Navbar key='sm' expand='sm' className='mb-3 '>
                <Container fluid>
                    <Navbar.Brand className=''>
                        <img
                            src={Basketball}
                            width="30"
                            height="30"
                            className="d-inline-block mx-1 align-top "
                            alt="Navbar Logo"
                        />
                        Jacob Doffing
                    </Navbar.Brand>                    
                    <NavDropdown className="pe-3 d-sm-none " align='end'>
                        <Nav.Link href="#action1">About Me</Nav.Link>
                        <Nav.Link href="#action2">Videos</Nav.Link>
                        <Nav.Link href="#action2">Stats</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </NavDropdown>
                  
                    <Nav className="justify-content-end flex-grow-1 pe-3 d-none d-sm-flex">
                        <Nav.Link href="#action1">About Me</Nav.Link>
                        <Nav.Link href="#action2">Videos</Nav.Link>
                        <Nav.Link href="#action2">Stats</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar