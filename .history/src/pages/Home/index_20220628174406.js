import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { Switch } from 'react-router';
import Sidebar from '../../components/Sidebar';
import { RoomsProvider } from '../../context/rooms.context';

const Home = () => {
  return (
    <RoomsProvider>
      <Grid fluid className="h-100">
        <Row className="h1-100">
          <Col xs={24} md={8} className="h1-100">
            <Sidebar />
          </Col>

          <Switch></Switch>
        </Row>
      </Grid>
    </RoomsProvider>
  );
};

export default Home;
