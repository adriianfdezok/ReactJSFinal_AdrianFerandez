import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Image, Dropdown, DropdownButton } from 'react-bootstrap';
import CartWidgets from './CartWidgets';
import { AiTwotoneCar } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import './styles/navbar.css';

const NavBar = () => {
    return (
        <>
            {/* Primera Navbar */}
            <Navbar bg="dark" variant="white" expand="lg">
                <Container>
                    <div className="text-center p-3" style={{ color: '#9B933B' }}>
                        <AiTwotoneCar /> Envío gratis a todo el País
                    </div>
                </Container>
            </Navbar>
            <Navbar bg="dark" variant="white" expand="lg">
                <Container>
                    <DropdownButton variant="black text-white" id="dropdown-basic-button" title="Todos los productos">
                        <Link to="/categoria/procesador" className="dropdown-item">
                            Procesadores
                        </Link>
                        <Link to="/categoria/memoria ram" className="dropdown-item">
                            Memoria RAM
                        </Link>
                        <Link to="/categoria/fuente" className="dropdown-item">
                            {' '}
                            Fuentes
                        </Link>
                        <Link to="/categoria/gabinete" className="dropdown-item">
                            Gabinetes
                        </Link>
                        <Link to="/categoria/placa de video" className="dropdown-item">
                            Placas de video
                        </Link>
                        <Link to="/categoria/Pc Armadas" className="dropdown-item">
                            Pc Armadas
                        </Link>
                    </DropdownButton>

                    <Form className="w-100 p-2">
                        <FormControl type="search" placeholder="Buscar" className="me-2" aria-label="Buscar" />
                    </Form>

                    <CartWidgets />
                    {/* <Link to={'/MyCarts'}>
          </Link> */}
                </Container>
            </Navbar>

            {/* Segunda Navbar */}
            <Navbar bg="danger" variant="dark" className="MiSearchCustom" expand="lg">
                <Container>
                    <Link to="/">
                        <h1 className="fs-5 brand">
                            <Image
                                src="https://plenitudtotal.org/wp-content/uploads/2020/03/leon-icon.jpg"
                                thumbnail
                                style={{ width: '75.6px', height: '75px' }}
                            />
                        </h1>
                    </Link>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/BlogsPost">Blogs</Nav.Link>
                            <Nav.Link href="/Precios">Precios</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
