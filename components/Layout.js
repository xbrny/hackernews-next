import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

const Layout = ({ children, title, description, backButton }) => (
  <div>
    <Head>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width" />
      <title>{title}</title>
    </Head>
    <div className="container">
      <nav>
        {backButton && (
          <span onClick={() => Router.back()} className="back-button">
            &#x2b05;
          </span>
        )}
        <Link href="/">
          <a className="page-title">Hacker Next</a>
        </Link>
      </nav>
      {children}
    </div>
    <style jsx>{`
      .container {
        max-width: 960px;
        margin: auto;
        background: #f6f6ef;
      }
      nav {
        padding: 0.5rem 1rem;
        background: #f60;
      }
      nav .page-title {
        display: inline-block;
        text-decoration: none;
        color: #333;
        font-size: 1rem;
      }
      .page-title {
        font-size: 1.2rem;
        font-weight: 600;
      }
      .back-button {
        font-size: 1rem;
        color: #333;
        padding-right: 0.5rem;
        cursor: pointer;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-family: sans-serif;
        font-size: 12px;
      }
    `}</style>
  </div>
);

export default Layout;
