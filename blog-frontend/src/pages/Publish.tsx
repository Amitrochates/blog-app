import { useState } from "react"
import { ChangeEvent } from "react"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    return <div>
        <Appbar/>
       
        <div className="flex flex-col justify-center py-10">
            <div className="pb-5 flex justify-center">
                <div className="flex flex-col max-w-screen-lg w-full">
                    <div>
                        <textarea rows={1} onChange={(e) => {setTitle(e.target.value)}} className="block p-2.5 outline-none max-w-screen-lg w-full text-5xl text-gray-900 rounded-lg" placeholder="Title"></textarea>
                    </div>
                    <div>
                        <TextEditor onChange={(e) => {setContent(e.target.value)}}/>
                    </div>
                    <div className="py-5">
                        <button type="button" onClick={async () => {
        const response = await axios.post(`${BACKEND_URL}/api/blog`, 
        {
            title,
            body: content
        }, 
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        console.log(response.data.id)
        navigate(`/blog/${response.data.id}`)
    }} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Publish</button>
                    </div>
                </div>
            </div>
           
        </div>
        

    </div>
}


function TextEditor ({onChange} : {onChange:(e :ChangeEvent<HTMLTextAreaElement>) => void } ) {
    
    return <div>
        <form>
            <textarea rows={10} onChange = { onChange} className="block p-2.5 w-full outline-none text-gray-900 rounded-lg" placeholder="Tell your story..."></textarea>
        </form>
</div>
}