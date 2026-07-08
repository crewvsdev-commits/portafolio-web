import { profile } from '../data/content'

const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contacto' },
]

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        {profile.name.split(' ')[0]}
      </a>
      <nav className="nav">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label="Cambiar tema"
        title="Cambiar tema claro/oscuro"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  )
}
