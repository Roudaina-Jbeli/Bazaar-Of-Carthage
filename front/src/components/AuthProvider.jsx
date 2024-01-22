import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Perform login logic here, for example, call an authentication API
    // and set the user state if successful
    setUser(userData);
  };

  const signup = (userData) => {
    // Perform signup logic here, for example, call an authentication API
    // and set the user state if successful
    setUser(userData);
  };

  const logout = () => {
    // Perform logout logic here, for example, clear user data from state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
