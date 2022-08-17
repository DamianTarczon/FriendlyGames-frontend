import Navbar from "./components/Navbar.js";
import React from 'react';
import Searchbar from "./components/Searchbar.js";
import Footer from "./components/Footer.js";
import RegistrationPage from "./components/RegistrationPage.js";

export default function App() {
  return (
    <div>
      <Navbar />
      
      <RegistrationPage />
      <Footer />
    </div>
  );
}