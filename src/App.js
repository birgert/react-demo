import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import {
  HomeLayoutRoute,
  MainLayoutRoute,
  AuthLayoutRoute,
} from "./layouts/LayoutRoutes";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Counter from "./pages/Counter";
import EventDetail from "./pages/EventDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <HomeLayoutRoute exact path="/">
            <Home />
          </HomeLayoutRoute>

          <MainLayoutRoute exact path="/about">
            <About />
          </MainLayoutRoute>
          <MainLayoutRoute exact path="/event/:eventId">
            <EventDetail />
          </MainLayoutRoute>
          <MainLayoutRoute exact path="/event">
            <Events />
          </MainLayoutRoute>
          <MainLayoutRoute exact path="/counter">
            <Counter />
          </MainLayoutRoute>
          <AuthLayoutRoute exact path="/login">
            <Login />
          </AuthLayoutRoute>
          <MainLayoutRoute exact path="*">
            <NotFound />
          </MainLayoutRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
