

const GistModal = ({url, openGist}:{url:string, openGist:(bool:boolean)=>void}) => {
  return (
    <div
      id="authentication-modal"
            aria-hidden="true"
            className="fixed top-0 w-auto right-0 left-0 z-50 flex justify-center items-center h-full overflow-y-auto bg-black bg-opacity-50"
        >
            <div className="relative p-4 w-auto  max-h-full">
                <div className="relative bg-white rounded-lg shadow w-auto dark:bg-gray-700">
                    <div className="flex items-center w-auto justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                           Gist has sent Successfully
                        </h3>
                    </div>
                    <div className="p-4 md:p-5">
                    <p>Secret gist url is</p>
                   <a href={url} target="_blank"> 
                   <p className="underline"> {url}</p>
                    </a>

                        <div className="flex justify-end mt-3">

                           
                            <button
                                type="button"
                                className=" text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={()=>openGist(false)}
                            >
                                Got it..
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default GistModal