import { BlogComponent } from "../components/BlogComponent"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blogs = () =>{
    const {loading,blogs} = useBlogs();

    if(loading){
        return (
        <div className="flex flex-col justify-center">
        <Appbar/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        </div>)
    }

return <>
<div className="flex flex-col justify-center">
    <Appbar/>
 <div className="flex justify-center">
        <div className="max-w-xl ">
            {
                blogs.map( blog =>  <BlogComponent 
                    id={blog.id}
                    key={blog.id}
                    author={blog.author.name} 
                    title = {blog.title}
                    content={blog.body} 
                    publishDate={blog.createdAt}
                    />)
            }
            
        </div>
    </div>
</div>
</>
}