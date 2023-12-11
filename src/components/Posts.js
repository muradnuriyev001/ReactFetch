import Post from "./Post";
import { useEffect, useState } from "react";
import "./Post.css";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(""); //Error
  const [isLoading, setIsLoading] = useState(true); //Loader before loading

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => setError(error.message)) //Error
      .finally(() => setIsLoading(false));
  }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  if (error) {
    return <h1>Error: {error}</h1>;
  } //Error

  return (
    <div>
      <h1>Posts</h1>
      <hr></hr>
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        posts.map((post) => <Post {...post} key={post.id} />)
      )}
    </div>
  );
};

export default Posts;
