import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allValue = UseFirebase();
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;