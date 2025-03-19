import { useRef } from "react"
import '../../pico.sand.css'
import style from "../styles/customerModal.module.css"

function CustomerOrder() {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  return (
    <>
      <a className={style.navLink} onClick={openDialog}>+Customer</a>
      <dialog ref={dialogRef}>
        <article className={style.modal}>

          <p>I would like to order...</p>
          <div className={style.buttonPosition} role="group">
            <button onClick={closeDialog}>Accept</button>
            <button onClick={closeDialog} className="contrast">Decline</button>
          </div>
        </article>
      </dialog>
    </>
  )
}

export default CustomerOrder
