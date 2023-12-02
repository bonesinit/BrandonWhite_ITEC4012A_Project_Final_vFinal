// https://react-bootstrap.netlify.app/docs/components/navbar/
import React from 'react';
import logo from '../images/fo1_logo.png'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
function NavBar({ isAuthenticated, username, onLogout }) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={LinkContainer} to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="Fallout Logo" width={"20%"} className={"hidden-xs"} />{' '}
                        Fallout Tabletop
                        {isAuthenticated ? (
                            <p id={"welcome-text"} className={"mt-1"}>Welcome, { username }!</p>
                        ) : (
                            <p id={"welcome-text"} className={"mt-1"}>Welcome, unknown gamer!</p>
                        )}
                    </Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {isAuthenticated ? (
                        <Nav>
                            <Button variant="outline-danger" onClick={onLogout}>
                                Logout
                            </Button>
                        </Nav>
                    ) : (
                        <Nav>
                            <Button variant="outline-success" href={"/login"}>
                                Login
                            </Button>
                        </Nav>

                    )}
            </Container>
        </Navbar>
    );
}

export default NavBar;