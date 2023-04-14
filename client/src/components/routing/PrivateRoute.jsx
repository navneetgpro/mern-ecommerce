import {  Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const PrivateRoute = ({ auth: { isAuthenticated, loading } }) => (
    !isAuthenticated && !loading ? (
        <Navigate to="/" />
    ) : (
        <Outlet />
       // <>{children}</>
    )
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)