import "./comment.css";
const Comment = ({ name, email, onclick }) => {
	return (
		<div className="comment" onClick={onclick}>
			<p className="title">name: </p>
			<p>{name}</p>
			<p className="title">email: </p>
			<p>{email}</p>
			<h4>Click here...</h4>
		</div>
	);
};

export default Comment;
