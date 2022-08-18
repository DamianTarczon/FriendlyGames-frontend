import Navbar from "./components/Navbar.js";
import React from 'react';
import Searchbar from "./components/Searchbar.js";
// import Mainview from "./components/Mainview.js";
// import Footer from "./components/Footer.js";
import EventsViewWithFilter from "./components/EventsViewWithFilter.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <EventsViewWithFilter />
    </div>
  );
}