import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { updateShipping } from '../../actions/profile';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const initialState = {
    address:'',
    loc:'',
    state:'',
    pincode:''
}

const Shipping = ({ user,token,setAlert,updateShipping }) => {
    const [userData, setUserData] = useState(initialState);
    const { address, loc, state, pincode } = userData;
    useEffect(() => {
        if(user){
            const shipping = user.shipping;
            if(shipping){
                setUserData({
                    address: shipping.address,
                    loc: shipping.loc,
                    state: shipping.state,
                    pincode: shipping.pincode
                });
            }
        }
    }, [user]);

    const onChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        const update = await updateShipping(userData,token);
        if(update){
            setAlert('Shipping updated','success');
        }
    }
  return (
    <>
        <h5>Shipping Address: </h5>
        <Form onSubmit={e=>onSubmit(e)}>
            <Form.Group className="mb-3" controlId="formAdd">
                <Form.Control type="text" name="address" value={address} onChange={e=> onChange(e)} placeholder="Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLoc">
                <Form.Control type="text" name="loc" value={loc} onChange={e=> onChange(e)} placeholder="Loc" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formState">
                <Form.Control type="text" name="state" value={state} onChange={e=> onChange(e)} placeholder="State" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPin">
                <Form.Control type="number" name="pincode" value={pincode} onChange={e=> onChange(e)} placeholder="Pincode" />
            </Form.Group>
            <Button type="submit" variant="primary">
                Update
            </Button>
        </Form>
    </>
  )
}

export default connect(null,{ setAlert, updateShipping })(Shipping)