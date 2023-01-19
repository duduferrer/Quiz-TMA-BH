import { useContext, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"


export function PrivateRoutes(){
    const {isManager} = useContext(AuthContext)
    useEffect(()=>{
        if(isManager){
            
        }

    },[])
    return (
        isManager ? <Outlet/> : <Navigate to={"/"}/>
    )
}