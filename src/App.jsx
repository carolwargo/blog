import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/Homepage'; // Import Home component
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary component


import ClassesPage from './pages/ClassesPage';
import CheckoutPage from './pages/CheckoutPage';
import SocialmediaPage from './pages/SocialMediaPage/SocialMediaPage';
import NavigationPage from './pages/NavigationPage'

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';

function App() {
  return (
    <div className="App">
         <AuthProvider>
      <BrowserRouter basename='/blog'>
        <ErrorBoundary>
          <Routes>

        {/* Public Website Homepage */}
  <Route path="/" element={<Homepage />} />
  <Route path="/classes" element={<ClassesPage />} />
  <Route path="/checkout" element={<CheckoutPage />} />
  <Route path='/navpage' element={<NavigationPage/>}/>
  <Route path="/social" element={<SocialmediaPage />} />


                    {/* Dashboard layout routes 
        <Route path="/profile" element={<UserProfileLayout />}>
        <Route index element={<UserProfile />} />
              <Route path="user" element={<UserProfile />} /> 
            </Route>
            */}
   
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}

export default App;

