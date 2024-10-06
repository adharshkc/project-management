
import RoundCheck from "../../assets/icons/RoundCheck";
import TrashIcon from "../../assets/icons/TrashIcon"
import { Todo } from "../../types/type";
import { useProjectStore } from "../../zustand/ProjectStore";

const TodoContainer = ({ todo, completeTodo, todoId, completed }: { todo: Todo, completeTodo: (id: number) => void, todoId: (id: number) => void, completed: boolean }) => {
    const { setDeleteModal } = useProjectStore()
    const handleCompleteTodo = () => {
        completeTodo(todo.id)
    }


    const handleDelete = () => {
        todoId(todo.id)
        setDeleteModal(true)
    }
    return (
        <div
            className="p-2 my-2 flex justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           {!completed?
            <h1>{todo.name}</h1>:
            <h1><del>
                {todo.name}
                </del>
                </h1>
           }
                {!completed?
            <div className="flex">
                <div className="cursor-pointer mt-0.5 mx-2 w-6" onClick={handleCompleteTodo}>
                    <RoundCheck />
                </div>
                <div className="cursor-pointer" onClick={handleDelete}>

                    <TrashIcon />
            </div>
                </div>
                 :
                 <div className="cursor-pointer" onClick={handleDelete}>

                     <TrashIcon />
                </div>
                }


        </div>
    )
}

export default TodoContainer