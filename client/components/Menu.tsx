import '../../pico.sand.css'
import style from '../styles/content.module.css'

function Menu() {
  return (
    <>
      <article className={style.content}>
        <h1>Menu</h1>
        {/* TODO: Replace with an array of objects in a data file and map over them */}
        <p>Black Coffee</p>
        <p>White Coffee</p>
        <p>Chai</p>
        <p>Hot Chocolate</p>
        <p>Green tea</p>
      </article>
    </>
  )
}

export default Menu
