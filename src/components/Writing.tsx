import { useState } from "react";
import { Link } from "react-router-dom";
import "./Writing.css";
import { posts } from "../data/posts";

const PAGE_SIZE = 3;

export default function Writing() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const visible = posts.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="writing" className="section" aria-labelledby="writing-heading">
      <div className="container">
        <p className="section-label" aria-hidden="true">Writing</p>
        <ul className="writing-list" role="list">
          {visible.map((post) => (
            <li key={post.slug} className="writing-item">
              <time className="writing-date">{post.date}</time>
              <Link to={`/blog/${post.slug}`} className="writing-title">
                {post.title}
              </Link>
              {post.summary && (
                <p className="writing-summary">{post.summary}</p>
              )}
            </li>
          ))}
        </ul>
        {totalPages > 1 && (
          <nav className="writing-pager" aria-label="Writing pagination">
            <button
              className="pager-btn"
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 0}
              aria-label="Previous page"
            >
              ←
            </button>
            <button
              className="pager-btn"
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages - 1}
              aria-label="Next page"
            >
              →
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
