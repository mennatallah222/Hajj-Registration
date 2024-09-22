import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../api/axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]=useState(true);
    useEffect(() => {
        const profile = async () => {
            try {
                const token = localStorage.getItem('auth-token');
                const response = await axios.get('/user/profile', {
                    headers: { 'auth-token': token }
                });
                setUser(response.data);
            }
            catch (err) {
                console.error('Error fetching user profile:', err);
            }
            finally{
                setLoading(false);
            }
        };

        profile();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
