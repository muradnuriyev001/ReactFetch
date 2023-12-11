import "./Post.css"
const Post = (props) => {
  const { id, title, userId, body } = props;

  return (
    <div className="post">
      <h1>Id: {id}</h1>
      <h2>Title:{title}</h2>
      <h3>UserId{userId}</h3>
      <h4>Text:{body}</h4>
    </div>
  );
};
export default Post;
