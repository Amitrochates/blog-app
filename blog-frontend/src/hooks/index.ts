import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Blogtype {
    "title": string;
    "body": string;
    "createdAt": string;
    "id": string;
    "author": {
      "name": string;
    }
  }
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs ]= useState<Blogtype[]>([]);

    useEffect(()=> {
        axios.get(`${BACKEND_URL}/api/blog/all`,{ headers:{
            Authorization: localStorage.getItem("token")
        }}

        ).then(response =>{
        setBlogs(response.data);
        setLoading(false)
        
    })
    }, [])
    return {
        loading,
        blogs
    }
}

export const useBlog = ({id}:{id: string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blogtype>();

    useEffect (()=> {
        axios.get(`${BACKEND_URL}/api/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(
            response => {
                setBlog(response.data.blog)
                setLoading(false)
                
            }
        )
    }, [id])

    return {
        loading,
        blog
    }
}