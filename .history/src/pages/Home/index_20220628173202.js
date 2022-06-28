import React from 'react';
import { Grid, Row, Col } from 'rsuite';

const Home = () => {
  return (
    <RoomsProvider>
      <Grid fluid className="h-100">
        <Row className="h1-100">
          <Col xs={24} md={8} className="h1-100">
            <Sidebar />
          </Col>
        </Row>
      </Grid>
    </RoomsProvider>
  );
};

export default Home;
