import React,{useState,useContext,useEffect } from 'react';
import {auth} from '../firebase';



export const AuthContext=React.createContext()

export const useAuth=()=>useContext(AuthContext)

const AuthContextProvider=({children})=> {
   const [currentUser,setCurrentUser]=useState(null)

   


   const signup=(email,password)=>{
    return auth.createUserWithEmailAndPassword(email,password)
   }

   useEffect(()=>{
      const unsubscribe=auth.onAuthStateChanged(user=>{
       setCurrentUser(user)
      })
 
      return unsubscribe
    },[])


   const value={
        currentUser,
        signup
   }

  return (
       <AuthContext.Provider value={value}>
         {children}
       </AuthContext.Provider>
  )
}

export default AuthContextProvider