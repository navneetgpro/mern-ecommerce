import Item from './Item'

const Cart = ({ items,itemcount }) => {
  return (
    <>
        <h5 className="mb-3"><a href="#!" className="text-body"><i
            className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
        <hr/>

        <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
            <p className="mb-1">Shopping cart</p>
            <p className="mb-0">You have {itemcount} items in your cart</p>
        </div>
        <div>
            <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
        </div>
        </div>
        {itemcount>0?
        <>
        {items.map(item => <Item key={item._id} item={item}/>)}
        </>:<h4>You don't have any items in your cart</h4>
        }
    </>
  )
}

export default Cart