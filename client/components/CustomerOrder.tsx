import { useRef } from "react"

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
      <button onClick={openDialog}>+Customer</button>
      <dialog ref={dialogRef}>
        <article>

          <p>I would like to order...</p>
          <div role="group">
            <button onClick={closeDialog}>Accept</button>
            <button onClick={closeDialog} className="contrast">Decline</button>
          </div>
        </article>
      </dialog>
    </>
  )
}

export default CustomerOrder
