import React, { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import Carousel from "../components/Carousel";
import { Alert } from 'react-bootstrap';

export default function Home({ searchTerm }) {
  // State hooks for products and highlightedProducts
  const [products, setProducts] = useState([]);
  const [highlightedProducts, setHighlightedProducts] = useState([]);
     const [showAlert, setShowAlert] = useState(false);

    const handleAlertClose = () => setShowAlert(false);

  useEffect(() => {
    const apiProducts = [
      { id:1,title: 'Smart TV TLC', description: 'Description 3', price: 19.99, imageUrl: 'https://cdn.wallpapersafari.com/38/24/184n6d.jpg' },
      { id:2,title: 'Smart TV samsung', description: 'Description 1', price: 29.99, imageUrl: 'https://img.freepik.com/free-photo/modern-monitor-elegant-table_23-2150706393.jpg' },
      { id:3,title: 'TV LG', description: 'Description 2', price: 39.99, imageUrl: 'https://www.lavanguardia.com/andro4all/hero/2021/04/android-tv.jpg?width=1200&aspect_ratio=16:9' },
      { id:4,title: 'TV Samsung', description: 'Description 3', price: 19.99, imageUrl: 'https://cdn.thewirecutter.com/wp-content/uploads/2018/05/smarttv-lowres-032.jpg?auto=webp&quality=60&width=570&dpr=2' },
      { id:5,title: 'Smart TV samsung', description: 'Description 1', price: 29.99, imageUrl: 'https://wallpapers.com/images/featured/tv-4k-4sq1bqnmzsksymko.jpg' },
      { id:6,title: 'Smart TV LG', description: 'Description 2', price: 39.99, imageUrl: 'https://c.wallhere.com/photos/a1/6f/landscape_nature_starry_night_Moon_lake_reflection_Glacier_National_Park_Montana-110533.jpg!d' },
      { id:7,title: 'Smart TV XIAOMI', description: 'Description 3', price: 19.99, imageUrl: 'https://wallpapercrafter.com/sizes/1366x768/8282-lake-mountains-night-starry-sky-dark-landscape-4k.jpg' },
    ];

    const highlightedProducts = [
      { id:8,title: 'Smart TV samsung', description: 'Description 1', price: 29.99, imageUrl: 'https://wallpapers.com/images/featured/tv-4k-4sq1bqnmzsksymko.jpg' },
      { id:9,title: 'Smart TV LG', description: 'Description 2', price: 39.99, imageUrl: 'https://c.wallhere.com/photos/a1/6f/landscape_nature_starry_night_Moon_lake_reflection_Glacier_National_Park_Montana-110533.jpg!d' },
      { id:10,title: 'Smart TV XIAOMI', description: 'Description 3', price: 19.99, imageUrl: 'https://wallpapercrafter.com/sizes/1366x768/8282-lake-mountains-night-starry-sky-dark-landscape-4k.jpg' },
    ];

    setTimeout(() => {
      const filteredProducts = apiProducts.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setProducts(filteredProducts);
      setHighlightedProducts(highlightedProducts);
    }, 200); // Simulating 1 second delay for data fetching
  }, [searchTerm]);

  return (
    <Container>
      {showAlert && (
                <Alert variant="success" onClose={handleAlertClose} dismissible>
                    Order placed successfully! Your cart has been cleared.
                </Alert>
            )}
      <Row>
        <Carousel items={highlightedProducts} />
      </Row>
      <ProductCard products={products} />
    </Container>
  );
}
