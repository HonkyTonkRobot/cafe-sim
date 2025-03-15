import { Link, Outlet } from "react-router-dom"

function Layout() {

  return (
    <>
      <header className="container">
        <nav>
          <Link to="/start-menu">Start Menu</Link>
          <Link to="/instructions">Instructions</Link>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">
        <nav>
          <Link to="/tickets">Espresso Machine</Link>
          <Link to="/register">Register</Link>
          <Link to="/store">Store</Link>
        </nav>
      </footer>
    </>
  )
}

export default Layout
