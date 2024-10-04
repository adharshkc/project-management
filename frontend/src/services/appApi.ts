import axios from "axios";
import { server_url } from "../constants/constants";
import { User } from "../types/type";

function getToken() {
  const token = localStorage.getItem("token");
  return token;
}

export const registerUser = async (userData: User) => {
  console.log(server_url);
  return await axios.post(`${server_url}/register`, userData);
};

export const loginUser = async (email: string, password: string) => {
  return await axios.post(`${server_url}/login`, { email, password });
};
export const createProject = async (projectName: string) => {
  const token = getToken();
  return await axios.post(`${server_url}/projects`, {projectName}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProjects = async () => {
  const token = getToken();
  return await axios.get(`${server_url}/projects`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
};
export const getSingleProject = async(projectId?:string)=>{
    const token = getToken()
    return await axios.get(`${server_url}/project/${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
}
