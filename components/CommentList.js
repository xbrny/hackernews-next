import Comment from "./Comment";

const CommentList = ({ comments }) => (
  <React.Fragment>
    <h3>Comments:</h3>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </React.Fragment>
);

export default CommentList;
