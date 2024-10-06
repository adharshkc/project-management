import { useDayAndWeek } from "../../hooks/useDateAndTime"
import { useProjectStore } from "../../zustand/ProjectStore"
import Navbar from "../layout/Navbar"
import NewProject from "../project/NewProject"
import Project from "../project/Project"

const Dashboard = () => {
    const { timeOfDay } = useDayAndWeek()
    const { projectModal } = useProjectStore()
    
    return (
        <div className="bg-gray-900">
            <Navbar />
            <div>

                <h1 className="text-3xl text-whte text-center mt-4">Good {timeOfDay}, Adharsh !</h1>
            </div>
            <Project />
            {projectModal && <NewProject />}
        </div>
    )
}

export default Dashboard