import React, { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";


const Home = lazy(()=>import('../page/home'));
const Login = lazy(() => import("../page/login"));
const SignUp = lazy(()=>import('../page/signup'))

const RouterDom = () => {
  return(
    <>
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default RouterDom;