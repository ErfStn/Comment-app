 import { useEffect, useState } from "react";
import "./fullComment.css";
import {
  deleteComment,
  getAllComments,
  getOneComment,
} from "../../services/services";
const FullComment = ({ commentId, setComments, setCommentID, comments }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => {
          setComment(res.data);
        })
        .catch();
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      const { data } = await getAllComments();
      setComments(data);
      setCommentID(null);
      setComment(null);
    } catch (error) {console.log(error);}
  };

  let commentDetail = <p>Please select a comment!</p>;

  if (commentId) commentDetail = <p>Loading...</p>;

  // if (!comments) commentDetail = <p>Please select a comment!</p>;

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
