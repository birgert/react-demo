import React, { createContext, useReducer } from "react";

const UserContext = createContext(null);
UserContext.displayName = "UserContext";

const User = (props) => {
  const initialState = {
    user: null,
    permissions: ["anonymous"],
    loggedIn: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_USER":
        return {
          user: action.user,
          permissions: action.user.permissions,
          loggedIn: true,
        };
      case "CLEAR_USER":
        console.log("CLEAR USER");
        return {
          user: null,
          permissions: ["anonymous"],
          loggedIn: false,
        };

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // In this application, the username is the phonenumber
  // make sure to pass phonenumber when calling this function
  const authenticate = async (Username, Password) => {};

  //Signing out from this application only.
  const logout = () => {};

  return (
    <UserContext.Provider
      value={{
        authenticate,
        logout,
        state,
        dispatch,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { User, UserContext };
