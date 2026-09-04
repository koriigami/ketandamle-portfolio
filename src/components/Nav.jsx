import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const links = [
    { name: 'home', path: '/' },
    { name: 'work', path: '/work' },
    { name: 'about', path: '/about' },
    { name: 'contact', path: '/contact' },
  ]

  return (
    <nav className="nav-container">
      <div className="nav-pill">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
