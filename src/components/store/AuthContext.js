import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialEmail = localStorage.key(0);
  const [email, setEmail] = useState(initialEmail);
  const initialToken = localStorage.getItem(email);
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (email, token) => {
    setEmail(email);
    setToken(token);
    localStorage.setItem(email, token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem(email);
  };

  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
