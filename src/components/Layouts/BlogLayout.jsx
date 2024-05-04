import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BlogLayout = () => {

    return (
        <div className='blog-layout' id='blog-layout'>
            <Header/>
            <main>
            <Outlet/>
            </main>
            <Footer/>
        </div>

    );

}

export default BlogLayout;