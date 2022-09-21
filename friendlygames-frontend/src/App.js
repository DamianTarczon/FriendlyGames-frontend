import React, { useState, useMemo } from 'react';
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar.js";
import SearchingForEventsPage from "./pages/SearchingForEventsPage.js";
import Home from "./pages/Home.js";
import RegistrationPage from "./pages/RegistrationPage.js"
import EventFormPage from "./pages/EventFormPage.js";
import EventPage from "./pages/EventPage.js";
import LoginPage from './pages/LoginPage.js';
import Logout from "./components/Logout.js";
import { UserContext } from './components/UserContext.js';
import PrivateRoute from './components/PrivateRoute.js';

export default function App() {
  const [user, setUser] = useState(localStorage.getItem('user'))

  const value = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <div>
      <UserContext.Provider value={value}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/events" element={<SearchingForEventsPage />} />
        <Route path='/events/:id' element={<PrivateRoute><EventPage /></PrivateRoute>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/create-event" element={<PrivateRoute><EventFormPage /></PrivateRoute>} />
        <Route path='/logout' element={<Logout />}/>
      </Routes>
      </UserContext.Provider>
    </div>
  );
}