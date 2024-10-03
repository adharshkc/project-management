import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../components/auth/Register"
import Home from "../pages/Home"



export const AppRoute = ()=>{
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

