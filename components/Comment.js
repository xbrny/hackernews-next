const Comment = ({ comment }) => (
  <article className="comment">
    <div className="meta">
      <span className="author">{comment.user}</span>
      <span className="time">{comment.time_ago}</span>
    </div>
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: comment.content }}
    />
    {comment.comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
    <style jsx>{`
      .comment {
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        padding-left: 1rem;
        overflow: auto;
      }
      .content :global(a) {
        color: #f60;
      }
      .meta span {
        margin-right: 0.5rem;
        color: #aaa;
      }
      .meta .author {
        font-weight: 600;
        color: #3b3b3b;
      }
    `}</style>
  </article>
);

export default Comment;
