import axios from "axios";
import generateMarkDown from "./Markdown";
import { Project } from "../types/type";



const createGist = async ( project:Project|null) => {
    
    const gistData = {
        description: `Project Summary for ${project?.name}`,
        public: false,  
        files: {
            [`${project?.name}.md`]: {
                content: generateMarkDown(project)
            }
        }
    };
    try {
        const response = await axios.post('https://api.github.com/gists', gistData, {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_KEY}`
            }
        });
        console.log('Secret Gist URL:', response.data.html_url);
        console.log(response)
        return response
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        console.error('Error creating gist:', error.response ? error.response.data : error.message);
    }
}

export default createGist;