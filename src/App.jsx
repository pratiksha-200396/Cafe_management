import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import OrderDetails from "./Pages/OrderDetails";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Updateform from "./Pages/Updateform";



function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/order-details" element={<OrderDetails/>} />
        <Route path="/contact" element={<Contact/>} />
       <Route path="/updateform/:id" element={<Updateform/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;