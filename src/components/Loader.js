// import { styled } from '@mui/material/styles';
// import LinearProgress from '@mui/material/LinearProgress';

// const LoaderWrapper = styled('div')(({ theme }) => ({
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   zIndex: 2001,
//   width: '100%',
//   '& > * + *': {
//     marginTop: theme.spacing(2)
//   }
// }));

// const Loader = () => (
//   <LoaderWrapper>
//     <LinearProgress color="primary" />
//   </LoaderWrapper>
// );

import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: '100vh', // Full viewport height
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Loader;
