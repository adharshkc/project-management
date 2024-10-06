import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { completeTodo as completeTodoApi, createTodo, deleteTodo, getSingleProject } from "../../services/appApi"
import { Project as IProject, Todo } from "../../types/type"
import TodoContainer from "../todo/TodoContainer"
import useAuthStore from "../../zustand/AuthStore"
import LeftIcon from "../../assets/icons/LeftIcon"
import CheckIcon from "../../assets/icons/CheckIcon"
import CrossMark from "../../assets/icons/CrossMark"
import { useProjectStore } from "../../zustand/ProjectStore"
import DeleteModal from "./DeleteModal"
import { PuffLoader } from "react-spinners"
import ProjectDetail from "./ProjectDetail"

const SingleProject = () => {
    const [project, setProject] = useState<IProject | null>(null)
    const [completedTodo, setCompletedTodo] = useState<Todo[] | null>([])
    const [todos, setTodos] = useState<Todo[] | null>([])
    const [newTodo, setNewTodo] = useState<boolean>(false)
    const [deleteTodoId, setDeleteTodoId] = useState<number>()
    const [todoInput, setTodoInput] = useState("")
    const [projectName, setProjectName] = useState("")
    const [editProjectName, seteditProjectName] = useState<boolean>(false)
    const { projectId } = useParams()
    const { setIsAuthenticated } = useAuthStore()
    const { deleteModal, setDeleteModal } = useProjectStore()

    const fetchProject = async () => {
        try {
            const response = await getSingleProject(projectId)
            setProject(response.data.result)
            console.log(response.data.result)
            const todoArray = response.data.result.todos;
            const completed = todoArray.filter((todo: Todo) => todo.status == 'completed')
            const pending = todoArray.filter((todo: Todo) => todo.status == 'todo')
            setTodos(pending)
            setCompletedTodo(completed)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error)
            if (error.response?.status == 401 && error.response?.data == "Unauthorized") {
                setIsAuthenticated(false)
            }
        }
    }
    const handleCreateTodo = async () => {
        try {
            if (!todoInput.trim()) return
            await createTodo(todoInput, projectId)
            fetchProject()
            setNewTodo(false)
            setTodoInput("")
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response.status == 401 && error.response.data == "Unauthorized") {
                console.log(error.response.data)
                setIsAuthenticated(false)
            }
        }
    }

    const handleDeleteTodo = async () => {
        try {
            console.log(deleteTodoId)
            await deleteTodo(deleteTodoId, projectId)
            fetchProject()
            setDeleteModal(false)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error)
            if (error.response.status == 401 && error.response.data == "Unauthorized") {
                console.log(error.response.data)
                setIsAuthenticated(false)
            }
        }
    }


    const handleCompleteTodo = async (todoId: number) => {
        try {
            await completeTodoApi(todoId)
            fetchProject()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error)
            if (error.response.status == 401 && error.response.data == "Unauthorized") {
                console.log(error.response.data)
                setIsAuthenticated(false)
            }
        }
    }
    const handleEditProject = async(bool:boolean)=>{
        seteditProjectName(bool)
    }
    useEffect(() => {
        fetchProject()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectId])

    if (project == null) {
        return (
            <div className="flex justify-center align-middle">
                <PuffLoader color="rgba(223, 230, 230, 1)" />
            </div>
        )

    }
    return (
        <div >
            {deleteModal && <DeleteModal deleteTodo={handleDeleteTodo} />}
            <div>
                <h1 className="mx-28 my-4 text-3xl flex items-center">
                    <Link to={"/"}>
                        <div className="w-6 mx-5 cursor-pointer">
                            <LeftIcon />
                        </div>
                    </Link>
                    <span className="hover:bg-gray-700 p-1 rounded cursor-pointer" onClick={()=>seteditProjectName(true)}>

                        {project?.name}
                    </span>
                   
                </h1>
            </div>
            <div className="flex justify-center">
                <div className="w-80 mx-16 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between ">
                        <h5 className="text-lg">Todos</h5>
                    </div>
                    <div className="mt-3">
                        {todos?.map((todo) => (
                            <TodoContainer completed={false} todoId={setDeleteTodoId} completeTodo={handleCompleteTodo} key={todo.id} todo={todo} />
                        ))}
                        {newTodo ? <div className=" my-2   bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} name="todo" id="todo" placeholder="eg: todo" className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            <div className="flex justify-end">
                                <div onClick={handleCreateTodo} className=" cursor-pointer my-1 w-5 hover:bg-gray-500"><CheckIcon /></div>
                                <div className=" cursor-pointer mx-3 w-5 my-1 hover:bg-gray-500" onClick={() => setNewTodo(false)}><CrossMark /></div>
                            </div>
                        </div> :
                            <div onClick={() => setNewTodo(true)} className="p-2 my-2 cursor-pointer justify-between hover:bg-gray-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="text-md">New Todo...</h5>
                            </div>
                        }
                    </div>
                </div>
                <div className="w-80 p-3 bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="text-lg">Completed Todos</h5>
                    <div className="mt-3">
                        {completedTodo?.map((todo) => (
                            <TodoContainer completed={true} todoId={setDeleteTodoId} key={todo.id} completeTodo={handleCompleteTodo} todo={todo} />
                        ))}
                    </div>
                </div>
            </div>
            {editProjectName&&<ProjectDetail project={project} ProjectDetailModal={handleEditProject} />}
        </div>
    )
}

export default SingleProject