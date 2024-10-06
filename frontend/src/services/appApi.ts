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

export const createTodo = async(name:string, projectId?:string)=>{
    const token = getToken()
    return await axios.post(`${server_url}/project/${projectId}/todos`,{name},{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
}

export const completeTodo =async(todoId:number, projectId?:string)=>{
    const token = getToken()
    console.log(todoId)
    return await axios.patch(`${server_url}/project/${projectId}/todos/complete`,{todoId},{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
}
export const deleteTodo =async(todoId?:number, projectId?:string)=>{
    const token = getToken()
    return await axios.delete(`${server_url}/project/${projectId}/todos/${todoId}`,{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
}

export const editProjectName = async (name:string, projectId?:string)=>{
  const token = getToken()
  return await axios.patch(`${server_url}/project/${projectId}/name`,{name},{
    headers:{
        Authorization: `Bearer ${token}`,
    }
})

}