import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/navbar/Header";
import PageContainer from "./container/pageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";

import Cart from "./pages/Cart";

import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
      <Footer />
    </div>
  );
};

export default App;
