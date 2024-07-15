import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext'; 

function Header({ searchTerm, setProducts }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { cartItems } = useContext(CartContext);

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSetProducts = (event) => {
    setProducts(event.target.value);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <FaShoppingCart className="me-2" />
          MyStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">My Cart</Nav.Link>
            <Nav.Link as={Link} to="/StoreInfoPage ">About Us</Nav.Link>
          </Nav>
          {isHome && (
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search products"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSetProducts}
              />
            </Form>
          )}
          <Nav.Link as={Link} to="/cart" style={{ color: 'white' }}>
            <FaShoppingCart className="me-2" />
            {totalItemsInCart}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
