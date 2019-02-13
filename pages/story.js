import fetch from "isomorphic-unfetch";
import Error from "next/error";
import Layout from "../components/Layout";
import CommentList from "../components/CommentList";

class Story extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const storyId = query.id;
    let story;
    try {
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/item/${storyId}`
      );
      story = await response.json();
    } catch (error) {
      story = null;
    }

    return { story };
  }

  render() {
    const { story } = this.props;

    if (!story) {
      return <Error statusCode={503} />;
    }

    return (
      <Layout backButton={true}>
        <main>
          <div>
            <h1>{story.title}</h1>
            <div className="meta">
              <strong>{story.points} Points</strong>
              <strong>{story.comments_count} Comments</strong>
              <strong>{story.time_ago}</strong>
            </div>
            {story.comments.length > 0 ? (
              <CommentList comments={story.comments} />
            ) : (
              <div className="no-comment">No comment</div>
            )}
          </div>
        </main>

        <style jsx>{`
          main {
            padding: 1rem;
          }
          .meta {
            padding-bottom: 1rem;
            margin-bottom: 1rem;
            border-bottom: 1px dotted #aaa;
          }
          .meta strong {
            margin-right: 0.8rem;
          }
          .no-comment {
            padding: 1rem 0;
          }
        `}</style>
      </Layout>
    );
  }
}
export default Story;
