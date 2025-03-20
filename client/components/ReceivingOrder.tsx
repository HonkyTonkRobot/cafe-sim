import { useRef } from "react"
import { Link } from "react-router-dom"
import '../../pico.sand.css'

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
      <button onClick={openDialog}>Order Complete</button>

      <dialog ref={dialogRef}>
        <article >

          <p>Thank you, it looks delicious...</p>
          <Link to="/" onClick={closeDialog}>close</Link>
        </article>
      </dialog>
    </>
  )
}

export default ReceivingOrder
