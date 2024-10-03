import { useProjectStore } from "../../zustand/ProjectStore"
import ProjectCard from "./ProjectCard"


const Project = () => {
    const { setProjectModal } = useProjectStore()
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
                    <ProjectCard title="E commerce" />
                </div>
            </div>
        </div>
    )
}

export default Project
