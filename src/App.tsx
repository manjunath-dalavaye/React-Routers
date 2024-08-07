// import React from 'react';
// import SearchBar from './assesment/searchbar';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { NavBar } from "./components/nav";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import Featured from "./components/FeaturedProducts";
import New from "./components/newProducts";
import User from "./components/User";
import UserDetails from "./components/UserDetails";

const App: React.FunctionComponent = () => {
  return (
    <>
      {/* <parent /> */}
      {/* <SearchBar /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/OrderSummery" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/Products" element={<Products />}>
          {/* if we have give featured page it will take that as a default */}
          <Route index element={<New />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<User />}/>
        <Route path="users/1" element={<UserDetails />} />
        <Route path="users/2" element={<UserDetails />} />
        <Route path="users/3" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default App;
