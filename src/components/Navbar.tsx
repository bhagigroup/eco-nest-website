import { Link } from "react-router-dom"

export const Navbar = () =>{
    return (
        // Navigation bar (Page header)
        <header className="navbar-sticky sticky-top container z-fixed px-2" data-sticky-element>
          <div className="navbar navbar-expand-lg flex-nowrap bg-body rounded-pill shadow ps-0 mx-1">
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark rounded-pill z-0 d-none d-block-dark"></div>
    
            {/* Mobile offcanvas menu toggler (Hamburger) */}
            <button type="button" className="navbar-toggler ms-3" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    
            {/* Navbar brand (Logo) */}
            <Link className="navbar-brand position-relative z-1 ms-4 ms-sm-5 ms-lg-4 me-2 me-sm-0 me-lg-3" to="/">Cartzilla</Link>
    
            {/* Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
            <nav className="offcanvas offcanvas-start" id="navbarNav" tabIndex={-1} aria-labelledby="navbarNavLabel">
              <div className="offcanvas-header py-3">
                <h5 className="offcanvas-title" id="navbarNavLabel">Browse Cartzilla</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body pt-3 pb-4 py-lg-0 mx-lg-auto">
                <ul className="navbar-nav position-relative">
                  <li className="nav-item dropdown me-lg-n1 me-xl-0">
                    <a className="nav-link dropdown-toggle fs-sm active" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Home</a>
                    {/* <ul className="dropdown-menu" style={{--cz-dropdown-spacer: 1rem}}> */}
                    <ul className="dropdown-menu">
                      <li className="hover-effect-opacity px-2 mx-n2">
                        <a className="dropdown-item d-block mb-0" href="home-electronics.html">
                          <span className="fw-medium">Electronics Store</span>
                          <span className="d-block fs-xs text-body-secondary">Megamenu + Hero slider</span>
                          <div className="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2">
                          {/* style={{width: "212px"; height: calc(100% + 2px); marginTop: "-1px}} */}
                            <img className="position-relative z-2 d-none-dark" src="assets/img/mega-menu/demo-preview/electronics-light.jpg" alt="Electronics Store" />
                            <img className="position-relative z-2 d-none d-block-dark" src="assets/img/mega-menu/demo-preview/electronics-dark.jpg" alt="Electronics Store"/>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style={{boxShadow: ".875rem .5rem 2rem -.5rem #676f7b", opacity: ".1"}}></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style={{boxShadow: ".875rem .5rem 1.875rem -.5rem #080b12", opacity: ".25"}}></span>
                          </div>
                        </a>
                      </li>
                      <li className="hover-effect-opacity px-2 mx-n2">
                        <a className="dropdown-item d-block mb-0" href="home-fashion-v1.html">
                          <span className="fw-medium">Fashion Store v.1</span>
                          <span className="d-block fs-xs text-body-secondary">Hero promo slider</span>
                          <div className="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style={{width: "212px", height: "calc(100% + 2px)", marginTop: "-1px"}}>
                            <img className="position-relative z-2 d-none-dark" src="assets/img/mega-menu/demo-preview/fashion-1-light.jpg" alt="Fashion Store v.1"/>
                            <img className="position-relative z-2 d-none d-block-dark" src="assets/img/mega-menu/demo-preview/fashion-1-dark.jpg" alt="Fashion Store v.1"/>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style={{boxShadow: ".875rem .5rem 2rem -.5rem #676f7b", opacity: ".1"}}></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style={{boxShadow: ".875rem .5rem 1.875rem -.5rem #080b12", opacity: ".25"}}></span>
                          </div>
                        </a>
                      </li>
                      <li className="hover-effect-opacity px-2 mx-n2">
                        <a className="dropdown-item d-block mb-0" href="home-fashion-v2.html">
                          <span className="fw-medium">Fashion Store v.2</span>
                          <span className="d-block fs-xs text-body-secondary">Hero banner with hotspots</span>
                          <div className="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style={{width: "212px", height: "calc(100% + 2px)", marginTop: "-1px"}}>
                            <img className="position-relative z-2 d-none-dark" src="assets/img/mega-menu/demo-preview/fashion-2-light.jpg" alt="Fashion Store v.2"/>
                            <img className="position-relative z-2 d-none d-block-dark" src="assets/img/mega-menu/demo-preview/fashion-2-dark.jpg" alt="Fashion Store v.2"/>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style={{boxShadow: ".875rem .5rem 2rem -.5rem #676f7b", opacity: ".1"}}></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style={{boxShadow: ".875rem .5rem 1.875rem -.5rem #080b12", opacity: ".25"}}></span>
                          </div>
                        </a>
                      </li>
                      <li className="hover-effect-opacity px-2 mx-n2">
                        <a className="dropdown-item d-block mb-0" href="home-furniture.html">
                          <span className="fw-medium">Furniture Store</span>
                          <span className="d-block fs-xs text-body-secondary">Fancy product carousel</span>
                          <div className="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style={{width: "212px", height: "calc(100% + 2px)", marginTop: "-1px"}}>
                            <img className="position-relative z-2 d-none-dark" src="assets/img/mega-menu/demo-preview/furniture-light.jpg" alt="Furniture Store"/>
                            <img className="position-relative z-2 d-none d-block-dark" src="assets/img/mega-menu/demo-preview/furniture-dark.jpg" alt="Furniture Store"/>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style={{boxShadow: ".875rem .5rem 2rem -.5rem #676f7b", opacity: ".1"}}></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style={{boxShadow: ".875rem .5rem 1.875rem -.5rem #080b12", opacity: ".25"}}></span>
                          </div>
                        </a>
                      </li>
                      <li className="hover-effect-opacity px-2 mx-n2">
                        <a className="dropdown-item d-block mb-0" href="home-grocery.html">
                          <span className="fw-medium">Grocery Store</span>
                          <span className="d-block fs-xs text-body-secondary">Hero slider + Category cards</span>
                          <div className="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style={{width: "212px", height: "calc(100% + 2px)", marginTop: "-1px"}}>
                            <img className="position-relative z-2 d-none-dark" src="assets/img/mega-menu/demo-preview/grocery-light.jpg" alt="Grocery Store"/>
                            <img className="position-relative z-2 d-none d-block-dark" src="assets/img/mega-menu/demo-preview/grocery-dark.jpg" alt="Grocery Store"/>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style={{boxShadow: ".875rem .5rem 2rem -.5rem #676f7b", opacity: ".1"}}></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style={{boxShadow: ".875rem .5rem 1.875rem -.5rem #080b12", opacity: ".25"}}></span>
                          </div>
                        </a>
                      </li>
                      <li className="hover-effect-opacity px-2 mx-n2">
                        <a className="dropdown-item d-block mb-0" href="home-marketplace.html">
                          <span className="fw-medium">Marketplace</span>
                          <span className="d-block fs-xs text-body-secondary">Multi-vendor, digital goods</span>
                          <div className="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style={{width: "212px", height: "calc(100% + 2px)", marginTop: "-1px"}}>
                            <img className="position-relative z-2 d-none-dark" src="assets/img/mega-menu/demo-preview/marketplace-light.jpg" alt="Marketplace"/>
                            <img className="position-relative z-2 d-none d-block-dark" src="assets/img/mega-menu/demo-preview/marketplace-dark.jpg" alt="Marketplace"/>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style={{boxShadow: ".875rem .5rem 2rem -.5rem #676f7b", opacity: ".1"}}></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style={{boxShadow: ".875rem .5rem 1.875rem -.5rem #080b12", opacity: ".25"}}></span>
                          </div>
                        </a>
                      </li>
                      <li className="hover-effect-opacity px-2 mx-n2">
                        <a className="dropdown-item d-block mb-0" href="home-single-store.html">
                          <span className="fw-medium">Single Product Store</span>
                          <span className="d-block fs-xs text-body-secondary">Single product / mono brand</span>
                          <div className="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style={{width: "212px", height: "calc(100% + 2px)", marginTop: "-1px"}}>
                            <img className="position-relative z-2 d-none-dark" src="assets/img/mega-menu/demo-preview/single-store-light.jpg" alt="Single Product Store"/>
                            <img className="position-relative z-2 d-none d-block-dark" src="assets/img/mega-menu/demo-preview/single-store-dark.jpg" alt="Single Product Store"/>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style={{boxShadow: ".875rem .5rem 2rem -.5rem #676f7b", opacity: ".1"}}></span>
                            <span className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style={{boxShadow: ".875rem .5rem 1.875rem -.5rem #080b12", opacity: ".25"}}></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown position-static me-lg-n1 me-xl-0">
                    <a className="nav-link dropdown-toggle fs-sm" href="#" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Shop</a>
                    <div className="dropdown-menu p-4">
                    {/* <div className="dropdown-menu p-4" style="--cz-dropdown-spacer: 1rem"> */}
                      <div className="d-flex flex-column flex-lg-row gap-4">
                        <div style={{minWidth: "190px"}}>
                          <div className="h6 mb-2">Electronics Store</div>
                          <ul className="nav flex-column gap-2 mt-0">
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-categories-electronics.html">Categories Page</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <Link className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" to="/products">Catalog with Side Filters</Link>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-general-electronics.html">Product General Info</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-details-electronics.html">Product Details</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-reviews-electronics.html">Product Reviews</a>
                            </li>
                          </ul>
                          <div className="h6 pt-4 mb-2">Fashion Store</div>
                          <ul className="nav flex-column gap-2 mt-0">
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-fashion.html">Catalog with Side Filters</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-fashion.html">Product Page</a>
                            </li>
                          </ul>
                          <div className="h6 pt-4 mb-2">Furniture Store</div>
                          <ul className="nav flex-column gap-2 mt-0">
                            <li className="d-flex w-100 pt-1">
                            <Link className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" to="/products">Catalog with Top Filters</Link>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-furniture.html">Product Page</a>
                            </li>
                          </ul>
                        </div>
                        <div style={{minWidth: "190px"}}>
                          <div className="h6 mb-2">Grocery Store</div>
                          <ul className="nav flex-column gap-2 mt-0">
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Catalog with Side Filters</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-grocery.html">Product Page</a>
                            </li>
                          </ul>
                          <div className="h6 pt-4 mb-2">Marketplace</div>
                          <ul className="nav flex-column gap-2 mt-0">
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-marketplace.html">Catalog with Top Filters</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-marketplace.html">Digital Product Page</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-marketplace.html">Cart / Checkout</a>
                            </li>
                          </ul>
                        </div>
                        <div style={{minWidth: "190px"}}>
                          <div className="h6 mb-2">Checkout v.1</div>
                          <ul className="nav flex-column gap-2 mt-0">
                            <li className="d-flex w-100 pt-1">
                              <Link className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" to="/checkout">Shopping Cart</Link>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-delivery-1.html">Delivery Info (Step 1)</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-delivery-2.html">Delivery Info (Step 2)</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-shipping.html">Shipping Address</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-payment.html">Payment</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-thankyou.html">Thank You Page</a>
                            </li>
                          </ul>
                          <div className="h6 pt-4 mb-2">Checkout v.2</div>
                          <ul className="nav flex-column gap-2 mt-0">
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-cart.html">Shopping Cart</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-delivery.html">Delivery Info</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-pickup.html">Pickup from Store</a>
                            </li>
                            <li className="d-flex w-100 pt-1">
                              <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-thankyou.html">Thank You Page</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown me-lg-n1 me-xl-0">
                    <a className="nav-link dropdown-toggle fs-sm" href="#" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" data-bs-auto-close="outside" aria-expanded="false">Account</a>
                    <ul className="dropdown-menu">
                    {/* <ul className="dropdown-menu" style="--cz-dropdown-spacer: 1rem"> */}
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Auth Pages</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="account-signin.html">Sign In</a></li>
                          <li><a className="dropdown-item" href="account-signup.html">Sign Up</a></li>
                          <li><a className="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Shop User</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="account-orders.html">Orders History</a></li>
                          <li><a className="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
                          <li><a className="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                          <li><a className="dropdown-item" href="account-reviews.html">My Reviews</a></li>
                          <li><a className="dropdown-item" href="account-info.html">Personal Info</a></li>
                          <li><a className="dropdown-item" href="account-addresses.html">Addresses</a></li>
                          <li><a className="dropdown-item" href="account-notifications.html">Notifications</a></li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Marketplace User</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="account-marketplace-dashboard.html">Dashboard</a></li>
                          <li><a className="dropdown-item" href="account-marketplace-products.html">Products</a></li>
                          <li><a className="dropdown-item" href="account-marketplace-sales.html">Sales</a></li>
                          <li><a className="dropdown-item" href="account-marketplace-payouts.html">Payouts</a></li>
                          <li><a className="dropdown-item" href="account-marketplace-purchases.html">Purchases</a></li>
                          <li><a className="dropdown-item" href="account-marketplace-favorites.html">Favorites</a></li>
                          <li><a className="dropdown-item" href="account-marketplace-settings.html">Settings</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown me-lg-n1 me-xl-0">
                    <a className="nav-link dropdown-toggle fs-sm" href="#" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" data-bs-auto-close="outside" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                    {/* <ul className="dropdown-menu" style="--cz-dropdown-spacer: 1rem"> */}
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">About</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="about-v1.html">About v.1</a></li>
                          <li><a className="dropdown-item" href="about-v2.html">About v.2</a></li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Blog</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="blog-grid-v1.html">Grid View v.1</a></li>
                          <li><a className="dropdown-item" href="blog-grid-v2.html">Grid View v.2</a></li>
                          <li><a className="dropdown-item" href="blog-list.html">List View</a></li>
                          <li><a className="dropdown-item" href="blog-single-v1.html">Single Post v.1</a></li>
                          <li><a className="dropdown-item" href="blog-single-v2.html">Single Post v.2</a></li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Contact</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="contact-v1.html">Contact v.1</a></li>
                          <li><a className="dropdown-item" href="contact-v2.html">Contact v.2</a></li>
                          <li><a className="dropdown-item" href="contact-v3.html">Contact v.3</a></li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Help Center</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="help-topics-v1.html">Help Topics v.1</a></li>
                          <li><a className="dropdown-item" href="help-topics-v2.html">Help Topics v.2</a></li>
                          <li><a className="dropdown-item" href="help-single-article-v1.html">Help Single Article v.1</a></li>
                          <li><a className="dropdown-item" href="help-single-article-v2.html">Help Single Article v.2</a></li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">404 Error</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="404-electronics.html">404 Electronics</a></li>
                          <li><a className="dropdown-item" href="404-fashion.html">404 Fashion</a></li>
                          <li><a className="dropdown-item" href="404-furniture.html">404 Furniture</a></li>
                          <li><a className="dropdown-item" href="404-grocery.html">404 Grocery</a></li>
                        </ul>
                      </li>
                      <li><a className="dropdown-item" href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
                    </ul>
                  </li>
          
                </ul>
              </div>
            </nav>
    
            {/* Button group */}
            <div className="d-flex gap-sm-1 position-relative z-1">
    
              {/* Theme switcher (light/dark/auto) */}
              <div className="dropdown">
                <button type="button" className="theme-switcher btn btn-icon btn-outline-secondary fs-lg border-0 rounded-circle animate-scale" data-bs-toggle="dropdown" data-bs-display="dynamic" aria-expanded="false" aria-label="Toggle theme (light)">
                  <span className="theme-icon-active d-flex animate-target">
                    <i className="ci-sun"></i>
                  </span>
                </button>
                <ul className="dropdown-menu start-50 translate-middle-x">
                {/* <ul className="dropdown-menu start-50 translate-middle-x" style="--cz-dropdown-min-width: 9rem; --cz-dropdown-spacer: 1rem"> */}
                  <li>
                    <button type="button" className="dropdown-item active" data-bs-theme-value="light" aria-pressed="true">
                      <span className="theme-icon d-flex fs-base me-2">
                        <i className="ci-sun"></i>
                      </span>
                      <span className="theme-label">Light</span>
                      <i className="item-active-indicator ci-check ms-auto"></i>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" data-bs-theme-value="dark" aria-pressed="false">
                      <span className="theme-icon d-flex fs-base me-2">
                        <i className="ci-moon"></i>
                      </span>
                      <span className="theme-label">Dark</span>
                      <i className="item-active-indicator ci-check ms-auto"></i>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" data-bs-theme-value="auto" aria-pressed="false">
                      <span className="theme-icon d-flex fs-base me-2">
                        <i className="ci-auto"></i>
                      </span>
                      <span className="theme-label">Auto</span>
                      <i className="item-active-indicator ci-check ms-auto"></i>
                    </button>
                  </li>
                </ul>
              </div>
    
              {/* Cart button */}
              <button type="button" className="btn btn-icon fs-lg btn-outline-secondary border-0 rounded-circle animate-scale me-2" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart" aria-label="Shopping cart">
                <i className="ci-shopping-cart animate-target"></i>
              </button>
    
              {/* Search */}
              <div className="dropdown">
                <button type="button" className="btn btn-icon fs-lg btn-secondary rounded-circle animate-scale" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-label="Toggle search bar">
                  <i className="ci-search animate-target"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end p-3">
                {/* <div className="dropdown-menu dropdown-menu-end p-3" style="--cz-dropdown-min-width: 20rem; --cz-dropdown-spacer: 1rem"> */}
                  <form className="position-relative">
                    <input type="search" className="form-control rounded-pill" placeholder="Search..." data-autofocus="dropdown"/>
                    <button type="submit" className="btn btn-icon btn-sm fs-lg btn-secondary rounded-circle position-absolute top-0 end-0 mt-1 me-1" aria-label="Search">
                      <i className="ci-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        
        </header>
    )
}