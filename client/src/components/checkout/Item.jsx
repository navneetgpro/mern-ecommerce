import { baseUrl } from '../../Config';
import { connect } from 'react-redux'
import { BsFillTrashFill } from "react-icons/bs"
import { delCartItem } from '../../actions/cart'

const Item = ({ item, delCartItem }) => {
    const { _id,name,badge,price,quantity,image } = item;
  return (
    <>
        <div className="card mb-3">
        <div className="card-body">
            <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
                <div>
                <img
                    src={baseUrl+'/'+image}
                    className="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
                </div>
                <div className="ms-3">
                <h5>{name}</h5>
                <p className="small mb-0">{badge}</p>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center">
                <div style={{width: '50px'}}>
                <h5 className="fw-normal mb-0">{quantity}</h5>
                </div>
                <div style={{width: '80px'}}>
                <h5 className="mb-0">Rs {price}</h5>
                </div>
                <a href="#!" style={{color: '#e35252'}}><BsFillTrashFill onClick={e=>{delCartItem(item)}} /></a>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default connect(null,{ delCartItem })(Item)