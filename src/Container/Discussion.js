import axios from "axios";
import "./discussion.css"
import { useEffect, useState } from "react";
import Comment from "../Components/Comment/Comment";
import FullComment from "../Components/FullComent/FullComment";
import NewComment from "../Components/NewComment/NewComment";
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedID] = useState(null);
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const deleteHandler = () => {
    // if (selectedId) {
    //   axios
    //     .delete(`https://jsonplaceholder.typicode.com/comments/${selectedId}`)
    //     .then((res) => {
    //       setComments(res.data);
    //     })
    //     .catch();
    // }
  };
  const postCommentHandler = (comment) => {
    axios
      .post("http://localhost:3001/comments", { ...comment, postId: 10 })
      .then((res) => axios.get("http://localhost:3001/comments"))
      .then((res) => {
        console.log(res);
        setComments(res.data);
      })
      .catch((error) => console.log(error));
  };
  const selectCommenthandler = (id) => {
    setSelectedID(id);
  };
  return (
    <main>
      <section>
        {comments ? (
          comments.map((c) => (
            <Comment
              key={c.id}
              name={c.name}
              email={c.email}
              onclick={() => selectCommenthandler(c.id)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <section>
        <FullComment commentId={selectedId} deleteHandler={deleteHandler} />
      </section>
      <section>
        <NewComment addPost={postCommentHandler} />
      </section>
    </main>
  );
};

export default Discussion;
