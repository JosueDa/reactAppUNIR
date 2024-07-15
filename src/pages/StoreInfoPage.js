import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../components/header';

const Store = () => {
  return (
    <div>
    <Header />

    <Container className="mt-4">
      <h2 className="mb-4">About Our Store</h2>
      <Row className="mt-4">
        <Col>
          <p>Visit Us Today!</p>
          <p>
            Explore our wide range of products both online and in-store. We look forward to serving you and meeting all your shopping needs.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/vector-gratis/tiendas-cerradas-pandemia_23-2148507421.jpg" />
            <Card.Body>
              <Card.Title>Main Store</Card.Title>
              <Card.Text>
                123 Main Street, City, Country
                <br />
                Phone: +123 456 7890
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="https://refacciones.importadoraver.com/modules/blockstore/cbb22398b930dfb16370942b4f5817dc.jpg" />
            <Card.Body>
              <Card.Title>Branch Store</Card.Title>
              <Card.Text>
                456 Branch Avenue, City, Country
                <br />
                Phone: +987 654 3210
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Store;
