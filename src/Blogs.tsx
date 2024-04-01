import { useEffect, useState } from "react";
import Blog from "./Blog";
import axiosInstance from "./axios";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get("/post");
      setPosts(res.data);
    };
    getPost();
  }, []);
  return (
    <>
      <Link to={'/add-post'}>Add Post</Link>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((item, i) => <Blog key={i} item={item}></Blog>)
      ) : (
        <p>No posts available</p>
      )}
    </>
  );
}
