import { useState, useMemo } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MobileMenu from './components/MobileMenu';
import SearchBar from './components/SearchBar';
import PostGrid from './components/PostGrid';
import PostModal from './components/PostModal';
import Footer from './components/Footer';
import useScrollDirection from './hooks/useScrollDirection';
import usePosts from './hooks/usePosts';

export default function App() {
  const { posts, loading, error } = usePosts();
  const { isHidden, isStuck, headerRef } = useScrollDirection(200);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    const query = searchQuery.toLowerCase();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.text.toLowerCase().includes(query)
    );
  }, [posts, searchQuery]);

  return (
    <div className="page">
      <Header
        ref={headerRef}
        onMenuToggle={() => setMobileMenuOpen(true)}
        menuOpen={mobileMenuOpen}
      />
      <Navigation isHidden={isHidden} isStuck={isStuck} />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <main>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {loading && (
          <div className="container status-message">
            <p>Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="container status-message">
            <p>Failed to load posts: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <PostGrid posts={filteredPosts} onPostClick={setSelectedPost} />
        )}
      </main>

      <Footer />

      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}
