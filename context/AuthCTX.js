import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

export const AuthCTX = React.createContext({
  userDetails: null,
  isAuthenticated: false,
  _logout: () => {},
  _authenticate: (data) => {},
  updateUserDetailsToContext: (data) => {},
});

const AuthContextProvider = (props) => {
  const [userDetails, setUserDetails] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

  useEffect(() => {
    _authenticateOnRefresh();
  }, [_authenticateOnRefresh]);

  const _authenticate = (data) => {
    const { userDetails, token } = data;
    setUserDetails(userDetails);
    setIsAuthenticated(true);

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    localStorage.setItem("token", JSON.stringify(token));
  };

  const _logout = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("token");
    setUserDetails(null);
    setIsAuthenticated(false);
    router.push("/");
  };

  const _authenticateOnRefresh = useCallback(() => {
    const userDetails = localStorage.getItem("userDetails");

    if (userDetails) {
      setUserDetails(JSON.parse(userDetails));
      setUserDetails(true);
      router.push("/chat");
    }
  }, [router]);

  const updateUserDetailsToContext = (data = {}) => {
    const newUserDetails = { ...userDetails, ...data };
    setUserDetails(newUserDetails);
    localStorage.setItem("userDetails", JSON.stringify(newUserDetails));
  };

  return (
    <AuthCTX.Provider
      value={{
        _authenticate,
        _logout,
        updateUserDetailsToContext,
        userDetails,
        isAuthenticated,
      }}
    >
      {props.children}
    </AuthCTX.Provider>
  );
};

export default AuthContextProvider;
