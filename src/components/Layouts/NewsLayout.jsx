import React from 'react';
import { Outlet } from 'react-router-dom';
import NewsHeader from '../Headers/NewsHeader';
import Footer from '../Footer';

const NewsLayout = () => {

    return (
        <div className='news-layout' id='news-layout'>
         <NewsHeader/>
          
            <Outlet/>
          
            <Footer/>
        </div>

    );

}

export default NewsLayout;