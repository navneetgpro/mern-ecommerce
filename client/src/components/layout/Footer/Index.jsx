const Index = () => {
  const year = new Date().getFullYear()
  return (
    <>
<footer className="text-center text-lg-start bg-light text-muted">

    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Diy Market
          </h6>
          <p>
            This is just a simple ecommerce store, build with the help of reactjs and nodejs.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Brands
          </h6>
          <p>
            <a href="#!" className="text-reset">Apple</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Microsoft</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Hp</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Lenevo</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Contact Us</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Sell With Us</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Shipping</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Uttar pradesh, India</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            diymarketofficial@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> +91 9876543210</p>
          <p><i className="fas fa-print me-3"></i> +91 9876543210</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © {year} Copyright:
    <a className="text-reset fw-bold" href="/#">Diy Market</a>
  </div>
</footer>
    </>
  )
}

export default Index