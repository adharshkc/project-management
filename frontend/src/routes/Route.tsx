import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../components/auth/Register"
import Home from "../pages/Home"
import Project from "../pages/Project"
import ProtectedRoute from "./ProtectedRoute"



export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/project/:projectId" element={<Project />} />
            </Route>
        </Routes>
    )
}

