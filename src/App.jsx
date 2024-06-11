import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Products from './components/Products';
import Information from './components/Information';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <h2 className="text-center my-3 my-xl-5">Busque por categoria:</h2>
      <Category />
      <h2 className="text-center my-3 my-xl-5">Produtos que estão bombando!</h2>
      <Products />
      <Information />
      <Form />
      <Footer />
    </>
  );
}

export default App;
