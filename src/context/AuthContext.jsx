import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  });

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u) => u.email === email)) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");

    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or password." };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, currentUser, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
