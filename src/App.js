import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";
import {
  Cart,
  Error,
  Franchise,
  Home,
  MyAccount,
  ShipWithUs,
  Track,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shipwithus" element={<ShipWithUs />} />
        <Route path="franchise" element={<Franchise />} />
        <Route path="track" element={<Track />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
