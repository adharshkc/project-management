import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { createProject } from "../../services/appApi"
import { useProjectStore } from "../../zustand/ProjectStore"
import useAuthStore from "../../zustand/AuthStore"


const NewProject = () => {
    const [projectName, setProjectName] = useState("")
    const { setProjectModal, setIsAddProject } = useProjectStore()
    const { setIsAuthenticated } = useAuthStore()
    const handleNewProject = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!projectName.trim()) return toast.error("please enter valid project name")
        try {
            const response = await createProject(projectName)
            if (response.status == 200) {
                setProjectModal(false)
                setIsAddProject(true)
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error)

            toast.error("Something went wrong, Try again")
            if (error.response.status == 401 && error.response.data == "Unauthorized") {
                setIsAuthenticated(false)
            }
        }
    }
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div
                id="authentication-modal"
                // tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto bg-black bg-opacity-50"
            >
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Create a new Project
                            </h3>
                        </div>
                        <div className="p-4 md:p-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Project Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="eg: E-Commerce"
                                    required
                                />
                            </div>

                            <div className="flex justify-end mt-3">

                                <button
                                    type="button"
                                    className=" text-white  mx-3 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    onClick={() => setProjectModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className=" text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={(e) => handleNewProject(e)}
                                >
                                    Add Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NewProject