import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductCard({ products }) {
  return (
    <div className="row" >
      {products.map((product) => (
        <Col key={product.id} >
          <Card style={{ width: '25rem', marginTop: '15px' }}>
            <Card.Img
              variant="top"
              src={product.imageUrl}
              style={{ width: '100%', height: '15rem', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text variant="primary">${product.price}</Card.Text>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <Button variant="primary" style={{ marginTop: '10px' }}>Ver Detalles</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
}
