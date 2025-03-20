import '../../pico.sand.css'
import style from '../styles/content.module.css'

function Menu() {
  return (
    <>
      <article className={style.content}>
        <h1>Menu</h1>
        <div className='grid'>
          <div>
            <h3>Drinks</h3>
            {/* TODO: Replace with an array of objects in a data file and map over them */}
            <p>Black Coffee</p>
            <p>White Coffee</p>
            <p>Chai</p>
            <p>Hot Chocolate</p>
            <p>Green tea</p>
          </div>
          <div>
            <h3>Food</h3>
          </div>
        </div>
      </article>
    </>
  )
}

export default Menu
