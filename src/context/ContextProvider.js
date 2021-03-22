import React, { useState, useEffect } from "react";

export const MyContext = React.createContext();

const initialState = {
  notes: [],
  value: "",
};
const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
