export const Footer = () =>{
    return (
        <footer className="footer bg-dark pb-4 py-lg-5" data-bs-theme="dark">
        <div className="container pt-5 pt-lg-4 mt-sm-2 mt-md-3">
          <div className="row pb-5">
  
            {/* Subscription + Social account links */}
            <div className="col-md col-xl-8 order-md-2">
              <div className="text-center px-sm-4 mx-auto" style={{maxWidth: "568px"}}>
                <h3 className="pb-1 mb-2">Stay in touch with us</h3>
                <p className="fs-sm text-body pb-2 pb-sm-3">Receive the latest updates about our products &amp; promotions</p>
                <form className="needs-validation position-relative" noValidate>
                  <input type="email" className="form-control form-control-lg rounded-pill text-start" placeholder="You email" aria-label="Your email address" required/>
                  <div className="invalid-tooltip bg-transparent p-0">Please enter you email address!</div>
                  <button type="submit" className="btn btn-icon fs-xl btn-dark rounded-circle position-absolute top-0 end-0 mt-1 me-1" aria-label="Submit your email address" data-bs-theme="light">
                    <i className="ci-arrow-up-right"></i>
                  </button>
                </form>
                <div className="d-flex justify-content-center gap-2 pt-4 pt-md-5 mt-1 mt-md-0">
                  <a className="btn btn-icon fs-base btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip" data-bs-template='<div className="tooltip fs-xs mb-n2" role="tooltip"><div className="tooltip-inner bg-transparent text-white p-0"></div></div>' title="YouTube" aria-label="Follow us on YouTube">
                    <i className="ci-youtube"></i>
                  </a>
                  <a className="btn btn-icon fs-base btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip" data-bs-template='<div className="tooltip fs-xs mb-n2" role="tooltip"><div className="tooltip-inner bg-transparent text-white p-0"></div></div>' title="Facebook" aria-label="Follow us on Facebook">
                    <i className="ci-facebook"></i>
                  </a>
                  <a className="btn btn-icon fs-base btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip" data-bs-template='<div className="tooltip fs-xs mb-n2" role="tooltip"><div className="tooltip-inner bg-transparent text-white p-0"></div></div>' title="Instagram" aria-label="Follow us on Instagram">
                    <i className="ci-instagram"></i>
                  </a>
                  <a className="btn btn-icon fs-base btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip" data-bs-template='<div className="tooltip fs-xs mb-n2" role="tooltip"><div className="tooltip-inner bg-transparent text-white p-0"></div></div>' title="Telegram" aria-label="Follow us on Telegram">
                    <i className="ci-telegram"></i>
                  </a>
                  <a className="btn btn-icon fs-base btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip" data-bs-template='<div className="tooltip fs-xs mb-n2" role="tooltip"><div className="tooltip-inner bg-transparent text-white p-0"></div></div>' title="Pinterest" aria-label="Follow us on Pinterest">
                    <i className="ci-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
  
            {/* Category links */}
            <div className="col-md-auto col-xl-2 text-center order-md-1 pt-4 pt-md-0">
              <ul className="nav d-inline-flex flex-md-column justify-content-center align-items-center gap-md-2">
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Bedroom</a>
                </li>
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Living room</a>
                </li>
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Bathroom</a>
                </li>
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Decoration</a>
                </li>
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Kitchen</a>
                </li>
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Sale</a>
                </li>
              </ul>
            </div>
  
            {/* Customer links */}
            <div className="col-md-auto col-xl-2 text-center order-md-3 pt-3 pt-md-0">
              <ul className="nav d-inline-flex flex-md-column justify-content-center align-items-center gap-md-2">
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Shipping options</a>
                </li>
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Tracking a package</a>
                </li>
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Help center</a>
                </li>
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Contact us</a>
                </li>
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Product returns</a>
                </li>
                <li className="animate-underline my-1 mx-2 m-md-0">
                  <a className="nav-link d-inline-flex fw-normal p-0 animate-target" href="#!">Locations</a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <p className="fs-xs text-body text-center pt-lg-4 mt-n2 mt-md-0 mb-0">
            &copy; All rights reserved. Made by <span className="animate-underline"><a className="animate-target text-white text-decoration-none" href="https://createx.studio/" target="_blank" rel="noreferrer">Createx Studio</a></span>
          </p>
        </div>
      </footer>
    )
}