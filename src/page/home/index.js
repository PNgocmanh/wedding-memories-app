import { Col, Divider, Row, Button } from 'antd';
import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useNavigate } from 'react-router-dom'

export default function HomePage(){
  const { isTablet, isDesktop } = useResponsive();
  const navigate = useNavigate();

  return(
    <>
      {isDesktop ? (
        <h1>HomePage</h1>
      ) : (
        <h1>Mobile</h1>
      )}
      <Button onClick={(e) => navigate('/login')}>Login</Button>
      <Row>
        <Col
          span={6}
          xs={{
            order: 1,
          }}
          sm={{
            order: 2,
          }}
          md={{
            order: 3,
          }}
          lg={{
            order: 4,
          }}
        >
          1 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{
            order: 2,
          }}
          sm={{
            order: 1,
          }}
          md={{
            order: 4,
          }}
          lg={{
            order: 3,
          }}
        >
          2 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{
            order: 3,
          }}
          sm={{
            order: 4,
          }}
          md={{
            order: 2,
          }}
          lg={{
            order: 1,
          }}
        >
          3 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{
            order: 4,
          }}
          sm={{
            order: 3,
          }}
          md={{
            order: 1,
          }}
          lg={{
            order: 2,
          }}
        >
          4 col-order-responsive
        </Col>
      </Row>
    </>
  )
}