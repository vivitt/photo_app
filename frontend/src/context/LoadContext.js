import React, { useContext, useState } from "react";

const LoadContext = React.createContext("");

const LoadContextProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadContext.Provider value={{isLoading, setIsLoading}}>
      {children}
    </LoadContext.Provider>
  );
};

export default LoadContextProvider;

export const useLoader = () => useContext(LoadContext);