import Total from './Total'
import Shipping from './Shipping'

const Order = ({ subtotal,user,isAuthenticated }) => {
  return (
    <>
        <div className="card bg-primary text-white rounded-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0">Order details</h5>
                </div>

                <div className="card text-dark bg-light">
                    <div className="card-body">
                        <Shipping user={user} isLogin={isAuthenticated} />
                    </div>
                </div>

                <hr className="my-4" />

                <Total isLogin={isAuthenticated} subtotal={subtotal} />
            </div>
        </div>
    </>
  )
}

export default Order