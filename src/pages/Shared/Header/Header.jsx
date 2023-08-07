import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }


    return (
        <Container>
            <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary p-3">
                <Container>
                    <Navbar.Brand className="fw-bold fs-2 ps-2" href="#home">CulinarySage</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="mx-auto gap-2 d-flex flex-row">
                            <Link className='fs-4 text-decoration-none' to="/">Home</Link>
                            <Link className='fs-4 text-decoration-none' to="/">Blog</Link>
                        </div>

                        <Nav className="d-flex justify-content-center align-items-center">
                            {user &&
                                <FaUserCircle className="text-white me-3" style={{ fontSize: "2rem" }} />
                            }

                            {user ? <Button onClick={handleLogout} variant='dark'>Logout</Button> :
                                <Link to='/login'>
                                    <Button variant='dark' >Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;