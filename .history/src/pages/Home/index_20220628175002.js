import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { Switch, Route, useRouteMatch } from 'react-router';
import Sidebar from '../../components/Sidebar';
import { RoomsProvider } from '../../context/rooms.context';
import Chat from './Chat';
import { useMediaQuery } from '../../misc/custom-hooks';

const Home = () => {
  const isDesktop = useMediaQuery('(min-width:992px)');

  const { isExact } = useRouteMatch();

  const canRenderSidebar = isDesktop || isExact;

  return (
    <RoomsProvider>
      <Grid fluid className="h-100">
        <Row className="h1-100">
          {canRenderSidebar && (
            <Col xs={24} md={8} className="h1-100">
              <Sidebar />
            </Col>
          )}

          <Switch>
            <Route exact path="/chat/:chatId">
              <Col xs={24} md={26} className="h-100">
                <Chat />
              </Col>
            </Route>
          </Switch>
        </Row>
      </Grid>
    </RoomsProvider>
  );
};

export default Home;
