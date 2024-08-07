import React from 'react';
// import SearchBar from './assesment/searchbar';
// import {Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import { NavBar } from './components/nav';
// import OrderSummary from './components/OrderSummary';
// import NoMatch from './components/NoMatch';
// import Products from './components/Products';
import parent 


const App: React.FunctionComponent=()=>{
  return (
    <>
     <parent />
     {/* <SearchBar /> */}
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/OrderSummery' element={<OrderSummary />} />
        <Route path='*' element={<NoMatch/>} />
        <Route path='/Products' element={<Products/>} />
      </Routes> */}
      </>
  );
}

export default App;
