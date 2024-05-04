import React from 'react';
import { Outlet } from 'react-router-dom';
import SubHeader from '../SubHeader';
import NewsHeader from '../Headers/NewsHeader';
import Footer from '../Footer';

const NewsLayout = () => {

    return (
        <div className='layout' id='layout'>
            <NewsHeader/>
            <SubHeader/>
          
            <Outlet/>
          
            <Footer/>
        </div>

    );

}

export default NewsLayout;