import { baseUrl } from '../../Config';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadProduct } from '../../actions/product';
import { useParams } from 'react-router-dom';
import {Badge} from 'react-bootstrap';
import Addcart from '../cart/Adcart';
import ImageHoverZoom from "./imageHoverZoom";

const initialState = {
    name:'',
    badge:'',
    price:'',
    desc:'',
	image:''
}

export const Index = ({ loadProduct,product }) => {
  const { id } = useParams();
  const [productData, setProductData] = useState(initialState);
  const { name,badge,price,desc,image } = productData;
  useEffect(() => {
    loadProduct(id);
  }, []);
  useEffect(() => {
    setProductData(product);
  }, [product]);
  return (
    <>
     <div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper p-2 row">
					<div className="col-md-6">
                    <ImageHoverZoom imagePath={baseUrl+'/'+image}/>
					</div>
					<div className="details col-md-6">
						<h2 className="product-title">{name}</h2>
						<div><Badge bg="secondary">{badge}</Badge></div>
						<p className="product-description mt-1">{desc}</p>
						<h4 className="price">Price: <span>₹{price}</span></h4>
						<p className="vote"><strong>Tip:</strong> Buy today you will get 20% off! <strong>(5 Stars reviews)</strong></p>
						<div className="action">
                            <Addcart product={product} text="Add to cart" size="lg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

Index.propTypes = {
	product: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	product: state.product.product
})
export default connect(mapStateToProps,{ loadProduct })(Index);