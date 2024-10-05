
import useAuthStore from "../zustand/AuthStore"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuthStore()

    return (isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />)
}


export default ProtectedRoute