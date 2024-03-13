import React, { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import Loading from '../components/Loading';


const Home = Loading(lazy(()=>import('../page/home')));
const NotFoundPage = Loading(lazy(()=>import('../page/Error/NotFound')))

const RouterDom = () => {
  return(
    <>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    </>
  )
}

export default RouterDom;