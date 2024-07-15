import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function myCarousel({ items }) {
  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item interval={1500} key={index}>
          <img 
            style={{ width: '100%', height: '30rem', objectFit: 'cover' }}
            className="d-block w-100"
            src={item.imageUrl}
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default myCarousel;
