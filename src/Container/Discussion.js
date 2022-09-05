import "./discussion.css";
import { useEffect, useState } from "react";
import Comment from "../Components/Comment/Comment";
import FullComment from "../Components/FullComent/FullComment";
import NewComment from "../Components/NewComment/NewComment";
import { toast } from "react-toastify";
import { getAllComments } from "../services/services";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedID] = useState(null);
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

  const selectCommenthandler = (id) => {
    setSelectedID(id);
  };
  const renderComment = () => {
    let renderValue = <p>Loading ...</p>;
    if (error) {
      renderValue = <p>fetching date failed!</p>;
      toast.error("fetching date failed!");
    }
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onclick={() => selectCommenthandler(c.id)}
        />
      ));
    }
    return renderValue;
  };
  return (
    <main>
      <section>{renderComment()}</section>
      <section>
        <FullComment
          commentId={selectedId}
          setCommentID={setSelectedID}
          comments={comments}
          setComments={setComments}
        />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;
