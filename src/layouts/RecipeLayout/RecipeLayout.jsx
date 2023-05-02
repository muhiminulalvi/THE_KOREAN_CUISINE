import React from 'react';
import Header from '../../pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';

const RecipeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;