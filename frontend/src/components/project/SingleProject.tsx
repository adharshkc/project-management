import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleProject } from "../../services/appApi"
import { Project as IProject, Todo } from "../../types/type"
import { DndContext, DragStartEvent } from "@dnd-kit/core"
import { useSortable } from "@dnd-kit/sortable"
import TodoContainer from "../todo/TodoContainer"

const SingleProject = () => {
    const [project, setProject] = useState<IProject | null>(null)
    const [activeTodo, setActiveTodo] = useState()
    const { projectId } = useParams()

    const fetchProject = async () => {
        try {
            const response = await getSingleProject(projectId)
            setProject(response.data.result)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDragStart = (event:DragStartEvent) => {
        
    }

    
    useEffect(() => {
        fetchProject()
    }, [projectId])

    if(project==null){
        return <h2>loading</h2>
    }
    return (
        <div >
            <h1 className="mx-28 my-4 text-3xl">{project?.name}</h1>
            <DndContext onDragStart={handleDragStart}>


                <div className="flex justify-center">
                    <div className="w-80 mx-16 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="text-lg">Todos</h5>

                        <div className="mt-3">
                            {project.todos.map((todo)=><TodoContainer todo={todo}/>)}
                        </div>
                    </div>
                    <div className="w-80 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="text-lg">Completed Todos</h5>
                    </div>

                </div>
            </DndContext>
        </div>
    )
}

export default SingleProject