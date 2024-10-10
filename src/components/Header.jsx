import React, { useContext } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { MovieContext } from '../context/MovieContext';

const Header = () => {
  const { setSearchQuery, toggleModal } = useContext(MovieContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Streamify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
          </Nav>
          <Form className="d-flex me-3">
            <FormControl 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
          </Form>
          <Button variant="outline-danger" onClick={toggleModal}>
            <FaUser className="me-2" />
            Login/Sign-Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
