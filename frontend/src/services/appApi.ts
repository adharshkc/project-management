import axios from "axios"
import { server_url } from "../constants/constants"
import { User } from "../types/type"


export const registerUser = async(userData:User)=>{
    console.log(server_url)
    return await axios.post(`${server_url}/register`, userData)
}