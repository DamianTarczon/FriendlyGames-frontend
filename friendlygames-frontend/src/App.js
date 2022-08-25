import React from 'react';
import Navbar from "./components/Navbar.js";
import Searchbar from "./components/Searchbar.js";
import MainviewPage from "./pages/MainviewPage.js";
import Footer from "./components/Footer.js";
import RegistrationPage from "./pages/RegistrationPage.js"
import EventFormPage from "./pages/EventFormPage.js";
import EventPage from "./pages/EventPage.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      {/* <RegistrationPage /> */}
      {/* <MainviewPage /> */}
      {/* <Footer /> */}
      {/* <EventFormPage /> */}
      {/* <EventPage /> */}
    </div>
  );
}