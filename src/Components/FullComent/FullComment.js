import { useEffect, useState } from "react";
import "./fullComment.css";
import { useNavigate, useParams } from "react-router-dom";

import {
  deleteComment,
  getAllComments,
  getOneComment,
} from "../../services/services";

const FullComment = () => {
  const [comment, setComment] = useState(null);

  const params = useParams();
  const commentId = params.id;
  const navigate = useNavigate();

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
      await getAllComments();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
