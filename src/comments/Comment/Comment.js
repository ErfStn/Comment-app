import "./comment.css";
const Comment = ({ name, email, onclick }) => {

  return (
    <div className="comment" onClick={onclick}>
      <h3>details</h3>
      <p>name: {name}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default Comment;
