import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import Counter from "./pages/Counter";
import EventDetail from "./pages/EventDetail";
import HomeLayout from "./layouts/HomeLayout";

const MainLayoutRoute = ({ children, path }) => {
  return (
    <Route path={path}>
      <MainLayout>{children}</MainLayout>
    </Route>
  );
};

const HomeLayoutRoute = ({ children, path }) => {
  return (
    <Route path={path}>
      <HomeLayout> {children}</HomeLayout>
    </Route>
  );
};

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <MainLayoutRoute path="/counter">
              <Counter />
            </MainLayoutRoute>
            <MainLayoutRoute path="/login">
              <Login />
            </MainLayoutRoute>
            <MainLayoutRoute path="/about">
              <About />
            </MainLayoutRoute>
            <MainLayoutRoute path="/event/:eventId">
              <EventDetail />
            </MainLayoutRoute>
            <MainLayoutRoute path="/event">
              <Events />
            </MainLayoutRoute>

            <HomeLayoutRoute path="/">
              <Home />
            </HomeLayoutRoute>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
