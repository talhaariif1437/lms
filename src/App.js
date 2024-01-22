import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';
import ProductList from './components/pages/ProductList';

import Dashboard from './components/pages/Dashboard'; // Import these components
import About from './components/pages/About';
import Comment from './components/pages/Comment';
import Analytics from './components/pages/Analytics';
import Product from './components/pages/Product';

const App  = () =>{
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
