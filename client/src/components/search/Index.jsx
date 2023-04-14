import { useParams, useSearchParams } from 'react-router-dom';
import { searchProduct } from '../../actions/product';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from './Product';
import Noresult from './Noresult';

const Index = ({products,searchProduct}) => {
  const { type } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [showData, setShowData] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    searchProduct(q);
    setShowData(true);
  }, []);
  useEffect(() => {
    setProductData(products);
  }, [products]);
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="row">
            { showData ? (
              <>
              <h4>Showing results for "{q}"</h4>
              {productData.map((product,index) => <Product product={product} key={index} />)}
              </>
            ) : (
              <Noresult type={type} />
            ) }
          </div>
        </div>
      </section>
    </>
  )
}

Index.propTypes = {
  products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  products: state.product.products
})

export default connect(mapStateToProps,{ searchProduct })(Index)