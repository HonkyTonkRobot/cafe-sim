function CustomerOrder() {
  return (
    <>
      <p>I would like to order...</p>
      <div role="group">
        <button>Accept</button>
        <button className="contrast">Decline</button>
      </div>
    </>
  )
}

export default CustomerOrder
