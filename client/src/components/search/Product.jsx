import { baseUrl } from '../../Config';
import { useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Addcart from '../cart/Adcart';

const Product = ({product}) => {
  const {_id,image,name,badge,price} = product;
  let navigate = useNavigate();
  const routeChange = (event) =>{
    let path = '/product/'+_id; 
    navigate(path);
  }
  
  return (
    <>
        <div onClick={routeChange} className="col-md-4 col-lg-3 col-xl-2 col-sm-6 col-12 mb-2">
            <div className="card">
            <img src={baseUrl+'/'+image} className="card-img-top" alt={name} />
            <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{name}
                <div><Badge bg="secondary">{badge}</Badge></div>
                </h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0 w-100"><span className="fw-bold">₹{price}</span>
                <Addcart product={product} text="Add" cdata="float-end" size="sm" />
                </p>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Product