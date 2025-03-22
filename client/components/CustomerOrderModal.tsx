import { useRef } from "react"
import { Link } from "react-router-dom"
import '../../pico.sand.css'

function CustomerOrder() {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
      // TODO: figure out how to display the order
    }
  }

  const acceptCloseDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  const declineCloseDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  return (
    <>
      <Link to="/" onClick={openDialog}>+Customer</Link>
      <dialog ref={dialogRef}>
        <article >
          <p>I would like to order...</p>
          <div role="group">
            <button onClick={acceptCloseDialog}>Accept</button>
            <button onClick={declineCloseDialog} className="contrast">Decline</button>
          </div>
        </article>
      </dialog>
    </>
  )
}

export default CustomerOrder
