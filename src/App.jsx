// ./src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Lazy-loaded pages
const Homepage = lazy(() => import("./pages/Homepage"));
const ClassesPage = lazy(() => import("./pages/ClassesPage/ClassesPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/CheckoutPage"));
const SocialMediaPage = lazy(() => import("./pages/SocialMediaPage/SocialMediaPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
const ExplorePage = lazy(() => import("./pages/ExplorePages/ExplorePage"));

// Lazy-loaded nested layout and subpages
const HomeLayout = lazy(() => import("./Layouts/HomeLayout"));
const UserHome = lazy(() => import("./pages/UserHome/UserHome"));
const Newsfeed = lazy(() => import("./components/Newsfeed/Newsfeed"));
const Explore = lazy(() => import("./components/Explore/Explore"));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/blog">
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/social" element={<SocialMediaPage />} />
              <Route path="/dash" element={<DashboardPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="*" element={<NotFound />} />

              <Route path="/home" element={<HomeLayout />}>
                <Route index element={<UserHome />} />
                <Route path="newsfeed" element={<Newsfeed />} />
                <Route path="explore" element={<Explore />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

function NotFound() {
  console.error("Page not found!");
  return <h1 className="text-center mt-5">404 - Not Found</h1>;
}

export default App;
