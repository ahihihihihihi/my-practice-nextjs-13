'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '@/assets/images/logo192.png'
import Link from 'next/link'


const AppHeader = () => {
    // console.log(">>> check logo: ", logo)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary appHeader">
                <Container>
                    <Navbar.Brand><Link className='brand' href='/'>
                        <img
                            src={logo.src}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <span> <b>App</b></span>
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav><Link className='brand mr20px' href='/'>Home</Link></Nav>
                            <Nav><Link className='brand' href='/users'>Manage User</Link></Nav>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Settings" id="basic-nav-dropdown">
                                <NavDropdown.ItemText><Link className='brand mr20px' href='/login'>Login</Link></NavDropdown.ItemText>
                                <NavDropdown.ItemText>
                                    <Link className='brand mr20px' href='/logout'>Logout</Link>
                                </NavDropdown.ItemText>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AppHeader