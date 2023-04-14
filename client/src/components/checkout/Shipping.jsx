import { Link } from 'react-router-dom';

const Shipping = ({ user,isLogin }) => {
  return (
    <>  
        {isLogin?
        <>
        <div className="float-end">
            <Link to="/profile"><u>Edit address</u></Link>
        </div>
        </>:
        <>
        <div className="float-end">
            <Link to="/"><u>Login now</u></Link>
        </div>
        </>}
        <div className="shipping-address">
            {isLogin?
                <>
                    <h4>{capitalize(user.name)}</h4>
                    {user.shipping?
                        <>
                            <div>
                        {user.shipping.address},
                    </div>
                    <div>
                        {user.shipping.loc},
                    </div>
                    <div>
                        {user.shipping.state},
                    </div>
                    <div>
                        {user.shipping.pincode}
                    </div>
                        </>
                    :<>
                        <h5>Warning: Update shipping address</h5>
                    </>}
                </>
                :
                <>
                    Please login to continue order
                </>
            }
            
            
        </div>
    </>
  )
}

const capitalize = s => s && s.charAt(0).toUpperCase() + s.substring(1);

export default Shipping