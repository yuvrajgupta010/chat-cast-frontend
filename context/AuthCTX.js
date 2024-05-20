import React, { useEffect, useState, useCallback, useContext } from "react";
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

  const _authenticateOnRefresh = useCallback(() => {
    const userDetails = localStorage.getItem("userDetails");

    if (userDetails) {
      setUserDetails(JSON.parse(userDetails));
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    _authenticateOnRefresh();
  }, [_authenticateOnRefresh]);

  const _authenticate = (data) => {
    const { userDetails, accessToken } = data;
    setUserDetails(userDetails);
    setIsAuthenticated(true);
    console.log(data, "_authenicateid");
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
  };

  const _logout = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("accessToken");
    setUserDetails(null);
    setIsAuthenticated(false);
    router.push("/");
  };

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

export const useAuthCtx = () => useContext(AuthCTX);
export default AuthContextProvider;
