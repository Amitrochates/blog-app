import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Blogtype {
    "title": string;
    "body": string;
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