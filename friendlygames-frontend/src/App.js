import Navbar from "./components/Navbar.js"
import React from 'react';
import Searchbar from "./components/Searchbar.js";
import MainView from "./components/Mainview.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <MainView />
    </div>
  );
}