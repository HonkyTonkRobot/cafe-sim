import { Link } from "react-router-dom"
import CustomerOrder from "./CustomerOrder"

function Footer() {

  return (
    <>
      <footer className="container">
        <nav>
          <Link to="/tickets">Espresso Machine</Link>
          <Link to="/register">Register</Link>
          <Link to="/store">Store</Link>
          <CustomerOrder />
        </nav>
      </footer>
    </>
  )
}

export default Footer
