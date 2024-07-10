import { createContext, useState, useEffect, useContext } from 'react';
import  { auth, getFirestore} from '../firebase/config';
import { doc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async(firebaseUser) => {
      if (firebaseUser) {
        setIsAuthenticated(true);
        setUser(firebaseUser);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    return unsubscribe; 
  }, []);

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Sign-out error:', error);
      throw error; 
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
          return useContext(AuthContext);
        };
        