import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

export const Appbar = () => {
    return <div className="flex justify-between px-10 border-b p-2">
        <Link to="/blogs">
            <div className="flex flex-col justify-center cursor-pointer">
                Medium
            </div>
        </Link>        

        <div>
            <Link to="/publish">
        <button type="button" className="text-white hover:bg-green-800 focus:outline-none focus:ring-4
         focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center 
         me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700
          dark:focus:ring-green-800">Publish</button>
          </Link>
        <Avatar name="Shlok" size="xl"/>
        
        </div>
        
    </div>
} 