import React from 'react';
import styled from '@emotion/styled/macro';
import { MQ } from "./styles/breakpoints";
import ROUTES from "./router/routes";
import { css, Global } from "@emotion/react/macro";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const globalStyleOverrides = css`
  html, body {
    overflow-x: hidden;
  }
`;

const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  ${MQ.md} {
    align-items: center;
    justify-content: center;
    height: inherit;
  }
`;

function App() {
  return (
    <Router>
      <Global styles={globalStyleOverrides} />
      <AppContainer>
        <Switch>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
