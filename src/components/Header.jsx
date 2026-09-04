import { Link } from 'react-router-dom'
import Nav from './Nav'
import { Button } from './ui/button'
import './Header.css'

export default function Header() {
  return (
    <header className="header-container">
      <Link to="/" className="header-name">
        Ketan
      </Link>
      <div className="header-right">
        <Nav />
        <Button
          render={<a href="mailto:koriigami@gmail.com" />}
          nativeButton={false}
          className="header-cta"
        >
          Book a call
        </Button>
      </div>
    </header>
  )
}
