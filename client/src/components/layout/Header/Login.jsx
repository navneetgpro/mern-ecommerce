import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../../actions/auth'

const Login = ({handleShow, loading, isAuthenticated, logout, user}) => {

  return (
    <>
    {!loading && isAuthenticated?
    <NavDropdown title={user && user.name} id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Item onClick={logout} href="#logout">Logout</NavDropdown.Item>
    </NavDropdown>
    :<Button onClick={()=>handleShow('login')} style={{margin: '5px'}} variant="primary" size="sm">Login</Button>}
    </>
  )
}


Login.propTypes = {
  logout: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  loading: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user
})

export default connect(mapStateToProps,{logout})(Login)