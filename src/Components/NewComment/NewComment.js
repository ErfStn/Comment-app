import { useState } from "react";
import { addNewComment, getAllComments } from "../../services/services";
import "./newComment.css";
const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const changeCommentHandler = (e) => {
    const value = e.target.value;
    setComment({ ...comment, [e.target.name]: value });
  };
  const postCommentHandler = async (e) => {
    e.preventDefault();
    try {
      await addNewComment({ ...comment, postId: 10 });
      const { data } = await getAllComments();
      setComments(data);
      setComment({
        name: "",
        email: "",
        body: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newComment">
      <h2>Add new comment</h2>
      <div className="formControl">
        <label>name</label>
        <input
          type="text"
          name="name"
          onChange={changeCommentHandler}
          value={comment.name}
        />
      </div>
      <div className="formControl">
        <label>email</label>
        <input
          type="email"
          name="email"
          onChange={changeCommentHandler}
          value={comment.email}
        />
      </div>
      <div className="formControl">
        <label>body</label>
        <textarea
          type="textarea"
          name="body"
          onChange={changeCommentHandler}
          value={comment.body}
        />
      </div>
      <button type="submit" onClick={postCommentHandler}>
        Post
      </button>
    </div>
  );
};

export default NewComment;
