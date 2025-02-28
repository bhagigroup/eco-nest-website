import { Link } from "react-router-dom"
import { Breadcrumbs } from "./generic/Breadcrums"
import { Filters } from "./generic/Filters"

export const Products = () =>{
    return (                
        <main className="content-wrapper">
      <div className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
      {/* Breadcrumb */}
      <Breadcrumbs item1="Home" item2="Catalog with filters on top"/>

        {/* Page title */}
        <h1 className="h3 position-relative pb-sm-2 pb-md-3 text-left" style={{zIndex: "1021"}}>Shop catalog</h1>
<Filters/>
        {/* Item */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-5" id="productGrid">
        <div className="col">
          <div className="animate-underline mb-sm-2">
            <Link className="hover-effect-opacity ratio ratio-1x1 d-block mb-3" to="/shop-product">
              <img src="assets/img/shop/furniture/01.png" className="hover-effect-target opacity-100" alt="Product"/>
              <img src="assets/img/shop/furniture/01-hover.jpg" className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4" alt="Room"/>
            </Link>
            <div className="d-flex gap-2 mb-3">
              <input type="radio" className="btn-check" name="colors-1" id="color-1-1" checked/>
              <label htmlFor="color-1-1" className="btn btn-color fs-base" style={{color: "#32808e"}}>
                <span className="visually-hidden">Emerald</span>
              </label>
              <input type="radio" className="btn-check" name="colors-1" id="color-1-2"/>
              <label htmlFor="color-1-2" className="btn btn-color fs-base" style={{color: "#767e93"}}>
                <span className="visually-hidden">Bluish gray</span>
              </label>
              <input type="radio" className="btn-check" name="colors-1" id="color-1-3"/>
              <label htmlFor="color-1-3" className="btn btn-color fs-base" style={{color: "#cd8d01"}}>
                <span className="visually-hidden">Mustard</span>
              </label>
            </div>
            <h3 className="mb-2">
              <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-furniture.html">
                <span className="animate-target">Soft chair with cushion and wooden legs</span>
              </a>
            </h3>
            <div className="h6">$245.00</div>
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-dark w-100 rounded-pill px-3">Add to cart</button>
              <button type="button" className="btn btn-icon btn-secondary rounded-circle animate-pulse" aria-label="Add to wishlist">
                <i className="ci-heart fs-base animate-target"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Item */}
        <div className="col">
          <div className="animate-underline mb-sm-2">
            <a className="hover-effect-opacity ratio ratio-1x1 d-block mb-3" href="shop-product-furniture.html">
              <img src="assets/img/shop/furniture/02.png" className="hover-effect-target opacity-100" alt="Product"/>
              <img src="assets/img/shop/furniture/02-hover.jpg" className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4" alt="Room"/>
            </a>
            <div className="d-flex gap-2 mb-3">
              <input type="radio" className="btn-check" name="colors-2" id="color-2-1" checked/>
              <label htmlFor="color-2-1" className="btn btn-color fs-base" style={{color: "#6a6f7b"}}>
                <span className="visually-hidden">Gray</span>
              </label>
              <input type="radio" className="btn-check" name="colors-2" id="color-2-2"/>
              <label htmlFor="color-2-2" className="btn btn-color fs-base" style={{color: "#373b42"}}>
                <span className="visually-hidden">Dark gray</span>
              </label>
              <input type="radio" className="btn-check" name="colors-2" id="color-2-3"/>
              <label htmlFor="color-2-3" className="btn btn-color fs-base" style={{color: "#216aae"}}>
                <span className="visually-hidden">Blue</span>
              </label>
              <input type="radio" className="btn-check" name="colors-2" id="color-2-4"/>
              <label htmlFor="color-2-4" className="btn btn-color fs-base" style={{color: "#187c1c"}}>
                <span className="visually-hidden">Green</span>
              </label>
            </div>
            <h3 className="mb-2">
              <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-furniture.html">
                <span className="animate-target">Decorative flowerpot with a plant</span>
              </a>
            </h3>
            <div className="h6">$107.50</div>
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-dark w-100 rounded-pill px-3">Add to cart</button>
              <button type="button" className="btn btn-icon btn-secondary rounded-circle animate-pulse" aria-label="Add to wishlist">
                <i className="ci-heart fs-base animate-target"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Item */}
        <div className="col">
          <div className="animate-underline mb-sm-2">
            <a className="hover-effect-opacity ratio ratio-1x1 d-block mb-3" href="shop-product-furniture.html">
              <img src="assets/img/shop/furniture/03.png" className="hover-effect-target opacity-100" alt="Product"/>
              <img src="assets/img/shop/furniture/03-hover.jpg" className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4" alt="Room"/>
            </a>
            <div className="d-flex gap-2 mb-3">
              <input type="radio" className="btn-check" name="colors-3" id="color-3-1" checked/>
              <label htmlFor="color-3-1" className="btn btn-color fs-base" style={{color: "#a36540"}}>
                <span className="visually-hidden">Brown</span>
              </label>
              <input type="radio" className="btn-check" name="colors-3" id="color-3-2"/>
              <label htmlFor="color-3-2" className="btn btn-color fs-base" style={{color: "#f8d7b5"}}>
                <span className="visually-hidden">Beige</span>
              </label>
              <input type="radio" className="btn-check" name="colors-3" id="color-3-3"/>
              <label htmlFor="color-3-3" className="btn btn-color fs-base" style={{color: "#e0e5eb"}}>
                <span className="visually-hidden">White</span>
              </label>
            </div>
            <h3 className="mb-2">
              <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-furniture.html">
                <span className="animate-target">Home fragrance with the aroma of spices</span>
              </a>
            </h3>
            <div className="h6">$24.00</div>
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-dark w-100 rounded-pill px-3">Add to cart</button>
              <button type="button" className="btn btn-icon btn-secondary rounded-circle animate-pulse" aria-label="Add to wishlist">
                <i className="ci-heart fs-base animate-target"></i>
              </button>
            </div>
          </div>
        </div>
       

        {/* Item */}
        <div className="col">
          <div className="animate-underline mb-sm-2">
            <a className="hover-effect-opacity ratio ratio-1x1 d-block mb-3" href="shop-product-furniture.html">
              <img src="assets/img/shop/furniture/16.png" className="hover-effect-target opacity-100" alt="Product"/>
              <img src="assets/img/shop/furniture/16-hover.jpg" className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4" alt="Room"/>
            </a>
            <div className="d-flex gap-2 mb-3">
              <input type="radio" className="btn-check" name="colors-16" id="color-16-1" checked/>
              <label htmlFor="color-16-1" className="btn btn-color fs-base" style={{color: "#b2b8c0"}}>
                <span className="visually-hidden">Light gray</span>
              </label>
              <input type="radio" className="btn-check" name="colors-16" id="color-16-2"/>
              <label htmlFor="color-16-2" className="btn btn-color fs-base" style={{color: "#6a6662"}}>
                <span className="visually-hidden">Dark gray</span>
              </label>
            </div>
            <h3 className="mb-2">
              <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-furniture.html">
                <span className="animate-target">Soft armchair with wooden legs</span>
              </a>
            </h3>
            <div className="h6">$215.00</div>
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-dark w-100 rounded-pill px-3">Add to cart</button>
              <button type="button" className="btn btn-icon btn-secondary rounded-circle animate-pulse" aria-label="Add to wishlist">
                <i className="ci-heart fs-base animate-target"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="text-center pt-5 mt-md-2 mt-lg-3 mt-xl-4 mb-xxl-3 mx-auto" style={{maxWidth: "306px"}}>
          <p className="fs-sm">Showing 16 from 64</p>
          <div className="progress mb-3" role="progressbar" aria-label="Items shown" aria-valueNow="25" aria-valueMin="0" aria-valueMax="100" style={{height: "4px"}}>
            <div className="progress-bar bg-dark rounded-pill d-none-dark" style={{width: "25%"}}></div>
            <div className="progress-bar bg-light rounded-pill d-none d-block-dark" style={{width: "25%"}}></div>
          </div>
          <div className="nav justify-content-center">
            <a className="nav-link animate-underline fs-base pt-2 pb-0 px-0" href="#!">
              <span className="animate-target my-1 me-2">Show more</span>
              <i className="ci-chevron-down fs-lg"></i>
            </a>
          </div>
        </div>
      </div>
      </main>
    )
}