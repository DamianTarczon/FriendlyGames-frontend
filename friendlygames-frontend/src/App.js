import React from 'react';
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar.js";
import SearchingForEventsPage from "./pages/SearchingForEventsPage.js";
import Home from "./pages/Home.js";
// import Footer from "./components/Footer.js";
import RegistrationPage from "./pages/RegistrationPage.js"
import EventFormPage from "./pages/EventFormPage.js";
import EventPage from "./pages/EventPage.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/events" element={<SearchingForEventsPage />} />
        <Route path='/events/:id' element={<EventPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/create-event" element={<EventFormPage />} />
      </Routes>
    </div>
  );
}