import { useProjectStore } from "../../zustand/ProjectStore"

type DeleteModalProp = {
    deleteTodo:()=>void
}

const DeleteModal = ({deleteTodo}:DeleteModalProp) => {
    const { setDeleteModal } = useProjectStore()
    const handleDeleteTodo = ()=>{
        deleteTodo()
    }
    return (
        <div
            id="authentication-modal"
            // tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-full overflow-y-auto bg-black bg-opacity-50"
        >
            <div className="relative p-4 w-96 max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Delete Todo?
                        </h3>
                    </div>
                    <div className="p-4 md:p-5">

                        <div className="flex justify-end mt-3">

                            <button
                                type="button"
                                className=" text-white  mx-3 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={() => setDeleteModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className=" text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={handleDeleteTodo}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal