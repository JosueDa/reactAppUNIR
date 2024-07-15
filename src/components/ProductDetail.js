import React, { useContext, useState  } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button  } from 'react-bootstrap';
import CarouselDetailProduct from "../components/CarouselDetailProducts";
import { CartContext } from '../contexts/CartContext';
import CustomAlert from '../components/Alert';

function ProductDetail({ products }) {
    const { productId } = useParams(); 
    const product = products[productId];
    const { addToCart } = useContext(CartContext);
    const [showAlert, setShowAlert] = useState(false);

    
    const images = [
        { imageUrl: 'https://wallpapers.com/images/featured/tv-4k-4sq1bqnmzsksymko.jpg' },
        { imageUrl: 'https://c.wallhere.com/photos/a1/6f/landscape_nature_starry_night_Moon_lake_reflection_Glacier_National_Park_Montana-110533.jpg!d' },
        { imageUrl: 'https://wallpapercrafter.com/sizes/1366x768/8282-lake-mountains-night-starry-sky-dark-landscape-4k.jpg' },
      ];

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
                        <CarouselDetailProduct variant="top" item={product} images={images} />
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
