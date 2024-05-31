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

  const _authenticateOnRefresh = () => {
    const token = localStorage.getItem("accessToken");
    const userDetails = localStorage.getItem("userDetails");

    if (token && userDetails) {
      setUserDetails(JSON.parse(userDetails));
      setIsAuthenticated(true);
      router.push("/chat");
    } else {
      localStorage.clear();
      router.push("/");
      return;
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    _authenticateOnRefresh();
  }, [router.isReady]);

  const _authenticate = (data) => {
    const { userDetails, accessToken } = data;
    setUserDetails(userDetails);
    setIsAuthenticated(true);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
  };

  const _logout = async () => {
    await router.push("/");
    localStorage.clear();
    setUserDetails(null);
    setIsAuthenticated(false);
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
