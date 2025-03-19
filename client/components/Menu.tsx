import '../../pico.sand.css'
import style from '../styles/content.module.css'

function Menu() {
  return (
    <>
      <article className={style.content}>
        <h1>Menu</h1>
        <ul>
          <li>Black Coffee</li>
          <li>White Coffee</li>
          <li>Chai</li>
          <li>Hot Chocolate</li>
          <li>Green tea</li>
        </ul>
      </article>
    </>
  )
}

export default Menu
