import { Link } from "react-router-dom"
import '../../pico.sand.css'
import style from "../styles/header.module.css"

function Header() {

  return (
    <>
      <header className={`container ${style.header}`}>
        <nav>
          <Link to="/start-menu">Start Menu</Link>
          <Link to="/instructions">Instructions</Link>
        </nav>
      </header >
    </>
  )
}

export default Header
