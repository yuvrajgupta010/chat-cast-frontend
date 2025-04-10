import React, { useEffect, useState, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { authStatus } from "@/store/auth/verify/action";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

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
  const dispatch = useDispatch();

  const _authenticateOnRefresh = (data) => {
    localStorage.setItem("userDetails", JSON.stringify(data));
    const userDetails = localStorage.getItem("userDetails");

    const pathname = router.pathname;

    if (userDetails) {
      setUserDetails(JSON.parse(userDetails));
      setIsAuthenticated(true);
      if (pathname === "/chat") return;
      router.replace("/chat");
    } else {
      if (pathname === "/chat") {
        localStorage.clear();
        router.push("/");
      }
      return;
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    const verifyAuthStatus = async () => {
      try {
        const response = await dispatch(authStatus()).unwrap();
        console.log(response);
        if (response.status === 200) {
          _authenticateOnRefresh(response?.data?.data?.user);
        }
      } catch (error) {
        console.error(error);
      }
    };
    verifyAuthStatus();
  }, [router.isReady, dispatch]);

  const _authenticate = (data) => {
    const { userDetails } = data;
    setUserDetails(userDetails);
    setIsAuthenticated(true);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    router.push("/chat");
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
