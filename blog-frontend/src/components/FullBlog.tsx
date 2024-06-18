import { useParams } from "react-router-dom";
import { Avatar } from "./Avatar"
import { useBlog } from "../hooks";
import moment from "moment"
import { Appbar } from "./Appbar";
import { FullBLogSkeleton } from "./FullBlogSkeleton";

export const FullBlog = () => {
const {id} = useParams<{ id: string }>();
const {loading, blog} = useBlog({
    id: id as string
})
console.log((id))
console.log(blog)
JSON.stringify(blog)
console.log(blog)
if(loading)
    {
return <div>
    <FullBLogSkeleton/>
</div>}
if (!blog) {
    return <div>Blog not found</div>;
}


 return (<>
        <Appbar/>
        <div className="flex justify-between max-w-screen px-16 pt-14">
            <div className="border-b p-4 border-slate-200 pb-4 max-w-5xl">
                <div>
                    <div className="flex justify-between">
                        <div>
                            <div className="font-bold text-5xl">
                            {blog.title}
                            </div>
                            <div className="py-5 text-gray-500 text flex justify-center flex-col">
                            Posted on {moment(blog.createdAt).format('DD MMMM YYYY')}
                            </div>
                            <div className="py-5 text-black font-semibold">
                            {blog.body}
                            </div>
                            
            
                        </div> 
                        
                    </div>
                </div>
                
            </div>
            <div className="w-2xl p-8">
                <div className="px-5">Author</div>
                <div className="flex"> 
                    <div className="p-5 flex justify-center flex-col">
                
                            <Avatar name={blog.author.name} size="xl"/>
                    </div>
                    <div className="flex flex-col">
                    <div className="font-bold text-xl">{blog.author.name}</div>
                    <div> Description of the author, he likes to write</div>
                    
                    </div>
                </div>
                
            </div>
        </div>
        </>)
}