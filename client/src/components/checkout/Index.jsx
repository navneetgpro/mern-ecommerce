import { connect } from 'react-redux'
import Cart from './Cart';
import Order from './Order';

const Index = ({ cart: { items,itemcount,subtotal },user,isAuthenticated }) => {
  return (
    <>
        <section className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                    <div className="card">
                    <div className="card-body p-4">
                        <div className="row">

                            <div className="col-lg-7">
                                <Cart items={items} itemcount={itemcount} />
                            </div>
                            <div className="col-lg-5">
                                <Order subtotal={subtotal} user={user} isAuthenticated={isAuthenticated} />
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

const mapStateToProps = state => ({
    cart: state.cart,
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Index)