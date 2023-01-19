import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import MapQuestion from "../pages/MapQuestion/MapQuestion"
import QuestionsManager from "../pages/QuestionsManager/QuestionsManager"
import { PrivateRoutes } from "./privateRoutes"


export const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/quizAD' element={<MapQuestion/>}/>
                <Route path="/gerenciar" element={<PrivateRoutes/>}>
                    <Route path="/gerenciar" element={<QuestionsManager/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}