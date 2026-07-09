import { profile } from '../data/content'

const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#contact', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-row">
        <span className="brand gradient-text" style={{ marginRight: 0 }}>
          {profile.name.split(' ')[0]}
        </span>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <nav className="footer-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
