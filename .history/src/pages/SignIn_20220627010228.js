import React from 'react';
import { Container, Grid, Row, Col, Panel, Button, Icon } from 'rsuite';

const SignIn = () => {
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome To Chat</h2>
                <p>Progressive Chat Platform For Neophytes</p>
              </div>
              <div className="mt-3">
                <Button block color="blue">
                  <Icon icon="facebook" />
                  Continue With Facebook
                </Button>
                <Button block color="green">
                  <Icon icon="google" />
                  Continue With Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
