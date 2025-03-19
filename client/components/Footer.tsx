import { Link } from "react-router-dom"
import '../../pico.sand.css'
import css from "../styles/footer.module.css"

function Footer() {

  return (
    <>
      <footer className={`container ${css.footer}`}>
        <nav>
          <ul>
            <li><Link to="/store">Store</Link></li>
          </ul>
          <ul>
            <li><Link to="/tickets">Orders</Link></li>
          </ul>
          <ul>
            <li><Link to="/register">Register</Link></li>
          </ul>
          <ul>
            <li><Link to="/menu">Menu</Link></li>
          </ul>
        </nav>
      </footer >
    </>
  )
}

export default Footer
