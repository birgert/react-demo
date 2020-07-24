import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import HomeLayout from "./HomeLayout";
import AuthLayout from "./AuthLayout";

export const MainLayoutRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <MainLayout>{children}</MainLayout>
    </Route>
  );
};

export const HomeLayoutRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <HomeLayout> {children}</HomeLayout>
    </Route>
  );
};

export const AuthLayoutRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <AuthLayout>{children}</AuthLayout>
    </Route>
  );
};
