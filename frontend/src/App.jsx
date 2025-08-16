import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./Pages/AboutUs";
import Appointment from "./Pages/Appointment";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import Navbar from "./components/Navbar.jsx";
import { Context } from "./main";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        // setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        // setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  // I think here changing the state is not at all reasonable inside the fetch function , but its merely my pwn pov

  return (
    <>
      <Router>
          <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
        <ToastContainer position="top-center" />

      </Router>
    </>
  );
}

export default App
