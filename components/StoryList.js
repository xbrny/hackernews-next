import Link from "next/link";

const StoryList = ({ stories }) => (
  <div>
    {stories.map(story => (
      <div className="story-row" key={story.id}>
        <h2>
          <a href={story.url} target="_target">
            <span className="title">{story.title}</span>
            <span className="link">({story.url})</span>
          </a>
        </h2>
        <span>{story.points} points</span>
        <Link as={`/story/${story.id}`} href={`/story?id=${story.id}`}>
          <a className="comment"><span>{story.comments_count} comments</span></a>
        </Link>
        <span>{story.time_ago}</span>
      </div>
    ))}

    <style jsx>{`
      .story-row {
        margin: 1rem;
      }
      h2 {
        margin: 0;
        margin-bottom: 0.1rem;
      }
      .title,
      .link {
        font-size: 0.8rem;
        font-weight: 400;
        color: #333;
      }
      .link {
        display: inline-block;
        vertical-align: middle;
        max-width: 300px;
        height: 1rem;
        white-space: nowrap;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #666;
      }
      h2 a {
        text-decoration: none;
        color: #3b3b3b;
      }
      span {
        margin-right: 0.5rem;
        font-size: 0.7rem;
        color: #666;
      }
      .comment, .comment span {
        text-decoration: none;
        color: blue;
      }
    `}</style>
  </div>
);

export default StoryList;
