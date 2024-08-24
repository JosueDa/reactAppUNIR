import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CarouselDetailProduct from "../components/CarouselDetailProducts";
import { CartContext } from '../contexts/CartContext';
import CustomAlert from '../components/Alert';
import { API_URL } from '../config';

function ProductDetail() {
    const { productId } = useParams();
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${API_URL}/${productId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                setError(error.message);
            }
        };

        fetchProduct();
    }, [productId]);

    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Producto no encontrado.</div>;

    const handleAddToCart = () => {
        addToCart(product);
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <Container>
            {showAlert && (
                <Row className="justify-content-md-center mt-3">
                    <Col xs={6}>
                        <CustomAlert message={`${product.title} added to cart!`} onClose={handleCloseAlert} />
                    </Col>
                </Row>
            )}
            <Row className="justify-content-md-center">
                <Col>
                    <Card>
                        <CarouselDetailProduct variant="top" item={product} images={product.imageUrl} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.largeDescription}</Card.Text>
                            <Card.Text>Precio: ${product.price}</Card.Text>
                            <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetail;