import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselDetailProduct({ item, images }) {
  const imageArray = Array.isArray(images) ? images : [{ imageUrl: images }];

  if (!item || imageArray.length === 0) {
    return <div>No se encontraron imágenes o detalles para mostrar.</div>;
  }

  return (
    <Carousel>
      {imageArray.map((image, index) => (
        <Carousel.Item key={index} interval={1500}>
          <img
            style={{ width: '100%', height: '30rem', objectFit: 'cover' }}
            className="d-block w-100"
            src={image.imageUrl}
            alt={`Slide ${index}`}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
