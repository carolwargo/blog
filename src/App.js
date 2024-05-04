import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./views/HomePage.jsx";
import BlogPage from "./views/BlogPage.jsx";
import BlogLayout from "./components/Layouts/BlogLayout.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog/*" 
          element={<BlogLayout>
            <BlogPage />
            </BlogLayout>} />
       
          {/* Add a route for handling not found routes */}
          <Route path="*" element={<NotFound />} />
        </Routes> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}

export default App;
