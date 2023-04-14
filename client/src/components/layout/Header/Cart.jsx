import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom"
import Badge from 'react-bootstrap/Badge'
import { BsFillCartFill } from "react-icons/bs"
// import { ReactComponent as CartSvg }from '../../../images/svg/cart.svg'

const Cart = ({ cartitem }) => {
 let navigate = useNavigate()
  const routeChange = (event) =>{
    let path = '/checkout/'
    navigate(path);
  }
  return (
    <>
    {cartitem>0? <Badge className='cart-items' bg="secondary">{cartitem}</Badge> :''}
    <BsFillCartFill onClick={routeChange} style={{ color: '#fff', fontSize: '1.5rem' }} />
    </>
  )
}

const mapStateToProps = state => ({
  cartitem: state.cart.itemcount
})

export default connect(mapStateToProps)(Cart)