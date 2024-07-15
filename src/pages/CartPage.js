import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import Header from '../components/header';
import CustomerInfoForm from '../components/CustomerInfoForm';
import generatePdf from '../utils/pdfGenerator';
import Alert from '../components/Alert';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [creditCard, setCreditCard] = useState('');
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handleFormSubmit = (data) => {
    setCustomerInfo(data);
    setShowForm(false);
  };

  const handlePurchase = () => {
    if (customerInfo && creditCard) {
      generatePdf(customerInfo, cartItems, creditCard);
      setCustomerInfo(null);
      setCreditCard('');
      clearCart();
      setPurchaseSuccess(true);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal;

  return (
    <div>
      <Header />
      <Container className="mt-4">
        {purchaseSuccess && (
          <Alert
            variant="success"
            message="Order placed successfully! Your cart has been cleared."
            onClose={() => setPurchaseSuccess(false)}
          />
        )}

        <h1 className="mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div>
            <p>Your cart is empty</p>
            <img
              src="https://nationaltoday.com/wp-content/uploads/2021/06/Shopping-Cart-Day-1.jpg"
              alt="Empty Cart"
              className="img-fluid mb-4"
              style={{ maxWidth: '400px' }}
            />
          </div>
        ) : (
          <>
            <Row>
              {cartItems.map((item) => (
                <Col md={6} lg={4} key={item.id} className="mb-3">
                <Card style={{ width: '25rem', marginTop: '15px' }}>
                    <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    style={{ width: '100%', height: '15rem', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>${item.price.toFixed(2)}</Card.Text>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(item.id)}
                        className="w-100 mb-2"
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {!showForm && !customerInfo && (
              <Button
                variant="secondary"
                onClick={() => setShowForm(true)}
                className="w-100 mb-3"
              >
                Enter Customer Info
              </Button>
            )}
            {showForm && !customerInfo && (
              <CustomerInfoForm onSubmit={handleFormSubmit} />
            )}

            {customerInfo && (
              <Row className="mb-3">
                <Col>
                  <label htmlFor="creditCard" className="form-label">Credit Card:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="creditCard"
                    value={creditCard}
                    onChange={(e) => setCreditCard(e.target.value)}
                  />
                </Col>
              </Row>
            )}

            {customerInfo && creditCard && (
              <Button
                variant="success"
                onClick={handlePurchase}
                className="w-100"
              >
                Purchase
              </Button>
            )}

            {customerInfo && (
              <div className="mt-4">
                <h4>Order Summary</h4>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Total: ${total.toFixed(2)}</p>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
}
