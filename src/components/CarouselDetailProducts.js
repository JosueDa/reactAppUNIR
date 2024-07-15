import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselDetailProduct({ item, images }) {
  if (!item || !images || images.length === 0) {
    return <div>No se encontraron imágenes o detalles para mostrar.</div>;
  }

  return (
    <Carousel >
      {images.map((image, index) => (
        <Carousel.Item key={index} interval={1500}>
          <img 
            style={{ width: '100%', height: '30rem', objectFit: 'cover' }}
            className="d-block w-100"
            src={image.imageUrl} // Corregido para usar `image.url` en lugar de `image.imageUrl`
            alt={`Slide ${index}`}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
