import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { posts } from "../data/posts";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="post-not-found container">
        <p>Post not found.</p>
        <Link to="/">← Back</Link>
      </div>
    );
  }

  return (
    <article className="post" aria-labelledby="post-title">
      <div className="container">
        <nav className="post-nav" aria-label="Breadcrumb">
          <Link to="/" className="post-back">← Back</Link>
        </nav>

        <header className="post-header">
          <time className="post-date">{post.date}</time>
          <h1 id="post-title" className="post-title">{post.title}</h1>
          <p className="post-summary">{post.summary}</p>
        </header>

        <div className="post-body">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
