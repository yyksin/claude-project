import { profile } from '../data'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React & Vite.
        </p>
      </div>
    </footer>
  )
}
