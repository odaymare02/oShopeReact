import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
export const UserContext=createContext();
 const UserContextProvider=({children})=>{
    const[isLogin,setLogin]=useState(localStorage.getItem("token")?true:false);
    const [UserData,setUserData]=useState({});
    useEffect(()=>{
        const token=localStorage.getItem("token");
        if(token){
            const decode=jwtDecode(token);
            setLogin(true);
            setUserData(decode);
        }
    },[])
    return(
        <UserContext.Provider value={{isLogin,setLogin,UserData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;