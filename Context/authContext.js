import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
          const [user,setUser] = useState(null);
          const [isAuthenticated,setIsAuthenticated] = useState(undefined);

          useEffect
}
