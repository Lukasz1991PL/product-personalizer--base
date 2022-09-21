import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import React from 'react';

const App = () => {
  return (
    <React.StrictMode>
      <Container>
        <Header />
        <Products />
      </Container>
    </React.StrictMode>
  );
};

export default App;
