import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
          const [user,setUser] = useState(null);
          const [isAuthenticated,setIsAuthenticated] = useState(undefined);
          

          useEffect(()=>{

          },[])
          const login = async(email, password)=>{

          }
          const logout = async()=>{

          }
          const register = async(email, password, username, picture)=>{

          }
          return(
                    <AuthContext.Provider>
                              {children}
                    </AuthContext.Provider>
          )

}
export const useAuth = ()=>{
          const value = useContext(AuthContext);
          if(!value){
                    throw new Error('error')
          }
          return value;
}