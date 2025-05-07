// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import ClassesPage from "./pages/ClassesPage/ClassesPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import SocialmediaPage from "./pages/SocialMediaPage/SocialMediaPage";
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ExplorePage from './pages/ExplorePages/ExplorePage'


import HomeLayout from "./Layouts/HomeLayout"; // Changed import name to DrawerLayout
import UserHome from './pages/UserHome/UserHome';
import Newsfeed from './components/Newsfeed/Newsfeed';
import Explore from './components/Explore/Explore';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/social" element={<SocialmediaPage />} />
            <Route path="/dash" element={<DashboardPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="*" element={<NotFound />} />
         
            <Route path="/home" element={<HomeLayout />}> {/* Changed to DrawerLayout */}
              <Route index element={<UserHome />} />
              <Route path="/home/newsfeed" element={<Newsfeed />} />
              <Route path="/home/explore" element={<Explore />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

function NotFound() {
  console.error("Page not found!");
  return <h1>404 - Not Found</h1>;
}

export default App;