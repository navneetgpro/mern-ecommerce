import { connect } from 'react-redux';
import { addTocart } from '../../actions/cart';
import Button from 'react-bootstrap/Button'

const Adcart = ({product,text,size,cdata,addTocart}) => {
    const addCart = async (e) => {
        e.stopPropagation()
        const c = await addTocart(product);
        console.log(c);
    }
  return (
    <Button onClick={addCart} className={cdata} size={size} variant="outline-success">{text}</Button>
  )
}

export default connect(null,{addTocart})(Adcart)