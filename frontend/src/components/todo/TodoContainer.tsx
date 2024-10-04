import { useSortable } from "@dnd-kit/sortable"
import TrashIcon from "../../assets/icons/TrashIcon"
import { Todo } from "../../types/type";

const TodoContainer = ({ todo }: { todo: Todo }) => {
    const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
        id: todo.id,
        data: {
            type: "Todo",
            todo
        }
    })
    const styles = {
        transform: CSS?.Transform?.toString(transform),
        transition: transition || undefined,
        // opacity: isDragging ? 0.5 : 1,
    };
    return (
        <div ref={setNodeRef}
            style={styles}
            {...attributes}
            {...listeners}
            className="p-2 my-2 flex justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1>todo 1</h1>
            <div className="cursor-pointer">

                <TrashIcon />
            </div>
        </div>
    )
}

export default TodoContainer