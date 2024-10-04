import { Link } from "react-router-dom";
import { Project } from "../../types/type";


const ProjectCard = ({ project, }: { project: Project; }) => {
    return (
        <Link to={'/project/'+project.id}>
            <div
                className={`p-4 rounded-lg shadow-lg bg-gray-800 text-white flex flex-col items-center justify-center hover:bg-gray-700 transition-colors duration-200 cursor-pointer`}
            >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-3">
                    <span className="text-lg font-bold">{project.name[0]}</span>
                </div>
                <h3 className="text-xl font-semibold">{project.name}</h3>
            </div>
        </Link>
    );
};

export default ProjectCard