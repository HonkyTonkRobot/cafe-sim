import { Link } from "react-router-dom"
import '../../pico.sand.css'
import style from "../styles/header.module.css"
import CustomerOrder from "./CustomerOrder"

function Header() {

  return (
    <>
      <header className={`container ${style.header}`}>
        <nav>
          <ul>
            <li><Link to="/start-menu">Start Menu</Link></li>
            <li><Link to="/instructions">Instructions</Link></li>
          </ul>
          <ul>
            <li><CustomerOrder /></li>
          </ul>
        </nav>
      </header >
    </>
  )
}

export default Header
