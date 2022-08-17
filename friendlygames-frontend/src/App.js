import Navbar from "./components/Navbar.js";
import React from 'react';
import Searchbar from "./components/Searchbar.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <MainView />
      <Footer />
    </div>
  );
}