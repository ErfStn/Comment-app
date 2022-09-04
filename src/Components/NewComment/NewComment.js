import axios from "axios";
import { useEffect, useState } from "react";
import "./newComment.css";
const NewComment = ({ addPost }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const changeCommentHandler = (e) => {
    const value = e.target.value;
    setComment({ ...comment, [e.target.name]: value });
  };

  return (
    <div className="newComment">
      <h2>Add new comment</h2>
      <div className="formControl">
        <label>name</label>
        <input type="text" name="name" onChange={changeCommentHandler} />
      </div>
      <div className="formControl">
        <label>email</label>
        <input type="email" name="email" onChange={changeCommentHandler} />
      </div>
      <div className="formControl">
        <label>body</label>
        <textarea
          type="textarea"
          name="body"
          onChange={changeCommentHandler}
        />
      </div>
      <button type="submit" onClick={() => addPost(comment)}>
        Post
      </button>
    </div>
  );
};

export default NewComment;
