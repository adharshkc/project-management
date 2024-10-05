import {create} from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type IAuthStore ={
    isAuthenticated:boolean
    setIsAuthenticated:(arg:boolean)=>void
}

const useAuthStore = create( persist<IAuthStore>((set)=>({
    isAuthenticated:false,
    setIsAuthenticated:(arg)=>set({isAuthenticated:arg})
}),{
    name:'session-storage',
    storage:createJSONStorage(()=>localStorage)
}))

export default useAuthStore;