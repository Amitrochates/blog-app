import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";
import moment from "moment";
type Blogprops = {
    id: string;
    author: string;
    title: string;
    content: string;
    publishDate: string;
}
export const BlogComponent = ({author, title, content, publishDate, id }: Blogprops) => {
    return <Link to={`/blog/${id}`}>
    
    <div className="border-b p-4 border-slate-200 pb-4 cursor-pointer">
        <div className="flex">
            <div className=" flex justify-center flex-col">
                <Avatar name={author}/>
            </div>
            <div className="px-2 text-black text-sm flex justify-center flex-col">
                {author}
            </div>
            <div className="px-5 text-gray-500 text-sm flex justify-center flex-col">
                {moment(publishDate).format('DD MMMM YYYY')}
            </div>
        </div>
        <div>
            <div className="flex justify-between">
                <div>
                    <div className="font-bold text-2xl">
                    {title}
                    </div>
                    <div className="text-slate-700 font-serif text-sm">
                    {content.slice(0,100) + "..."}
                    </div>
                </div> 
                
            </div>
        </div>
        <div className="text-slate-400 text-xs pt-5">
        {`${Math.ceil(content.length/100)} minutes`}
        </div>
       
        

    </div>
    </Link>
}