import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../components/auth/Register"



export const AppRoute = ()=>{
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Routes>
    )
}

