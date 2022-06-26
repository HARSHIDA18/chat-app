import React from 'react';
import { Container, Grid, Row, Panel } from 'rsuite';
import Col from 'rsuite/lib/Carousel';

const SignIn = () => {
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={24} md={12}>
            <Panel>
              <div>
                <h2>Welcome To Chat</h2>
                <p>Progressive Chat Platform For Neophytes</p>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
