import { Link } from "react-router-dom"
import '../../pico.sand.css'
import style from '../styles/content.module.css'

function StartMenu() {
  return (
    <article className={style.content}>
      <h1>CAFE<em>sim</em></h1>
      <Link to='/' className="button">Start</Link>
    </article>
  )
}

export default StartMenu
