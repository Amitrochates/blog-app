import { Avatar } from "./Avatar"

export const Appbar = () => {
    return <div className="flex justify-between px-10 border-b p-2">
        <div className="flex flex-col justify-center">
            Medium
            {/* <img src="blog-frontend\src\assets\medium.png"/> */}
        </div>
        <div>
        <Avatar name="Shlok" size="xl"/>
        </div>
        
    </div>
} 