const Orders = () => {
  return (
    <>
        <h3>Your Orders: </h3>
        <div className="row">
            <div className="col-12">
                <p>
                    <b>Status: </b> Not Processed <br />
                    <b>Orderid: #</b> 643420ac1626630034261035 <br />
                    <b>Order On: </b> Monday, 10Apr, 2023 <br />
                    <b>Order Total: $</b> 222 <br />
                </p>
            </div>
        </div>
        <hr/>

        <div className="row">
            <div className="col-12">
                <p>
                    <b>Status: </b> Not Processed <br />
                    <b>Orderid: #</b> 321323q32266nj4261354 <br />
                    <b>Order On: </b> Monday, 10Apr, 2023 <br />
                    <b>Order Total: $</b> 243 <br />
                </p>
            </div>
        </div>
        <hr/>

        <div className="row text-center">
            <div className="col-12">
            <p className="text-muted mb-0">You dont have any order</p>
            </div>
        </div>
    </>
  )
}

export default Orders