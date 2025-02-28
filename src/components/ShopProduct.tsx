import { Breadcrumbs } from "./generic/Breadcrums"
import { PopularProducts } from "./PopularProduct"

export const ShopProduct = () =>{
    return (
        <main className="content-wrapper">
            <div className="container">
                <Breadcrumbs item1="Home" item2="Shop" item3="Product page"/>
                {/* Product gallery and details */}
        <section className="row pb-4 pb-md-5 mb-2 mb-md-0 mb-xl-3">

          {/*  Gallery */}
          <div className="col-md-7 col-xl-8 pb-4 pb-md-0 mb-2 mb-sm-3 mb-md-0">
            <div className="row row-cols-2 g-3 g-sm-4 g-md-3 g-lg-4">
              <div className="col">
                <a className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden" href="assets/img/shop/furniture/product/01.png" data-glightbox data-gallery="product-gallery">
                  <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"></i>
                  <div className="ratio ratio-1x1 hover-effect-target">
                    <img src="assets/img/shop/furniture/product/01.png" alt="Image"/>
                  </div>
                </a>
              </div>
              <div className="col">
                <a className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden" href="assets/img/shop/furniture/product/02.jpg" data-glightbox data-gallery="product-gallery">
                  <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
                  <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"></i>
                  <div className="ratio ratio-1x1 hover-effect-target">
                    <img src="assets/img/shop/furniture/product/02.jpg" alt="Image"/>
                  </div>
                </a>
              </div>
              <div className="col-12">
                <div className="collapse d-md-block" id="morePictures">
                  <div className="row row-cols-2 g-3 g-sm-4 g-md-3 g-lg-4 pb-3 pb-sm-4 pb-md-0">
                    <div className="col">
                      <a className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden" href="assets/img/shop/furniture/product/03.jpg" data-glightbox data-gallery="product-gallery">
                        <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
                        <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"></i>
                        <div className="ratio ratio-1x1 hover-effect-target">
                          <img src="assets/img/shop/furniture/product/03.jpg" alt="Image"/>
                        </div>
                      </a>
                    </div>
                    <div className="col">
                      <a className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden" href="assets/img/shop/furniture/product/04.jpg" data-glightbox data-gallery="product-gallery">
                        <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
                        <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"></i>
                        <div className="ratio ratio-1x1 hover-effect-target">
                          <img src="assets/img/shop/furniture/product/04.jpg" alt="Image"/>
                        </div>
                      </a>
                    </div>
                    <div className="col">
                      <a className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden" href="assets/img/shop/furniture/product/05.jpg" data-glightbox data-gallery="product-gallery">
                        <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
                        <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"></i>
                        <div className="ratio ratio-1x1 hover-effect-target">
                          <img src="assets/img/shop/furniture/product/05.jpg" alt="Image"/>
                        </div>
                      </a>
                    </div>
                    <div className="col">
                      <a className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden" href="assets/img/shop/furniture/product/06.jpg" data-glightbox data-gallery="product-gallery">
                        <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
                        <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2"></i>
                        <div className="ratio ratio-1x1 hover-effect-target">
                          <img src="assets/img/shop/furniture/product/06.jpg" alt="Image"/>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-lg btn-outline-secondary w-100 collapsed d-md-none" data-bs-toggle="collapse" data-bs-target="#morePictures" data-label-collapsed="Show more pictures" data-label-expanded="Show less pictures" aria-expanded="false" aria-controls="morePictures" aria-label="Show / hide pictures">
                  <i className="collapse-toggle-icon ci-chevron-down fs-lg ms-2 me-n2"></i>
                </button>
              </div>
            </div>
          </div>


          {/*  Product details and options */}
          <div className="col-md-5 col-xl-4">
            <div className="d-none d-md-block" style={{marginTop: "-90px"}}></div>
            <div className="sticky-md-top ps-md-2 ps-xl-4">
              <div className="d-none d-md-block" style={{paddingTop: "90px"}}></div>
              <div className="fs-xs text-body-secondary mb-3">V00273124</div>
              <h1 className="fs-xl fw-medium">Chair with wooden legs 60x100 cm</h1>
              <div className="h4 fw-bold mb-4">$357.00 <del className="fs-sm fw-normal text-body-tertiary">$416.00</del></div>
              <ul className="list-unstyled fs-sm text-body-emphasis mb-4">
                <li>
                  <span className="me-1">Pay 4 interest-free payments of <span className="fw-semibold">$89.00</span> with</span>
                  <a className="d-inline-block" href="#!" aria-label="Afterpay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 360 129.6"><path d="M297.4 127.4H62.7C28 127.4 0 99.4 0 64.8h0C0 30.2 28 2.1 62.7 2.1h234.7c34.6 0 62.6 28 62.6 62.6h0c0 34.7-28 62.7-62.6 62.7z" fill="#b2fce4"/><path d="M306.8 49.8l-7.9-4.5-8-4.6c-5.3-3-11.9.8-11.9 6.9v1c0 .6.3 1.1.8 1.4l3.7 2.1c1 .6 2.3-.2 2.3-1.3v-2.4c0-1.2 1.3-2 2.3-1.4l7.3 4.2 7.3 4.2c1.1.6 1.1 2.1 0 2.7l-7.3 4.2-7.3 4.2c-1 .6-2.3-.2-2.3-1.4v-1.2c0-6.1-6.6-9.9-11.9-6.9l-8 4.6-7.9 4.5c-5.3 3-5.3 10.7 0 13.8l7.9 4.5 8 4.6c5.3 3 11.9-.8 11.9-6.9v-1c0-.6-.3-1.1-.8-1.4l-3.7-2.1c-1-.6-2.3.2-2.3 1.3v2.4c0 1.2-1.3 2-2.3 1.4l-7.3-4.2-7.3-4.2c-1.1-.6-1.1-2.1 0-2.7l7.3-4.2 7.3-4.2c1-.6 2.3.2 2.3 1.4v1.2c0 6.1 6.6 9.9 11.9 6.9l8-4.6 7.9-4.5c5.4-3.1 5.4-10.7 0-13.8zm-51.6 1.5l-18.5 38.1H229l6.9-14.2-10.8-23.9h7.9l7 16 7.6-16h7.6zM70.8 64.9c0-4.5-3.3-7.7-7.4-7.7S56 60.4 56 64.9c0 4.4 3.3 7.7 7.4 7.7s7.4-3.2 7.4-7.7m.1 13.5v-3.5c-2 2.4-5 3.9-8.5 3.9-7.4 0-13-5.9-13-14 0-8 5.8-14 13.2-14 3.5 0 6.4 1.5 8.4 3.9v-3.4h6.7v27h-6.8zm38.9-6c-2.3 0-3-.9-3-3.1v-12h4.3v-5.9h-4.3v-6.6H100v6.6h-8.8v-2.7c0-2.3.9-3.1 3.2-3.1H96v-5.2h-3.3c-5.6 0-8.3 1.8-8.3 7.5v3.6h-3.8v5.9h3.8v21.1h6.8V57.2h8.8v13.3c0 5.5 2.1 7.9 7.6 7.9h3.5v-6h-1.3zm24.5-10c-.5-3.5-3.4-5.6-6.7-5.6-3.4 0-6.1 2.1-6.8 5.6h13.5zm-13.6 4.2c.5 4 3.4 6.3 7 6.3 2.9 0 5.1-1.4 6.4-3.5h7c-1.6 5.7-6.8 9.4-13.5 9.4-8.2 0-13.9-5.7-13.9-13.9s6.1-14.1 14.1-14.1c8.1 0 13.9 5.9 13.9 14.1 0 .6-.1 1.2-.2 1.7h-20.8zm64.2-1.7c0-4.4-3.3-7.7-7.4-7.7s-7.4 3.2-7.4 7.7c0 4.4 3.3 7.7 7.4 7.7s7.4-3.4 7.4-7.7m-21.4 24.5V51.3h6.7v3.5c2-2.5 5-4 8.5-4 7.3 0 13 6 13 14s-5.8 14-13.2 14c-3.4 0-6.2-1.4-8.2-3.6v14.2h-6.8zm52.2-24.5c0-4.5-3.3-7.7-7.4-7.7s-7.4 3.2-7.4 7.7c0 4.4 3.3 7.7 7.4 7.7s7.4-3.2 7.4-7.7m.1 13.5v-3.5c-2 2.4-5 3.9-8.5 3.9-7.4 0-13-5.9-13-14 0-8 5.8-14 13.2-14 3.5 0 6.4 1.5 8.4 3.9v-3.4h6.7v27h-6.8zM151.5 54s1.7-3.1 5.8-3.1c1.8 0 2.9.6 2.9.6v6.9s-2.5-1.5-4.8-1.2-3.8 2.4-3.7 5.2v16h-6.9v-27h6.7V54z"/></svg>
                  </a>
                </li>
                <li>
                  <span className="me-1">We provide a <span className="fw-semibold">3-year warranty</span></span>
                  <svg className="text-body-emphasis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path fill-rule="evenodd" d="M22.287 10.967l-1.7-2c-.215-.254-.346-.568-.373-.9L20 5.46c-.029-.379-.193-.734-.462-1.002s-.625-.43-1.004-.458l-2.607-.213c-.332-.027-.646-.158-.9-.373l-2-1.7c-.288-.247-.654-.383-1.033-.383s-.746.136-1.033.383l-2 1.7c-.254.215-.568.346-.9.373L5.467 4c-.38.028-.737.191-1.006.461s-.433.626-.46 1.006l-.213 2.607c-.027.332-.158.646-.373.9l-1.7 2c-.247.288-.383.654-.383 1.033s.136.746.383 1.033l1.7 2c.215.254.346.568.373.9L4 18.547c.031.377.196.731.465.998s.624.428 1.002.456l2.607.213c.332.027.646.158.9.373l2 1.7c.288.247.654.383 1.033.383s.746-.136 1.033-.383l2-1.7c.254-.215.568-.346.9-.373L18.534 20c.38-.028.737-.191 1.006-.46s.433-.626.46-1.006l.213-2.607c.027-.332.158-.646.373-.9l1.7-2c.245-.287.38-.652.38-1.03s-.135-.743-.38-1.03zm-11.08 4.153l-2.96-2.96 1.127-1.127 1.833 1.827 3.42-3.42 1.127 1.127-4.547 4.553z"/></svg>
                </li>
              </ul>

              {/*  Color options */}
              <div className="mb-4">
                <label className="form-label fw-semibold pb-1 mb-2">Color: <span className="text-body fw-normal" id="colorOption">Viridian</span></label>
                <div className="d-flex flex-wrap gap-2" data-binded-label="#colorOption">
                  <input type="radio" className="btn-check" name="colors" id="viridian" checked/>
                  <label htmlFor="viridian" className="btn btn-image p-0" data-label="Viridian">
                    <img src="assets/img/shop/furniture/product/colors/color01.png" width="56" alt="Viridian color"/>
                    <span className="visually-hidden">Viridian</span>
                  </label>
                  <input type="radio" className="btn-check" name="colors" id="green"/>
                  <label htmlFor="green" className="btn btn-image p-0" data-label="Green">
                    <img src="assets/img/shop/furniture/product/colors/color02.png" width="56" alt="Green color"/>
                    <span className="visually-hidden">Green</span>
                  </label>
                  <input type="radio" className="btn-check" name="colors" id="blue"/>
                  <label htmlFor="blue" className="btn btn-image p-0" data-label="Blue">
                    <img src="assets/img/shop/furniture/product/colors/color03.png" width="56" alt="Blue color"/>
                    <span className="visually-hidden">Blue</span>
                  </label>
                </div>
              </div>

              {/*  Material select */}
              <div className="mb-4">
                <label className="form-label fw-semibold pb-1 mb-2">Material of the cover:</label>
                <select className="form-select form-select-lg rounded-pill" data-select='{
                  "classNames": {
                    "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
                  }
                }' aria-label="Material select">
                  <option value="">Choose a material</option>
                  <option value="natural">Natural fabric</option>
                  <option value="synthetic">Synthetic fabric</option>
                  <option value="leather">Leather</option>
                  <option value="cotton">Cotton</option>
                </select>
              </div>

              {/*  Add to cart + Wishlist buttons */}
              <div className="d-flex gap-3 pb-4 mb-2 mb-lg-3">
                <button type="button" className="btn btn-lg btn-dark w-100 rounded-pill">Add to cart</button>
                <button type="button" className="btn btn-icon btn-lg btn-secondary rounded-circle animate-pulse" aria-label="Add to Wishlist">
                  <i className="ci-heart fs-lg animate-target"></i>
                </button>
              </div>

              {/*  Shipping info */}
              <div className="mb-4">
                <h6 className="d-flex align-items-center fs-sm mb-2">
                  <i className="ci-delivery fs-lg me-2"></i>
                  Free shipping
                </h6>
                <div className="fs-sm">
                  <span className="me-1">Get it between May 24 - May 27 to</span>
                  <div className="dropdown d-inline-block">
                    <a className="dropdown-toggle animate-underline fs-sm fw-semibold text-body-emphasis text-decoration-none" href="#!" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="animate-target">Preston - 06365</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end text-body p-3">
                      Blackpool Road, 15<br/>06365, Preston, UK
                      <div className="h6 fs-sm pt-1 mb-0">Susan Gardner</div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Contact */}
              <div className="d-flex align-items-center justify-content-between bg-body-tertiary rounded p-3">
                <div className="me-3">
                  <h6 className="fs-sm mb-1">Have a question?</h6>
                  <p className="fs-sm mb-0">Contact us if you have questions</p>
                </div>
                <a className="btn btn-sm btn-outline-dark rounded-pill" href="contact-v2.html">Contact us</a>
              </div>
            </div>
          </div>
        </section>
        {/* Product description */}
        <section className="row pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
          <div className="col-md-7 col-xl-8 mb-xxl-3">
            <p>The chair will bring a stylish retro atmosphere to your room, inspired by the Scandinavian design. The classic look fits anywhere in your home and provides a sturdy and durable place to sit for years to come.</p>
            <ul className="list-unstyled pb-md-2 pb-lg-3">
              <li className="mt-1"><span className="h6 mb-0">Backrest height:</span> 46 cm</li>
              <li className="mt-1"><span className="h6 mb-0">Width:</span> 64 cm</li>
              <li className="mt-1"><span className="h6 mb-0">Depth:</span> 78 cm</li>
              <li className="mt-1"><span className="h6 mb-0">Height under furniture:</span> 22 cm</li>
              <li className="mt-1"><span className="h6 mb-0">Seat width:</span> 56 cm</li>
              <li className="mt-1"><span className="h6 mb-0">Armrest height:</span> 63 cm</li>
            </ul>

            <div className="accordion accordion-alt-icon" id="productAccordion">
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingProductInfo">
                  <button type="button" className="accordion-button animate-underline fs-xl collapsed" data-bs-toggle="collapse" data-bs-target="#productInfo" aria-expanded="false" aria-controls="productInfo">
                    <span className="animate-target me-2">Product info</span>
                  </button>
                </h3>
                <div className="accordion-collapse collapse" id="productInfo" aria-labelledby="headingProductInfo" data-bs-parent="#productAccordion">
                  <div className="accordion-body fs-base">Introducing our Scandinavian-inspired chair, meticulously designed to infuse your living space with a touch of retro elegance. Crafted with the finest materials and attention to detail, this chair embodies the timeless charm of Scandinavian design, making it a versatile addition to any home decor. With its classic silhouette and understated sophistication, it seamlessly integrates into various interior styles, bringing both style and functionality to your room.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingProductFeatures">
                  <button type="button" className="accordion-button animate-underline fs-xl collapsed" data-bs-toggle="collapse" data-bs-target="#productFeatures" aria-expanded="false" aria-controls="productFeatures">
                    <span className="animate-target me-2">Features</span>
                  </button>
                </h3>
                <div className="accordion-collapse collapse" id="productFeatures" aria-labelledby="headingProductFeatures" data-bs-parent="#productAccordion">
                  <div className="accordion-body fs-base">
                    <ul className="m-0">
                      <li><span className="text-body-emphasis fw-semibold">Timeless design:</span> Inspired by Scandinavian aesthetics, this chair boasts a sleek and retro-inspired silhouette that adds a touch of elegance to any space.</li>
                      <li><span className="text-body-emphasis fw-semibold">Durable construction:</span> Crafted with high-quality materials, the chair is built to last, providing sturdy and reliable seating for years to come.</li>
                      <li><span className="text-body-emphasis fw-semibold">Versatile placement:</span> Whether as a focal point in your living room, a cozy reading corner in your study, or an inviting seat around the dining table, this chair effortlessly adapts to different settings.</li>
                      <li><span className="text-body-emphasis fw-semibold">Comfortable seating:</span> The chair features a well-padded seat and backrest, ensuring optimal comfort for extended periods of relaxation or conversation.</li>
                      <li><span className="text-body-emphasis fw-semibold">Easy maintenance:</span> Designed for convenience, the chair's upholstery is easy to clean, allowing for hassle-free maintenance and care.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingProductWarranty">
                  <button type="button" className="accordion-button animate-underline fs-xl collapsed" data-bs-toggle="collapse" data-bs-target="#productWarranty" aria-expanded="false" aria-controls="productWarranty">
                    <span className="animate-target me-2">Warranty information</span>
                  </button>
                </h3>
                <div className="accordion-collapse collapse" id="productWarranty" aria-labelledby="headingProductWarranty" data-bs-parent="#productAccordion">
                  <div className="accordion-body fs-base">We stand behind the quality of our products. Our chair comes with a 10-year warranty, guaranteeing against defects in materials and workmanship under normal use. In the unlikely event that you encounter any issues with your chair, contact our customer service team, and we will be happy to assist you with a replacement or repair.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingProductDelivery">
                  <button type="button" className="accordion-button animate-underline fs-xl collapsed" data-bs-toggle="collapse" data-bs-target="#productDelivery" aria-expanded="false" aria-controls="productDelivery">
                    <span className="animate-target me-2">Delivery and shipping</span>
                  </button>
                </h3>
                <div className="accordion-collapse collapse" id="productDelivery" aria-labelledby="headingProductDelivery" data-bs-parent="#productAccordion">
                  <div className="accordion-body fs-base">We understand the importance of timely delivery and strive to provide a seamless shipping experience for our customers. Upon placing your order, our team will process it promptly, and you will receive a notification once your chair is ready for shipment. We offer various shipping options to accommodate your preferences, with estimated delivery times provided at checkout. Rest assured, your chair will be carefully packaged to ensure it arrives safely at your doorstep, ready to enhance your home with its timeless charm.</div>
                </div>
              </div>
            </div>
          </div>
        </section>     
            </div>
               {/* Popular prodducts */}
        <PopularProducts/>
        </main>
        
    )
}