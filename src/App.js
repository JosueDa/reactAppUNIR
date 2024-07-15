import React, { useState } from 'react';
import Header from './components/header.js';
import Home from './pages/home.js';
import { Container } from 'react-bootstrap';

function App() {
  
  const [searchTerm, setProducts] = useState("");
  
  return (
    <div>
      <Header setProducts={setProducts} searchTerm={searchTerm}/>
      <Container fluid className="py-3">
        <Home searchTerm={searchTerm}/>
      </Container>
    </div>
  );
}

export default App;
