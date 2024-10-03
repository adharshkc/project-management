
import logo from "../../assets/company-logo-transparent-png-19.png"


const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </div>
        
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </div>
</nav>
  )
}

export default Navbar
