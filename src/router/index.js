import React, { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import Loading from '../components/Loading';


const Home = Loading(lazy(()=>import('../page/home')));
const Login = Loading(lazy(() => import("../page/login")));
const SignUp =Loading(lazy(()=>import('../page/signup')));

const NotFoundPage = Loading(lazy(()=>import('../page/Error/NotFound')))

const RouterDom = () => {
  return(
    <>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    </>
  )
}

export default RouterDom;