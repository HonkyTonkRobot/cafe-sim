import { Link } from "react-router-dom"
import '../../pico.sand.css'
import css from "../styles/footer.module.css"

function Footer() {

  return (
    <>
      <footer className={`container ${css.footer}`}>
        <nav>
          <Link to="/store">Store</Link>
          <Link to="/tickets">Orders</Link>
          <Link to="/register">Register</Link>
          <Link to="/menu">Menu</Link>
        </nav>
      </footer >
    </>
  )
}

export default Footer
