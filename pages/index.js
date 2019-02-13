import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Error from "next/error";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";

class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;
    try {
      page = Number(query.page) || 1;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await response.json();
    } catch (err) {
      stories = [];
    }

    return { stories, page };
  }

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("Registration success", registration);
        })
        .catch(err => {
          console.log("Registration failed", err.message);
        });
    }
  }

  render() {
    const { stories, page } = this.props;

    if (!stories.length) {
      return <Error statusCode={503} />;
    }

    return (
      <Layout
        title="Hacker Next"
        description="A hacker news clone build using next.js for learning purpose"
      >
        <StoryList stories={stories} />

        <footer>
          <Link as={`/page/${page + 1}`} href={`/?page=${page + 1}`}>
            <a>Next page ({page + 1})</a>
          </Link>
        </footer>

        <style jsx>{`
          footer {
            padding: 1rem;
          }
          footer a {
            text-decoration: none;
            font-size: 1rem;
            font-weight: 600;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
