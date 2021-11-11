import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
  const allContexts = useFirebase();
  return (
    <AuthContex.Provider value={allContexts}>{children}</AuthContex.Provider>
  );
};

export default AuthProvider;
