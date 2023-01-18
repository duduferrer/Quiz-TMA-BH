import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

export const PrivateRoutes = ()=>{
    const isManager = true
    return isManager ? <Outlet/> : <Navigate to="/"/> 
}