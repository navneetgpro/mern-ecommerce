import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import mainBanner from '../../images/jpeg/main-banner.jpg'

const Banner = () => {
  const [qData, setqData] = useState(null);
  const navigate = useNavigate();
  const onSubmit = e => {
    e.preventDefault();
    navigate("/search/product?q="+qData)
  }
  const onChange = e => {
    setqData(e.target.value);
  }
  return (
    <>
        <div className="container banner-image" style={bannerImg}>
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-8">
                    <form onSubmit={e => onSubmit(e)}>
                    <div className="search">
                    <i className="fa fa-search"><BsSearch /></i>
                    <input type="text" name='q' onChange={onChange} className="form-control" placeholder="Search Product by name" required />
                    <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

var bannerImg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mainBanner})`
}

export default Banner