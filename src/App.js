import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./views/HomePage.jsx";
import Layout from "./components/Layouts/Layout.jsx";
import BlogPage from "./views/BlogPage.jsx";
import BlogLayout from "./components/Layouts/BlogLayout.jsx";
import NewsPage from "./views/NewsPage.jsx";
import NewsLayout from "./components/Layouts/NewsLayout.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
</Route>
          <Route path="/blog-page" element={<BlogLayout />}>
    <Route index element={<BlogPage />} />
</Route>


<Route path="/news-page" element={<NewsLayout />}>
    <Route index element={<NewsPage />} />
</Route>

          {/* Add a route for handling not found routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
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
