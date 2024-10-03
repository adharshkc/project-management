import { useDayAndWeek } from "../../hooks/useDateAndTime"
import Navbar from "../layout/Navbar"
import Project from "../project/Project"
// import Sidebar from "../layout/Sidebar"

const Dashboard = () => {
    const {timeOfDay} = useDayAndWeek()
  return (
    <div className="bg-gray-900">
        <Navbar/>
        <h1 className="text-3xl text-whte text-center my-4">Good {timeOfDay}, Adharsh !</h1>
        <Project/>
    </div>
  )
}

export default Dashboard