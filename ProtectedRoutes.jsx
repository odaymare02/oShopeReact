import { Navigate } from "react-router-dom";

export function ProtectedRouter({children}){
    const token=localStorage.getItem("token");
    if(!token){
        return <Navigate to={"/login"}/>
    }
    return children;
}
export function PublicRouter({children}){
    const token=localStorage.getItem("token");
    if(token){
        return <Navigate to={"/home"}/>
    }
    return children;
}