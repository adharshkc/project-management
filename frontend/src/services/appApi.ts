import axios from "axios"
import { server_url } from "../constants/constants"
import { User } from "../types/type"


export const registerUser = async(userData:User)=>{
    console.log(server_url)
    return await axios.post(`${server_url}/register`, userData)
}

export const loginUser = async(email:string, password:string)=>{
    return await axios.post(`${server_url}/login`, {email, password})
}
export const createProject = async(name:string)=>{
    return await axios.post(`${server_url}/project`, name)
}