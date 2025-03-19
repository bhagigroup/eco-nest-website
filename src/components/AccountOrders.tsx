import axios from "axios";
import { useEffect, useState } from "react";
import { formatPrice } from "../utility/formatCurrency";

const AccountOrders = () =>{
    //import server URL from .env file
    const serverUrl = process.env.REACT_APP_SERVER_URL;  
    //store product data
    const [orderHistoryData, setOrderHistoryData] = useState<any>();
    const userId = localStorage.getItem("userId");
    //fetch product data
    const handleFetchOrderDetails = async() =>{
      try{       
        const response = await axios.get(`${serverUrl}/cms/api/v1/order/get-order-history/${userId}`)              
        setOrderHistoryData(response?.data?.data)        
      }
      catch(err:any){
        console.log("Failed to get order details", err?.message)
      }
    }
    
    //actions added in following useeffect hook will be executed, when component mounted
    useEffect(()=>{      
        handleFetchOrderDetails();           
    },[]);
        
    return (
        //  Body (Navigation)
        <main className="content-wrapper">
      <div className="container py-5 mt-n2 mt-sm-0">
        <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">

                  <aside className="col-lg-3">
            <div className="offcanvas-lg offcanvas-start pe-lg-0 pe-xl-4" id="accountSidebar">

              {/* Header */}
              <div className="offcanvas-header d-lg-block py-3 p-lg-0">
                <div className="d-flex align-items-center">
                  <div className="h5 d-flex justify-content-center align-items-center flex-shrink-0 text-primary bg-primary-subtle lh-1 rounded-circle mb-0" style={{width: "3rem", height: "3rem"}}>S</div>
                  <div className="min-w-0 ps-3">
                    <h5 className="h6 mb-1">Susan Gardner</h5>
                    <div className="nav flex-nowrap text-nowrap min-w-0">
                      <a className="nav-link animate-underline text-body p-0" href="#bonusesModal" data-bs-toggle="modal">
                        <svg className="text-warning flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z"/><path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z"/><path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z"/></svg>
                        <span className="animate-target me-1">100 bonuses</span>
                        <span className="text-body fw-normal text-truncate">available</span>
                      </a>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn-close d-lg-none" data-bs-dismiss="offcanvas" data-bs-target="#accountSidebar" aria-label="Close"></button>
              </div>

           
           
        <div className="offcanvas-body d-block pt-2 pt-lg-4 pb-lg-0">
          <nav className="list-group list-group-borderless">
            <a className="list-group-item list-group-item-action d-flex align-items-center pe-none active" href="account-orders.html">
              <i className="ci-shopping-bag fs-base opacity-75 me-2"></i>
              Orders
              <span className="badge bg-primary rounded-pill ms-auto">1</span>
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center" href="account-wishlist.html">
              <i className="ci-heart fs-base opacity-75 me-2"></i>
              Wishlist
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center" href="account-payment.html">
              <i className="ci-credit-card fs-base opacity-75 me-2"></i>
              Payment methods
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center" href="account-reviews.html">
              <i className="ci-star fs-base opacity-75 me-2"></i>
              My reviews
            </a>
          </nav>
          <h6 className="pt-4 ps-2 ms-1">Manage account</h6>
          <nav className="list-group list-group-borderless">
            <a className="list-group-item list-group-item-action d-flex align-items-center" href="account-info.html">
              <i className="ci-user fs-base opacity-75 me-2"></i>
              Personal info
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center" href="account-addresses.html">
              <i className="ci-map-pin fs-base opacity-75 me-2"></i>
              Addresses
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center" href="account-notifications.html">
              <i className="ci-bell fs-base opacity-75 mt-1 me-2"></i>
              Notifications
            </a>
          </nav>
          <h6 className="pt-4 ps-2 ms-1">Customer service</h6>
          <nav className="list-group list-group-borderless">
            <a className="list-group-item list-group-item-action d-flex align-items-center" href="help-topics-v1.html">
              <i className="ci-help-circle fs-base opacity-75 me-2"></i>
              Help center
            </a>
            <a className="list-group-item list-group-item-action d-flex align-items-center" href="terms-and-conditions.html">
              <i className="ci-info fs-base opacity-75 me-2"></i>
              Terms and conditions
            </a>
          </nav>
          <nav className="list-group list-group-borderless pt-3">
            <a className="list-group-item list-group-item-action d-flex align-items-center" href="account-signin.html">
              <i className="ci-log-out fs-base opacity-75 me-2"></i>
              Log out
            </a>
          </nav>
        </div>
        </div>
        </aside>
    <div className="col-lg-9">
    <div className="ps-lg-3 ps-xl-0">

      {/* Page title + Sorting selects */}
      <div className="row align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2">
        <div className="col-md-4 col-xl-6 mb-3 mb-md-0">
          <h1 className="h2 me-3 mb-0">Orders</h1>
        </div>
        <div className="col-md-8 col-xl-6">
          <div className="row row-cols-1 row-cols-sm-2 g-3 g-xxl-4">
            <div className="col">
              <select className="form-select" data-select='{
                "placeholderValue": "Select status",
                "choices": [
                  {
                    "value": "",
                    "label": "Select status",
                    "placeholder": true
                  },
                  {
                    "value": "inprogress",
                    "label": "<div className=\"d-flex align-items-center text-nowrap\"><span className=\"bg-info rounded-circle p-1 me-2\"></span>In progress</div>"
                  },
                  {
                    "value": "delivered",
                    "label": "<div className=\"d-flex align-items-center text-nowrap\"><span className=\"bg-success rounded-circle p-1 me-2\"></span>Delivered</div>"
                  },
                  {
                    "value": "canceled",
                    "label": "<div className=\"d-flex align-items-center text-nowrap\"><span className=\"bg-danger rounded-circle p-1 me-2\"></span>Canceled</div>"
                  },
                  {
                    "value": "delayed",
                    "label": "<div className=\"d-flex align-items-center text-nowrap\"><span className=\"bg-warning rounded-circle p-1 me-2\"></span>Delayed</div>"
                  }
                ]
              }' data-select-template="true" aria-label="Status sorting"></select>
            </div>
            <div className="col">
              <select className="form-select" data-select='{"removeItemButton": false}' aria-label="Timeframe sorting">
                <option value="all-time">For all time</option>
                <option value="last-year">For last year</option>
                <option value="last-3-months">For last 3 months</option>
                <option value="last-30-days">For last 30 days</option>
                <option value="last-week">For last week</option>
              </select>
            </div>
          </div>
        </div>
      </div>


      {/* Sortable orders table */}
      <div data-filter-list='{"listClass": "orders-list", "sortClass": "orders-sort", "valueNames": ["date", "total"]}'>
        <table className="table align-middle fs-sm text-nowrap">
          <thead>
            <tr>
              <th scope="col" className="py-3 ps-0">
                <span className="text-body fw-normal">Order <span className="d-none d-md-inline">#</span></span>
              </th>
              <th scope="col" className="py-3 d-none d-md-table-cell">
                <button type="button" className="btn orders-sort fw-normal text-body p-0" data-sort="date">Order date</button>
              </th>
              <th scope="col" className="py-3 d-none d-md-table-cell">
                <span className="text-body fw-normal">Status</span>
              </th>
              <th scope="col" className="py-3 d-none d-md-table-cell">
                <button type="button" className="btn orders-sort fw-normal text-body p-0" data-sort="total">Total</button>
              </th>
              <th scope="col" className="py-3">&nbsp;</th>
            </tr>
          </thead>
          <tbody className="text-body-emphasis orders-list">

            {/* Item */}
            <tr>
              <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                  <span className="animate-target">78A6431D409</span>
                </a>
                <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                  <li>Feb 6, 2025</li>
                  <li className="d-flex align-items-center">
                    <span className="bg-info rounded-circle p-1 me-2"></span>
                    In progress
                  </li>
                  <li className="fw-medium text-body-emphasis">$2,105.90</li>
                </ul>
              </td>
              <td className="fw-medium py-3 d-none d-md-table-cell">
                Feb 6, 2025
                <span className="date d-none">25-02-06</span>
              </td>
              <td className="fw-medium py-3 d-none d-md-table-cell">
                <span className="d-flex align-items-center">
                  <span className="bg-info rounded-circle p-1 me-2"></span>
                  In progress
                </span>
              </td>
              <td className="fw-medium py-3 d-none d-md-table-cell">
                $2,105.90
                <span className="total d-none">210590</span>
              </td>
              <td className="py-3 pe-0">
                <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                  <span><img src="assets/img/shop/electronics/thumbs/20.png" width="64" alt="Thumbnail"/></span>
                  <span><img src="assets/img/shop/electronics/thumbs/16.png" width="64" alt="Thumbnail"/></span>
                  <span><img src="assets/img/shop/electronics/thumbs/15.png" width="64" alt="Thumbnail"/></span>
                  <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                    <i className="ci-chevron-right fs-lg"></i>
                  </a>
                </span>
              </td>
            </tr>

            {/* Item */}
            <tr>
              <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                  <span className="animate-target">47H76G09F33</span>
                </a>
                <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                  <li>Dec 12, 2024</li>
                  <li className="d-flex align-items-center">
                    <span className="bg-success rounded-circle p-1 me-2"></span>
                    Delivered
                  </li>
                  <li className="fw-medium text-body-emphasis">$360.75</li>
                </ul>
              </td>
              <td className="fw-medium py-3 d-none d-md-table-cell">
                Dec 12, 2024
                <span className="date d-none">24-12-12</span>
              </td>
              <td className="fw-medium py-3 d-none d-md-table-cell">
                <span className="d-flex align-items-center">
                  <span className="bg-success rounded-circle p-1 me-2"></span>
                  Delivered
                </span>
              </td>
              <td className="fw-medium py-3 d-none d-md-table-cell">
                $360.75
                <span className="total d-none">36075</span>
              </td>
              <td className="py-3 pe-0">
                <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                  <span><img src="assets/img/shop/electronics/thumbs/14.png" width="64" alt="Thumbnail"/></span>
                  <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails" aria-label="Show order details">
                    <i className="ci-chevron-right fs-lg"></i>
                  </a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* Pagination */}
      <nav className="pt-3 pb-2 pb-sm-0 mt-2 mt-md-3" aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item active" aria-current="page">
            <span className="page-link">
              1
              <span className="visually-hidden">(current)</span>
            </span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">4</a>
          </li>
        </ul>
      </nav>
    </div>
  </div></div></div>
  
  {/* Order details offcanvas */}
    <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2" id="orderDetails" tabIndex={-1} aria-labelledby="orderDetailsLabel" style={{width: "500px"}}>

      {/* Header */}
      <div className="offcanvas-header align-items-start py-3 pt-lg-4">
        <div>
          <h4 className="offcanvas-title mb-1" id="orderDetailsLabel">Order # 78A6431D409</h4>
          <span className="d-flex align-items-center fs-sm fw-medium text-body-emphasis">
            <span className="bg-info rounded-circle p-1 me-2"></span>
            In progress
          </span>
        </div>
        <button type="button" className="btn-close mt-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      {/* Body */}
      <div className="offcanvas-body d-flex flex-column gap-4 pt-2 pb-3">

        {/* Items */}
        <div className="d-flex flex-column gap-3">

          {/* Item */}
          {orderHistoryData?.orderItems?.map((orderItem:any)=>(
            <div className="d-flex align-items-center">
            <a className="flex-shrink-0" href="shop-product-general-electronics.html">
              <img src={orderItem?.image?.fileUrl} width="110" alt={orderItem?.image?.fileName}/>
            </a>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <h5 className="d-flex animate-underline mb-2">
                <a className="d-block fs-sm fw-medium text-truncate animate-target" href="shop-product-general-electronics.html">{orderItem?.productName}</a>
              </h5>
              <div className="h6 mb-2">{formatPrice(orderItem?.subTotal)}</div>
              <div className="fs-xs">Qty: {orderItem?.orderQuantity}</div>
            </div>
          </div>
          ))}
          

        </div>


        {/* Delivery + Payment info */}
        <div className="border-top pt-4">
          <h6>Delivery</h6>
          <ul className="list-unstyled fs-sm mb-4">
            <li className="d-flex justify-content-between mb-1">
              Estimated delivery date:
              <span className="text-body-emphasis fw-medium text-end ms-2">Feb 8, 2025 / 10:00 - 12:00</span>
            </li>
            <li className="d-flex justify-content-between mb-1">
              Shipping method:
              <span className="text-body-emphasis fw-medium text-end ms-2">Courier delivery</span>
            </li>
            <li className="d-flex justify-content-between">
              Shipping address:
              <span className="text-body-emphasis fw-medium text-end ms-2">567 Cherry Lane Apt B12,<br/>Harrisburg</span>
            </li>
          </ul>
          <h6>Payment</h6>
          <ul className="list-unstyled fs-sm m-0">
            <li className="d-flex justify-content-between mb-1">
              Payment method:
              <span className="text-body-emphasis fw-medium text-end ms-2">Cash on delivery </span>
            </li>
            <li className="d-flex justify-content-between mb-1">
              Tax collected:
              <span className="text-body-emphasis fw-medium text-end ms-2">$12.40</span>
            </li>
            <li className="d-flex justify-content-between">
              Shipping:
              <span className="text-body-emphasis fw-medium text-end ms-2">$26.50</span>
            </li>
          </ul>
        </div>

        {/* Total */}
        <div className="d-flex align-items-center justify-content-between fs-sm border-top pt-4">
          Estimated total:
          <span className="h5 text-end ms-2 mb-0">$2,105.90</span>
        </div>
      </div>

      {/* Footer */}
      <div className="offcanvas-header">
        <a className="btn btn-lg btn-secondary w-100" href="#!">Change the delivery time</a>
      </div>
    </div></main>)
}

export default AccountOrders;