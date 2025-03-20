import { useRef } from "react"
import '../../pico.sand.css'
import style from "../styles/customerModal.module.css"

function ReceivingOrder() {
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
      <button className={style.navLink} onClick={openDialog}>Order Complete</button>

      <dialog ref={dialogRef}>
        <article className={style.modal}>

          <p>Thank you, it looks delicious...</p>
          <a onClick={closeDialog}>close</a>
        </article>
      </dialog>
    </>
  )
}

export default ReceivingOrder
