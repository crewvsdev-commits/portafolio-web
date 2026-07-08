import { blogPosts } from '../data/content'

export default function Blog() {
  return (
    <section id="blog" className="section">
      <h2 className="section-title">Blog</h2>
      {blogPosts.length === 0 ? (
        <p className="section-text muted">
          Aún no hay publicaciones. Próximamente compartiré artículos aquí.
        </p>
      ) : (
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <a key={post.title} className="blog-card" href={post.link}>
              <span className="blog-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
