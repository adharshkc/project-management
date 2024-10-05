import { useEffect, useState } from "react"
import { useProjectStore } from "../../zustand/ProjectStore"
import ProjectCard from "./ProjectCard"
import { getProjects } from "../../services/appApi"
import { Project as IProject } from "../../types/type"
import { PuffLoader } from "react-spinners"
import useAuthStore from "../../zustand/AuthStore"

const Project = () => {
    const [projects, setProjects] = useState<IProject[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const {setIsAuthenticated} = useAuthStore()
    async function fetchProjects() {
        setLoading(true)
        try {
            const response = await getProjects()
            setProjects(response.data.result)
            setLoading(false)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            setLoading(false)
            console.log(error.response.data)
            if(error.response.status==401&&error.response.data=="Unauthorized"){
                setIsAuthenticated(false)
            }
        }
    }
    const { setProjectModal, isAddProject } = useProjectStore()
    useEffect(()=>{
        fetchProjects()
    }, [isAddProject])
    if(loading){
        return(
            <div className="min-h-screen bg-gray-900 p-8">
                <div className="max-w-4xl mx-auto flex justify-center">

                <PuffLoader color="rgba(223, 230, 230, 1)" />
                </div>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-semibold text-white mb-6">Projects</h1>
                <div className="grid grid-cols-3 gap-6">
                    <div className="p-4 rounded-lg bg-gray-700 text-white flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors duration-200"
                        onClick={() => setProjectModal(true)}>
                        <span className="text-4xl">+</span>
                        <span className="ml-2 text-lg">Create project</span>
                    </div>
                    {projects?.map((project)=>(
                        
                        <ProjectCard key={project?.id} project={project} />
                       

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project
