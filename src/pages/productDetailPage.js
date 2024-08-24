import { Container } from 'react-bootstrap';
import ProductDetail from '../components/ProductDetail';
import Header from "../components/header";

export default function productDetailPage({searchTerm}){
  
    return (
        <div>
        <Header searchTerm={searchTerm}/>
        <Container fluid className="py-3">
          <ProductDetail/>
        </Container>
      </div>
      );
}