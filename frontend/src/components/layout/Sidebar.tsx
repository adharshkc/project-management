
const Sidebar = () => {
    return (
        <div className="relative flex flex-col bg-clip-border rounded-xl dark:bg-gray-900 text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
                <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                    <div className="grid place-items-center mr-4">
                       
                    </div>
                    Blocks
                </div>
                <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        
                    </div>Books
                </div>
                
            </nav>
        </div>
    )
}

export default Sidebar