import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constant";

const ContextApi = createContext();

const UserCotextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') || false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});

  const register = async (name, email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        name,
        email,
        password,
      });

      setUser(response.data.data);
      setIsLoggedIn(true);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("isLoggedIn", true);

      return response.data.message;

    } catch (err) {
      console.log("Error Register");
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/login?email=${email}&password=${password}`
      );

      setUser(response.data.data);
      setIsLoggedIn(true);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("isLoggedIn", true);

      return response.data.message;
    } catch (error) {
      return "Login Failed,Try Again"
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
    setUser("");
  };

  return (
    <ContextApi.Provider
      value={{
        isLoggedIn,
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export { UserCotextProvider, ContextApi };
