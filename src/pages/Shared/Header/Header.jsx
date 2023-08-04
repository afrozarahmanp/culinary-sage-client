import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <Container>
            <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary p-3">
                <Container>
                    <Navbar.Brand className="fw-bold fs-2 ps-2" href="#home">CulinarySage</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-2 d-flex flex-row">
                            <Link className='fs-4 text-decoration-none' to="/">Home</Link>
                            <Link className='fs-4 text-decoration-none' to="/">Blog</Link>


                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">User</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;