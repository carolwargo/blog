// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import ClassesPage from "./pages/ClassesPage";
import CheckoutPage from "./pages/CheckoutPage";
import SocialmediaPage from "./pages/SocialMediaPage/SocialMediaPage";
import DashboardPage from './pages/DashboardPage';
import HomeLayout from "./Layouts/HomeLayout"; // Changed import name to DrawerLayout
import UserHome from './pages/UserHome';
import Newsfeed from './pages/NewsfeedPage';
import Explore from './components/Explore/Explore';
import ErrorBoundary from "./components/ErrorBoundary";
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
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="/social" element={<SocialmediaPage />} />
            <Route path="/dash" element={<DashboardPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="*" element={<NotFound />} />
         
            <Route path="/user-home" element={<HomeLayout />}> {/* Changed to DrawerLayout */}
              <Route index element={<UserHome />} />
              <Route path="newsfeed" element={<Newsfeed />} />
              <Route path="explore" element={<Explore />} />
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