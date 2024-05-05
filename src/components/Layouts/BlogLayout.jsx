import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Headers/Header';
import SubHeader from '../SubHeader';
import Footer from '../Footer';

const BlogLayout = () => {

    return (
        <div className='blog-layout' id='blog-layout'>
            <Header/>
            <SubHeader/>
            <main>
            <Outlet/>
            </main>
            <Footer/>
        </div>

    );

}

export default BlogLayout;