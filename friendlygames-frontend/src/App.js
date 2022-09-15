import React, { useState, useMemo } from 'react';
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar.js";
import SearchingForEventsPage from "./pages/SearchingForEventsPage.js";
import Home from "./pages/Home.js";
// import Footer from "./components/Footer.js";
import RegistrationPage from "./pages/RegistrationPage.js"
import EventFormPage from "./pages/EventFormPage.js";
import EventPage from "./pages/EventPage.js";
import LoginPage from './pages/LoginPage.js';
import Logout from "./components/Logout.js";
import { UserContext } from './components/UserContext.js';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const value = useMemo(() => ([token, setToken]), [token, setToken]);

  return (
    <div>
      <UserContext.Provider value={value}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/events" element={<SearchingForEventsPage />} />
        <Route path='/events/:id' element={<EventPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/create-event" element={<EventFormPage />} />
        <Route path='/logout' element={<Logout />}/>
      </Routes>
      </UserContext.Provider>
    </div>
  );
}