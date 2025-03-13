import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () =>{
  //redirect
  const navigate = useNavigate();
  //import server URL from .env file
  const serverUrl = process.env.REACT_APP_SERVER_URL;  
  //store form data
  const [formData, setFormData] = useState({
    "username": "",
    "password": "",
    "mobile": "",
    "fullname": ""
  });
  //handle form input change
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  //handle login api request
  const handleSubmit = async(e:React.FormEvent) =>{
    e.preventDefault();
    try{      
      const response = await axios.post(`${serverUrl}/cms/auth/signup`,formData,{
        withCredentials:true,//important for cookies
      });
      if(response?.status===200){
        navigate("/login");//redirect to login page after successful sign up
      }                         
    }
    catch(err:any){
      console.log("Failed to create account", err?.message)
    }
  }   
    return <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{maxWidth: "1920px"}}>
    <div className="d-lg-flex">

      {/* Login form + Footer */}
      <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto" style={{maxWidth: "416px"}}>

        {/* Logo */}
        <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
          <a href="index.html" className="navbar-brand pt-0">
            <span className="d-flex flex-shrink-0 text-primary me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path d="M36 18.01c0 8.097-5.355 14.949-12.705 17.2a18.12 18.12 0 0 1-5.315.79C9.622 36 2.608 30.313.573 22.611.257 21.407.059 20.162 0 18.879v-1.758c.02-.395.059-.79.099-1.185.099-.908.277-1.817.514-2.686C2.687 5.628 9.682 0 18 0c5.572 0 10.551 2.528 13.871 6.517 1.502 1.797 2.648 3.91 3.359 6.201.494 1.659.771 3.436.771 5.292z" fill="currentColor"/><g fill="#fff"><path d="M17.466 21.624c-.514 0-.988-.316-1.146-.829-.198-.632.138-1.303.771-1.501l7.666-2.469-1.205-8.254-13.317 4.621a1.19 1.19 0 0 1-1.521-.75 1.19 1.19 0 0 1 .751-1.521l13.89-4.818c.553-.197 1.166-.138 1.64.158a1.82 1.82 0 0 1 .85 1.284l1.344 9.183c.138.987-.494 1.994-1.482 2.33l-7.864 2.528-.375.04zm7.31.138c-.178-.632-.85-1.007-1.482-.81l-5.177 1.58c-2.331.79-3.28.02-3.418-.099l-6.56-8.412a4.25 4.25 0 0 0-4.406-1.758l-3.122.987c-.237.889-.415 1.777-.514 2.686l4.228-1.363a1.84 1.84 0 0 1 1.857.81l6.659 8.551c.751.948 2.015 1.323 3.359 1.323.909 0 1.857-.178 2.687-.474l5.078-1.54c.632-.178 1.008-.829.81-1.481z"/><use href="#czlogo"/><use href="#czlogo" x="8.516" y="-2.172"/></g><defs><path id="czlogo" d="M18.689 28.654a1.94 1.94 0 0 1-1.936 1.935 1.94 1.94 0 0 1-1.936-1.935 1.94 1.94 0 0 1 1.936-1.935 1.94 1.94 0 0 1 1.936 1.935z"/></defs></svg>
            </span>
            Cartzilla
          </a>
        </header>

        <h1 className="h2 mt-auto">Create an account</h1>
        <div className="nav fs-sm mb-3 mb-lg-4">
          I already have an account
          <a className="nav-link text-decoration-underline p-0 ms-2" href="account-signin.html">Sign in</a>
        </div>
        <div className="nav fs-sm mb-4 d-lg-none">
          <span className="me-2">Uncertain about creating an account?</span>
          <a className="nav-link text-decoration-underline p-0" href="#benefits" data-bs-toggle="offcanvas" aria-controls="benefits">Explore the Benefits</a>
        </div>

        {/* Form */}
        <form className="needs-validation" onSubmit={handleSubmit}>
        <div className="position-relative mb-4">
            <label htmlFor="usernameInput" className="form-label">Username</label>
            <input type="text" className="form-control form-control-lg" name="username" onChange={handleChange} id="usernameInput" required/>
            <div className="invalid-tooltip bg-transparent py-0">Enter a valid Username!</div>
          </div>
          <div className="mb-4">
            <label htmlFor="registerPassword" className="form-label">Password</label>
            <div className="password-toggle">
              <input type="password" className="form-control form-control-lg" name="password" onChange={handleChange} id="registerPassword" minLength={8} placeholder="Minimum 8 characters" required/>              
              <div className="invalid-tooltip bg-transparent py-0">Password does not meet the required criteria!</div>
              <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
                <input type="checkbox" className="btn-check"/>
              </label>
            </div>
          </div>
          <div className="position-relative mb-4">
            <label htmlFor="mobileNumberInput" className="form-label">Mobile Number</label>
            <input type="text" className="form-control form-control-lg" id="mobileNumberInput" name="mobile" onChange={handleChange} required/>
            <div className="invalid-tooltip bg-transparent py-0">Enter a valid mobile number!</div>
          </div>
          <div className="position-relative mb-4">
            <label htmlFor="fullNameInput" className="form-label">Full Name</label>
            <input type="text" className="form-control form-control-lg" id="fullNameInput" name="fullname" onChange={handleChange} required/>
            <div className="invalid-tooltip bg-transparent py-0">Enter a valid Name!</div>
          </div>
 
          <div className="d-flex flex-column gap-2 mb-4">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="save-pass"/>
              <label htmlFor="save-pass" className="form-check-label">Save the password</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="privacy" required/>
              <label htmlFor="privacy" className="form-check-label">I have read and accept the <a className="text-dark-emphasis" href="#!">Privacy Policy</a></label>
            </div>
          </div>
          <button type="submit" className="btn btn-lg btn-primary w-100">
            Create an account
            <i className="ci-chevron-right fs-lg ms-1 me-n1"></i>
          </button>
        </form>

        {/* Divider */}
        <div className="d-flex align-items-center my-4">
          <hr className="w-100 m-0"/>
          <span className="text-body-emphasis fw-medium text-nowrap mx-4">or continue with</span>
          <hr className="w-100 m-0"/>
        </div>

        {/* Social login */}
        <div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
          <button type="button" className="btn btn-lg btn-outline-secondary w-100 px-2">
            <i className="ci-google ms-1 me-1"></i>
            Google
          </button>
          <button type="button" className="btn btn-lg btn-outline-secondary w-100 px-2">
            <i className="ci-facebook ms-1 me-1"></i>
            Facebook
          </button>
          <button type="button" className="btn btn-lg btn-outline-secondary w-100 px-2">
            <i className="ci-apple ms-1 me-1"></i>
            Apple
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-auto">
          <div className="nav mb-4">
            <a className="nav-link text-decoration-underline p-0" href="help-topics-v1.html">Need help?</a>
          </div>
          <p className="fs-xs mb-0">
            &copy; All rights reserved. Made by <span className="animate-underline"><a className="animate-target text-dark-emphasis text-decoration-none" href="https://createx.studio/" target="_blank" rel="noreferrer">Createx Studio</a></span>
          </p>
        </footer>
      </div>


      {/* Benefits section that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
      {/* <div className="offcanvas-lg offcanvas-end w-100 py-lg-4 ms-auto" id="benefits" style={{maxWidth: "1034px"}}>
        <div className="offcanvas-header justify-content-end position-relative z-2 p-3">
          <button type="button" className="btn btn-icon btn-outline-dark text-dark border-dark bg-transparent rounded-circle d-none-dark" data-bs-dismiss="offcanvas" data-bs-target="#benefits" aria-label="Close">
            <i className="ci-close fs-lg"></i>
          </button>
          <button type="button" className="btn btn-icon btn-outline-dark text-light border-light bg-transparent rounded-circle d-none d-inline-flex-dark" data-bs-dismiss="offcanvas" data-bs-target="#benefits" aria-label="Close">
            <i className="ci-close fs-lg"></i>
          </button>
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-lg-none">
          <span className="position-absolute top-0 start-0 w-100 h-100 d-none-dark" style={{background: "linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)"}}></span>
          <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" style={{background: "linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)"}}></span>
        </div>
        <div className="offcanvas-body position-relative z-2 d-lg-flex flex-column align-items-center justify-content-center h-100 pt-2 px-3 p-lg-0">
          <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block">
            <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark" style="background: linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)"></span>
            <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark" style="background: linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)"></span>
          </div>
          <div className="position-relative z-2 w-100 text-center px-md-2 p-lg-5">
            <h2 className="h4 pb-3">Cartzilla account benefits</h2>
            <div className="mx-auto" style={{maxWidth: "790px"}}>
              <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4 g-lg-3 g-xl-4">
                <div className="col">
                  <div className="card h-100 bg-transparent border-0">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-25 border border-white border-opacity-50 rounded-4 d-none-dark"></span>
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style="--cz-bg-opacity: .05"></span>
                    <div className="card-body position-relative z-2">
                      <div className="d-inline-flex position-relative text-info p-3">
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                        <i className="ci-mail position-relative z-2 fs-4 m-1"></i>
                      </div>
                      <h3 className="h6 pt-2 my-2">Subscribe to your favorite products</h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 bg-transparent border-0">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-25 border border-white border-opacity-50 rounded-4 d-none-dark"></span>
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style="--cz-bg-opacity: .05"></span>
                    <div className="card-body position-relative z-2">
                      <div className="d-inline-flex position-relative text-info p-3">
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                        <i className="ci-settings position-relative z-2 fs-4 m-1"></i>
                      </div>
                      <h3 className="h6 pt-2 my-2">View and manage your orders and wishlist</h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 bg-transparent border-0">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-25 border border-white border-opacity-50 rounded-4 d-none-dark"></span>
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style="--cz-bg-opacity: .05"></span>
                    <div className="card-body position-relative z-2">
                      <div className="d-inline-flex position-relative text-info p-3">
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                        <i className="ci-gift position-relative z-2 fs-4 m-1"></i>
                      </div>
                      <h3 className="h6 pt-2 my-2">Earn rewards for future purchases</h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 bg-transparent border-0">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-25 border border-white border-opacity-50 rounded-4 d-none-dark"></span>
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style="--cz-bg-opacity: .05"></span>
                    <div className="card-body position-relative z-2">
                      <div className="d-inline-flex position-relative text-info p-3">
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                        <i className="ci-percent position-relative z-2 fs-4 m-1"></i>
                      </div>
                      <h3 className="h6 pt-2 my-2">Receive exclusive offers and discounts</h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 bg-transparent border-0">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-25 border border-white border-opacity-50 rounded-4 d-none-dark"></span>
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style="--cz-bg-opacity: .05"></span>
                    <div className="card-body position-relative z-2">
                      <div className="d-inline-flex position-relative text-info p-3">
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                        <i className="ci-heart position-relative z-2 fs-4 m-1"></i>
                      </div>
                      <h3 className="h6 pt-2 my-2">Create multiple wishlists</h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 bg-transparent border-0">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-25 border border-white border-opacity-50 rounded-4 d-none-dark"></span>
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark" style="--cz-bg-opacity: .05"></span>
                    <div className="card-body position-relative z-2">
                      <div className="d-inline-flex position-relative text-info p-3">
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark"></span>
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark"></span>
                        <i className="ci-pie-chart position-relative z-2 fs-4 m-1"></i>
                      </div>
                      <h3 className="h6 pt-2 my-2">Pay for purchases by installments</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </main>
}
export default SignUp;