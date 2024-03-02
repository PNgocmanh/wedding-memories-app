import "./App.css";
// import ScrollTop from './components/ScrollTop';
import RouterDom from "./router";
import { BrowserRouter } from "react-router-dom";
import { themeObject } from "./themes";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyle from "./themes/globalStyle";
import { ConfigProvider } from "antd";
import { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import Snow from "./components/Snow";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  const theme = "dark";

  return (
    <>
      {/* <GlobalStyle /> */}
      <Snow />
      <HelmetProvider>
        <ConfigProvider>
          <BrowserRouter>
            <RouterDom />
            <Footer />
          </BrowserRouter>
        </ConfigProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
