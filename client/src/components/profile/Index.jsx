import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Shipping from "./Shipping"
import Orders from "./Orders"
import Profile from "./Profile"

const Index = ( { user,token } ) => {
  return (
    <>
        <section style={{backgroundColor: '#eee'}}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <Profile user={user} />
                                <hr />
                                <div className="shipping-address">
                                    <Shipping user={user} token={token} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <Orders />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}


Index.propTypes = {
    user: PropTypes.object,
    token: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    user: state.auth.user,
    token: state.auth.token
})

export default connect(mapStateToProps)(Index)