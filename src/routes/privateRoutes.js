import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"


export function PrivateRoutes(){
    const {isManager} = useContext(AuthContext)
    console.log(isManager)
    return (
        isManager ? <Outlet/> : <Navigate to={"/"}/>
    )
}