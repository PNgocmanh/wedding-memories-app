import React, { useState } from "react";

import LoginForm from "./LoginForm";
import { Col, Card, Space, Row } from "antd";
import * as Auth from './Login.styles'

const SignUp = () => {
  return (
    <Auth.BackgroundWrapper>
      <Auth.Container>
        {/* <Col span={4}> */}
          <Card style={{
              width: 400,
            }}
          >
            <LoginForm />
          </Card>
        {/* </Col> */}
      </Auth.Container>
    </Auth.BackgroundWrapper>
  );
};

export default SignUp;
