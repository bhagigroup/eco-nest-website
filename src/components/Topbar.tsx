import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./generic/useAuth";

export const Topbar = () =>{
  const {logout} = useAuth();
  //redirect
const navigate = useNavigate();
  const handleLogout = ()=>{
    logout();
    navigate("/login");
  }
  const {user}=useAuth();
  
    return (        
        <div className="container position-relative d-flex justify-content-between z-1 py-3">
          <div className="nav animate-underline">
            <span className="text-secondary-emphasis fs-xs me-1">Contact us <span className="d-none d-sm-inline">24/7</span></span>
            <a className="nav-link animate-target fs-xs fw-semibold p-0" href="tel:+15053753082">+1&nbsp;50&nbsp;537&nbsp;53&nbsp;082</a>
          </div>
          <a className="text-secondary-emphasis fs-xs text-decoration-none d-none d-md-inline" href="#!">🔥 The Biggest Sale Ever 50% Off</a>
          <ul className="nav gap-4">
            <li className="animate-underline">
              <a className="nav-link animate-target fs-xs p-0" href="#!">Wishlist</a>
            </li>
            <li className="animate-underline">
              <a className="nav-link animate-target fs-xs p-0" href="#!">Account</a>
            </li>
            <li className="animate-underline">
              <Link className="nav-link animate-target fs-xs p-0" to="/account-orders">Orders</Link>
            </li>
            {user ?  <li className="animate-underline">
              <span className="nav-link animate-target fs-xs p-0" onClick={handleLogout}>Logout</span>
            </li> : <><li className="animate-underline">
              <Link className="nav-link animate-target fs-xs p-0" to="/login">Login</Link>
            </li>
            <li className="animate-underline">
              <Link className="nav-link animate-target fs-xs p-0" to="/signup">Signup</Link>
            </li></>}
            
     
            
          </ul>
        </div>
    )
}