import axios from 'axios';
import { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            const blogs = await axios.get("http://localhost:3310/api/blog/", { withCredentials: true })
            setBlogs(blogs.data)
        }
        fetchBlogs()
    }, [])
    console.log(blogs)
    return (
        <div>
            <h1>List Of Blogs</h1>
            <div>
                {blogs.map((blog) => (<div>
                    <h3>{blog.title}</h3>
                    <p>{blog.desc}</p>
                </div>))}
            </div>
        </div>
    )
}
