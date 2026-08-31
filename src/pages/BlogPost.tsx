import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { posts } from "../data/posts";
import { SEO_SITE_URL, SEO_SITE_TITLE } from "../App";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="post">
        <div className="container">
          <div className="post-column">
            <p className="post-notice-label">404</p>
            <p className="post-notice">That post does not exist.</p>
            <Link to="/" className="post-back link-wipe">
              ← Index
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const postUrl = `${SEO_SITE_URL}/blog/${post.slug}`;
  const postSeoTitle = `${post.title} — ${SEO_SITE_TITLE}`;

  return (
    <article className="post" aria-labelledby="post-title">
      <Helmet>
        <title>{SEO_SITE_TITLE}</title>
        <meta name="description" content={post.summary} />
        <link rel="canonical" href={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={postSeoTitle} />
        <meta property="og:description" content={post.summary} />
        <meta name="twitter:title" content={postSeoTitle} />
        <meta name="twitter:description" content={post.summary} />
      </Helmet>

      <div className="container">
        <div className="post-column">
          <nav className="post-nav" aria-label="Breadcrumb">
            <Link to="/" className="post-back link-wipe">
              ← Index
            </Link>
          </nav>

          <header className="post-header">
            <h1 id="post-title" className="post-title">
              {post.title}
            </h1>
            <div className="rule-bar post-rule" />
            <p className="post-meta">
              <time>{post.date}</time>
            </p>
          </header>

          <p className="post-summary">{post.summary}</p>

          <div className="post-body">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
}
