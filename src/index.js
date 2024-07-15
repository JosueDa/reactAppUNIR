import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetailPage from './pages/productDetailPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './contexts/CartContext'; 
import StoreInfoPage from './pages/StoreInfoPage';

const router =createBrowserRouter([
  {
    path: '/',
    element:<App/>
  },
  {
    path: '/product/:productId',
    element: <ProductDetailPage/>
  }
  ,
  {
    path: '/cart',
    element: <CartPage/>
  },
  {
    path: '/StoreInfoPage ',
    element: <StoreInfoPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
