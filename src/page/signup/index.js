import React, { useState } from "react";
import { Col, Card, Space, Row } from "antd";
import * as Auth from './SignUp.styles'
import SignUpForm from "./SignUpForm";

const Login = () => {
  return (
    <Auth.BackgroundWrapper>
      <Auth.Container>
        {/* <Col span={4}> */}
          <Card style={{
              // width: 500,
              height: 500,
              overflow: 'auto'
            }}
          >
            <SignUpForm />
          </Card>
        {/* </Col> */}
      </Auth.Container>
    </Auth.BackgroundWrapper>
  );
};

export default Login;
