

const ProjectCard = ({ title, }: { title: string; }) => {
    return (
        <div
            className={`p-4 rounded-lg shadow-lg bg-gray-800 text-white flex flex-col items-center justify-center hover:bg-gray-700 transition-colors duration-200 cursor-pointer`}
        >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-3">
                <span className="text-lg font-bold">P</span>
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
    );
};

export default ProjectCard