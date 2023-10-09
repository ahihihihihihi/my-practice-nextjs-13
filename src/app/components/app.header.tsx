'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '@/assets/images/logo192.png'
import Link from 'next/link'
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/store";
import { handleLogoutRedux, handleSetAuthNull } from '@/redux/slice/loginSlice';
import { useEffect } from 'react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

const AppHeader = () => {
    // console.log(">>> check logo: ", logo)
    const user = useSelector((state: any) => state.login.account)

    const router = useRouter()

    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(handleLogoutRedux({}))
    }

    useEffect(() => {
        if (user && user.auth === false) {
            dispatch(handleSetAuthNull({}))
            toast.success("Logout succesfully!")
            router.push("/")
        }
    }, [user])

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
                        {user && user.auth === true &&
                            <>
                                <Nav className="me-auto">
                                    <Nav><Link className='brand mr20px' href='/'>Home</Link></Nav>
                                    <Nav><Link className='brand' href='/users'>Manage User</Link></Nav>
                                </Nav>
                            </>
                        }
                        {user && (user.auth === false || user.auth === null) &&
                            <>
                                <Nav className="me-auto">
                                    <Nav><span></span></Nav>
                                </Nav>

                            </>
                        }
                        <Nav>
                            {user && user.auth === true && user.email &&
                                <span className='nav-link'>Welcome <b>{user.email}</b></span>}
                            <NavDropdown title="Settings" id="basic-nav-dropdown">
                                {user && (user.auth === false || user.auth === null) &&
                                    <NavDropdown.ItemText><Link className='brand mr20px' href='/login'>Login</Link></NavDropdown.ItemText>
                                }
                                {user && user.auth === true &&
                                    <NavDropdown.Item
                                        className='brand mr20px' onClick={() => handleLogout()}>Logout
                                    </NavDropdown.Item>
                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AppHeader