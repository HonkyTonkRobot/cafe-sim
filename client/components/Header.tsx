import { Link } from "react-router-dom"

function Header() {

  return (
    <>
      <header className="container">
        <nav>
          <Link to="/start-menu">Start Menu</Link>
          <Link to="/instructions">Instructions</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
