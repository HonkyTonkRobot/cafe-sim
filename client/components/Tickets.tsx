import '../../pico.sand.css'
import style from '../styles/content.module.css'
import CustomerOrder from './CustomerOrder'
import ReceivingOrder from './ReceivingOrder'

function Tickets() {
  return (
    <>
      <article className={style.content}>
        <h1>Orders</h1>
        <ReceivingOrder />
      </article>
    </>
  )
}

export default Tickets
