import { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login } from '../../../actions/auth';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';

const initialState = {
  email:'',
  password:'',
}

const signin = ({loginshow, handleShow, handleClose, setAlert, login}) => {
  const [formData, setFromData] = useState(initialState);
  const { email, password } = formData;

  const onChange = e => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = async e => {
    e.preventDefault();
    if(!email.length){
      setAlert('Email field is required','danger');
    }else{
      const logres = await login({ email, password });
      if(logres){
        handleClose('login');
        setFromData(initialState);
      }
    }
  }

  return (
    <Modal show={loginshow} onHide={()=>handleClose('login')}>
    <Form onSubmit={e => onSubmit(e)}>
    <Modal.Header style={{height: '40px'}} closeButton>
      <Modal.Title style={{color: '#4a88c7'}}>Sign in</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} onChange={e=> onChange(e)} name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={e=> onChange(e)} name="password" placeholder="Password" />
        </Form.Group>
      <a onClick={()=>handleShow('signup')} href="/#">Create an account?</a>
    </Modal.Body>
    <Modal.Footer style={{height: '45px'}}>
      <Button type="submit" variant="primary" size="sm" style={{margin: '-4px'}} >
      Login
      </Button>
    </Modal.Footer>
    </Form>
    </Modal>
  )
}

signin.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(null, {setAlert, login})(signin)