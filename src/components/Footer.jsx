import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}
