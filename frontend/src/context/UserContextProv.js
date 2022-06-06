import React, { useContext, useState } from "react";

export const UserContext = React.createContext({});

export const UserContextProv = ({ children }) => {

    //User
    const [userData, setUserData] = useState({name:"", email: "", favs: []});
  
  
    return (
      <UserContext.Provider value={{userData, setUserData}} >
        {children}
      </UserContext.Provider>
    );
  }
  
export const useUserContext = () => useContext(UserContext)
export default UserContextProv
