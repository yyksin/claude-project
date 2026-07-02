import { brand } from '../data'

const links = [
  { href: '#menu', label: '상품' },
  { href: '#story', label: '멤버십' },
  { href: '#reviews', label: '후기' },
  { href: '#visit', label: '매장안내' },
]

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand">
          {brand.name}
        </a>
        <nav className="header__nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
