import React, { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import Carousel from "../components/Carousel";
import { API_URL } from '../config'; 

export default function Home({ searchTerm }) {
  const [products, setProducts] = useState([]);
  const [highlightedProducts, setHighlightedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = API_URL;

        // If there is a search term, use the search endpoint
        if (searchTerm) {
          url = `http://172.212.80.57:8080/searches/productsByQuery?query=${encodeURIComponent(searchTerm)}`;
        }

        const response = await fetch(url);

        // Check if the response is okay
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Update the products state with fetched data
        setProducts(data);

        // Optionally, handle highlighted products from the data
        const highlighted = data.slice(0, 3);
        setHighlightedProducts(highlighted);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <Container>
      <Row>
        <Carousel items={highlightedProducts} />
      </Row>
      <ProductCard products={products} />
    </Container>
  );
}
