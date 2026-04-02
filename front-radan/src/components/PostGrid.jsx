import PostCard from './PostCard';
import '../styles/post-grid.css';

export default function PostGrid({ posts, onPostClick }) {
  if (posts.length === 0) {
    return (
      <div className="post-grid__empty container">
        <p>No posts found matching your search.</p>
      </div>
    );
  }

  return (
    <section className="post-grid">
      <div className="container">
        <div className="post-grid__list">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} onClick={onPostClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
