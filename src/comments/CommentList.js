import "./commentList.css";
import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import { toast } from "react-toastify";
import { getAllComments } from "../services/services";
import { Link } from "react-router-dom";

const CommentsList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        setError(true);
      }
    };
    getComments();
  }, []);

  const renderComment = () => {
    let renderValue = <p>Loading ...</p>;
    if (error) {
      renderValue = <p>fetching date failed!</p>;
      toast.error("fetching date failed!");
    }
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment name={c.name} email={c.email} />
        </Link>
      ));
    }
    return renderValue;
  };
  return <section>{renderComment()}</section>;
};

export default CommentsList;
