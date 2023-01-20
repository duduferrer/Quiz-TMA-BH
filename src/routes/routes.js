import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import MapQuestion from "../pages/MapQuestion/MapQuestion"
import AddQuestion from "../pages/QuestionsManager/AddQuestion"
import Ranking from "../pages/Ranking/Ranking"
import { PrivateRoutes } from "./privateRoutes"


export const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/quizAD' element={<MapQuestion/>}/>
                <Route path="/ranking" element={<Ranking/>}/>
                <Route path="/addquestion" element={<PrivateRoutes/>}>
                    <Route path="/addquestion" element={<AddQuestion/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}