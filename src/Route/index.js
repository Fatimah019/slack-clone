import React from "react";
import { Header } from "../Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "../Components/SideBar";
import styled from "styled-components";
import Chat from "../Components/Chat";

function AllRoutes() {
  return (
    <Router>
      <>
        <Header />
        <AppMain>
          <SideBar />
          <Switch>
            <Route exact path="/">
              <Chat />
            </Route>
          </Switch>
        </AppMain>
      </>
    </Router>
  );
}

export default AllRoutes;

const AppMain = styled.div`
  display: flex;
  height: 100vh;
`;
