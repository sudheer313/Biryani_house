import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MenuItemPage from "./components/MenuItemPage";

function App() {
  const sampleItem = {
    id: 1,
    name: "Chicken Biryani",
    image: "https://example.com/chicken-biryani.jpg",
    description: "Aromatic basmati rice cooked with tender chicken and spices",
    price: "10.99",
  };

  const addToCart = (id: number) => {
    console.log(`Item with ID ${id} added to the cart.`);
  };

  return (
    <div className="App flex-col">
      <Router>
        <Navbar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<MenuItemPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
