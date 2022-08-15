import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { useHistory, useLocation } from "react-router-dom";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  const [myUser, setMyUser] = useState(user);
  const [location, setLocation] = useState("");

  const navigatePreviousPage = (page) => {
    setLocation(page);
  };

  useEffect(() => {
    setMyUser(user);
    console.log(window.location.href);
    console.log(window.location.pathname);
    console.log(window.location.search);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        logout,
        user,
        myUser,
        navigatePreviousPage,
        // loginAndRedirect,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
