import { useState, useEffect } from 'react';
import nouser from '../../images/png/no_user.png';

const initialState = {
  name:'',
  email:'',
  avatar:nouser,
}

const Profile = ({ user }) => {
  const [userData, setUserData] = useState(initialState);
  const { name, email, avatar } = userData;
  useEffect(() => {
    if(user){
      setUserData({
        name: user.name,
        email: user.email,
        avatar: user.avatar
      });
    }
  }, [user]);

  return (
    <>
        <div className="text-center">
        <img src={avatar} alt="avatar"
            className="rounded-circle img-fluid" style={{width: '150px'}} />
        <h5 className="my-3">{capitalize(name)}</h5>
        <p className="text-muted mb-1">{email}</p>
        </div>
    </>
  )
}

const capitalize = s => s && s.charAt(0).toUpperCase() + s.substring(1);

export default Profile