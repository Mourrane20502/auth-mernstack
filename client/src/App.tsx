import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC = () => {
  const location = useLocation();

  const hideMainTextPages = ["/login", "/register", "/dashboard"];

  return (
    <>
      <Navbar />

      {/* Conditionally render the welcome text only on the home page */}
      {!hideMainTextPages.includes(location.pathname) && (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
          <div className="container mx-auto p-6">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
                Welcome to the Auth App
              </h1>
              <p className="text-lg text-gray-600">
                A simple app for authentication with React, TypeScript, and
                Express.
              </p>
              <p className="text-md text-gray-500 mb-8">
                Register, login, and access your personalized dashboard.
              </p>

              <div className="flex justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                  <Link to="/register">Get Started</Link>
                </button>
              </div>
            </header>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
