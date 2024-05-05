import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Headers/Header';
import Footer from '../Footer';

const Layout = () => {

    return (
        <div className='layout' id='layout'>
            <Header/>
          
            <Outlet/>
          
            <Footer/>
        </div>

    );

}

export default Layout;