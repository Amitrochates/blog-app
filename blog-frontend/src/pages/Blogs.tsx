import { BlogComponent } from "../components/BlogComponent"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks";

export const Blogs = () =>{
    const {loading,blogs} = useBlogs();

    if(loading){
        return <div>loading</div>
    }

return <>
<div className="flex flex-col justify-center">
    <Appbar/>
 <div className="flex justify-center">
        <div className="max-w-xl ">
            {
                blogs.map( blog =>  <BlogComponent 
                    key={blog.id}
                    author={blog.author.name} 
                    title = {blog.title}
                    content={blog.body} 
                    publishDate={"22 May 2024"}
                    />)
            }
            
        </div>
    </div>
</div>
</>
}