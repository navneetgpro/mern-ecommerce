import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'

const Total = ({ subtotal,isLogin,setAlert }) => {
    let shipping = 200;
    let grandtotal = 0;
    if(subtotal>0){
        grandtotal = +subtotal + +shipping;
    }else{
        shipping = 0;
    }
    const orderBtnStatus = (isLogin && subtotal>0)?true:false;

    const placeOrder = () => {
        setAlert('Thank your! Your order is placed','success');
    }
  return (
    <>
        <div className="d-flex justify-content-between">
        <p className="mb-2">Subtotal</p>
        <p className="mb-2">Rs {subtotal}</p>
        </div>

        <div className="d-flex justify-content-between">
        <p className="mb-2">Shipping</p>
        <p className="mb-2">Rs {shipping}</p>
        </div>

        <div className="d-flex justify-content-between mb-4">
        <p className="mb-2">Total(Incl. taxes)</p>
        <p className="mb-2">Rs {grandtotal}</p>
        </div>

        <button type="button" onClick={placeOrder} className="btn btn-info btn-block btn-lg" disabled={!orderBtnStatus}>
        <div className="d-flex justify-content-between">
            <span>Place Order</span>
        </div>
        </button>
    </>
  )
}

export default connect(null,{ setAlert })(Total)