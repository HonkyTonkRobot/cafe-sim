import { Link } from "react-router-dom"
import CustomerOrder from "./CustomerOrder"
import '../../pico.sand.css'
import css from "../styles/footer.module.css"

function Footer() {

  return (
    <>
      <footer className={`container ${css.footer}`}>
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/tickets">Orders</Link>
          <Link to="/store">Store</Link>
          <CustomerOrder />
        </nav>
      </footer >
    </>
  )
}

export default Footer
