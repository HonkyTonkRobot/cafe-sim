import { Link, Outlet } from "react-router-dom"

function Layout() {

  return (
    <>
      <header>
        <h2>Layout Header</h2>
        <nav>
          <Link to="/start-menu">Start Menu</Link>
          <Link to="/instructions">Instructions</Link>
        </nav>
      </header>
      <main>
        <h1>Layout Main</h1>
        <Outlet />
      </main>
      <footer>
        <h3>Layout Footer</h3>
      </footer>
    </>
  )
}

export default Layout
