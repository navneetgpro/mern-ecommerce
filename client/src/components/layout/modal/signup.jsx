import { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import PropTypes from 'prop-types';

const initialState = {
  name:'',
  email:'',
  password:'',
  confirmpassword:''
}

const signup = ({signupshow, handleShow, handleClose, setAlert, register}) => {
  const [formData, setFromData] = useState(initialState);
  const { name, email, password, confirmpassword } = formData;

  const onChange = e => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = async e => {
    e.preventDefault();
    if(!name.length){
      setAlert('Name field is required','danger');
    }else{
      const reg = await register({ name, email, password, confirmpassword });
      if(reg){
        handleClose('singup');
        setFromData(initialState);
      }
    }
  }

  return (
    <Modal show={signupshow} onHide={()=>handleClose('singup')}>
    <Form onSubmit={e => onSubmit(e)}>
    <Modal.Header style={{height: '40px'}} closeButton>
      <Modal.Title style={{color: '#4a88c7'}}>Sign up</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={e=> onChange(e)} name="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} onChange={e=> onChange(e)} name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={e=> onChange(e)} name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasiccPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" value={confirmpassword} onChange={e=> onChange(e)} name="confirmpassword" placeholder="Confirm Password" />
        </Form.Group>
      <a onClick={()=>handleShow('login')} href="/#">Already a member?</a>
    </Modal.Body>
    <Modal.Footer style={{height: '45px'}}>
      <Button type="submit" variant="primary" size="sm" style={{margin: '-4px'}} >
      Signup
      </Button>
    </Modal.Footer>
    </Form>
    </Modal>
  )
}

signup.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
}

export default connect(null, { setAlert, register })(signup)