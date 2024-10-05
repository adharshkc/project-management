import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { createTodo, getSingleProject } from "../../services/appApi"
import { Project as IProject, Todo } from "../../types/type"
import { DndContext, DragStartEvent } from "@dnd-kit/core"
import { useSortable } from "@dnd-kit/sortable"
import TodoContainer from "../todo/TodoContainer"
import useAuthStore from "../../zustand/AuthStore"
import LeftIcon from "../../assets/icons/LeftIcon"

const SingleProject = () => {
    const [project, setProject] = useState<IProject | null>(null)
    const [activeTodo, setActiveTodo] = useState()
    const [newTodo, setNewTodo] = useState<boolean>(false)
    const { projectId } = useParams()
    const { setIsAuthenticated } = useAuthStore()

   

    const fetchProject = async () => {
        try {
            const response = await getSingleProject(projectId)
            setProject(response.data.result)
            console.log(response.data.result)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error)
            if (error.response?.status == 401 && error.response?.data == "Unauthorized") {
                setIsAuthenticated(false)
            }
        }
    }

    const handleDragStart = (event: DragStartEvent) => {

    }

    const handleCreateTodo = async () => {
        try {
            // const response = await createTodo(projectId)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response.status == 401 && error.response.data == "Unauthorized") {
                console.log(error.response.data)
                setIsAuthenticated(false)
            }
        }
    }

    useEffect(() => {
        fetchProject()
    }, [projectId])

    if (project == null) {
        return <h2>loading</h2>
    }
    return (
        <div >
            <div>

                <h1 className="mx-28 my-4 text-3xl flex items-center">
                    <Link to={"/"}>
                    <div className="w-6 mx-5 cursor-pointer">
                        <LeftIcon />
                    </div>
                    </Link>
                    {project?.name}
                </h1>
            </div>
            <DndContext onDragStart={handleDragStart}>


                <div className="flex justify-center">
                    <div className="w-80 mx-16 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between ">
                            <h5 className="text-lg">Todos</h5>
                            {/* <div className="bg-gray-700 p-1 cursor-pointer hover:bg-gray-600 px-3 rounded" onClick={handleCreateTodo}> */}

                                {/* <h5 className="text-lg">+</h5> */}
                            {/* </div> */}

                        </div>

                        <div className="mt-3">
                            {project.todos?.map((todo) => <TodoContainer key={todo.id} todo={todo} />)}
                           {newTodo? <div className=" my-2 flex cursor-pointer hover:bg-gray-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <input type="password" name="password" id="password" placeholder="eg: todo" className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            <div>
                                <div>x</div>
                            </div>
                            </div>:
                             <div onClick={()=>setNewTodo(true)} className="p-2 my-2 cursor-pointer justify-between hover:bg-gray-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="text-md">New Todo...</h5>
                            </div>
                           }
                        </div>
                    </div>
                    <div className="w-80 p-3 bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="text-lg">Completed Todos</h5>
                    </div>

                </div>
            </DndContext>
        </div>
    )
}

export default SingleProject