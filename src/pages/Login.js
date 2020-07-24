import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";
import * as userService from "../services/fakeUserService";

import ImageAreaIcon from "mdi-react/ImageAreaIcon";

function Login(props) {
  let history = useHistory();
  let location = useLocation();

  const { authenticate, state, dispatch } = useContext(UserContext);
  const [loginError, setLoginError] = useState("");

  let { from } = location.state || {
    from: { pathname: "/account" },
  };

  const [authenticating, setAuthenticating] = React.useState(false);

  useEffect(() => {
    if (state.user !== null) {
      // If user already defined in reducer, redirect user to account page
      history.replace(from);
    }
  }, [state.user, history, from, authenticating]);

  let handleLoginCognito = async (email, password) => {
    setAuthenticating(true);
    authenticate(email, password)
      .then(async (data) => {
        console.log("Logged in!", data);

        userService.getUser
          .then((user) => {
            history.replace(from);
            console.log("LOGIN User received: ", user);
            dispatch({ type: "SET_USER", user });
            setAuthenticating(false);
          })
          .catch((err) => {
            // Error retrieving user account
            console.log("Error while retreiving account");
          });
      })
      .catch((err) => {
        console.error("Failed to login!", err);
        setLoginError(err.message);
        setAuthenticating(false);
      });
  };

  const schema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <>
      <div className="mx-auto text-center">
        <ImageAreaIcon size={150} />
        <div className="py-3">
          Don't have an account yet?
          <br />
          <LinkContainer to="/register">
            <Link to="/register">Register here!</Link>
          </LinkContainer>
        </div>
        <div className="py-3">
          <h2>Please sign in</h2>
        </div>
        <Formik
          validationSchema={schema}
          onSubmit={(values) => {
            handleLoginCognito(values.emails, values.password);
          }}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="validationFormikEmail">
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.email}
                  />
                  {errors.email && touched.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="validationFormikPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.password}
                  />
                  {errors.password && touched.password && (
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Form.Row>
              <Button type="submit" disabled={!isValid}>
                Login
              </Button>
              {authenticating && (
                <div className="pl-3">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              )}
              {loginError.length > 0 && (
                <Form.Row className="pt-3">
                  <Alert key="loginError" variant="danger">
                    {loginError}
                  </Alert>
                </Form.Row>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Login;
