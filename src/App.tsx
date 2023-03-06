import React from 'react';
import { MQ } from "./styles/breakpoints";
import ROUTES from "./router/routes";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
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
    <BrowserRouter>
      <GlobalStyles />
      <AppContainer>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
