import { Container } from 'react-bootstrap';
import ProductDetail from '../components/ProductDetail';
import Header from "../components/header";

export default function productDetailPage({searchTerm}){

  let apiProducts = [
    { 
      id:1,
      title: 'Smart TV TLC', 
      description: 'Description 3', 
      price: 19.99, 
      imageUrl: 'https://cdn.wallpapersafari.com/38/24/184n6d.jpg', 
      largeDescription: 'Esta es una descripción larga para el Smart TV TLC. Incluye detalles sobre sus características principales y por qué es una buena opción para los consumidores.'
    },
    { 
      id:2,
      title: 'Smart TV samsung', 
      description: 'Description 1', 
      price: 29.99, 
      imageUrl: 'https://img.freepik.com/free-photo/modern-monitor-elegant-table_23-2150706393.jpg', 
      largeDescription: 'Aquí tienes una descripción extensa para el Smart TV Samsung. Descubre todas las funciones avanzadas que ofrece y cómo puede mejorar tu experiencia de entretenimiento en casa.'
    },
    { 
      id:3,
      title: 'TV LG', 
      description: 'Description 2', 
      price: 39.99, 
      imageUrl: 'https://www.lavanguardia.com/andro4all/hero/2021/04/android-tv.jpg?width=1200&aspect_ratio=16:9', 
      largeDescription: 'Conoce más sobre el TV LG con esta detallada descripción. Desde su diseño elegante hasta sus capacidades técnicas, descubre por qué es una opción popular entre los consumidores.'
    },
    { 
      id:4,
      title: 'TV Samsung', 
      description: 'Description 3', 
      price: 19.99, 
      imageUrl: 'https://cdn.thewirecutter.com/wp-content/uploads/2018/05/smarttv-lowres-032.jpg?auto=webp&quality=60&width=570&dpr=2', 
      largeDescription: 'Esta es la descripción larga para el TV Samsung. Aprende sobre sus características innovadoras y cómo puede transformar tu experiencia de visualización de contenido.'
    },
    { 
      id:5,
      title: 'Smart TV samsung', 
      description: 'Description 1', 
      price: 29.99, 
      imageUrl: 'https://wallpapers.com/images/featured/tv-4k-4sq1bqnmzsksymko.jpg', 
      largeDescription: 'Descubre más sobre el Smart TV Samsung con esta descripción detallada. Desde su calidad de imagen hasta su facilidad de uso, explora por qué es tan popular entre los usuarios.'
    },
    { 
      id:6,
      title: 'Smart TV LG', 
      description: 'Description 2', 
      price: 39.99, 
      imageUrl: 'https://c.wallhere.com/photos/a1/6f/landscape_nature_starry_night_Moon_lake_reflection_Glacier_National_Park_Montana-110533.jpg!d', 
      largeDescription: 'Esta descripción extensa te proporciona más información sobre el Smart TV LG. Conoce sus especificaciones técnicas y cómo se compara con otras opciones en el mercado.'
    },
    { 
      id:7,
      title: 'Smart TV XIAOMI', 
      description: 'Description 3', 
      price: 19.99, 
      imageUrl: 'https://wallpapercrafter.com/sizes/1366x768/8282-lake-mountains-night-starry-sky-dark-landscape-4k.jpg', 
      largeDescription: 'Aprende más sobre el Smart TV Xiaomi con esta detallada descripción. Descubre por qué es una opción económica pero poderosa para tu entretenimiento en casa.'
    },
  ];
  

  
    return (
        <div>
        <Header searchTerm={searchTerm}/>
        <Container fluid className="py-3">
          <ProductDetail products={apiProducts}/>
        </Container>
      </div>
      );
}