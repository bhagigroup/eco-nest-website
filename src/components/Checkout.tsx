import { useEffect, useState } from "react";
import { Breadcrumbs } from "./generic/Breadcrums"
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { formatPrice } from "../utility/formatCurrency";

//product quantity data types
interface ItemList{
  productId:string;
  orderQuantity:number;
}
interface ProductQuantity{
  id:string;
  itemList:ItemList;
  userId:string;
}

declare global{
  interface Window{
    Razorpay:any;
  }
}
export const Checkout = () =>{
  const [searchParams] = useSearchParams(); 
  const productId = searchParams.get("id1");//get the id from URL 
  const variantId = searchParams.get("id2");
  const userId = searchParams.get("id3");

  //store updated product quantity
  const [updatedProductQuantity, setUpdatedProductQuantity] = useState<ProductQuantity>();
    //import server URL from .env file
    const serverUrl = process.env.REACT_APP_SERVER_URL;  
    //store product data
    const [orderData, setOrderData] = useState<any>();
    //handle product quantity change
    const handleQuantityChange = async(id:string,delta:number)=>{
      const updatedProductQuantity = orderData?.itemList?.map((product:any)=>product?.productId === id ?
      {...product,orderQuantity:product?.orderQuantity+delta}:product);          
    setOrderData((prevState:any)=>({...prevState, itemList:updatedProductQuantity}))
    //save updated products
    // setUpdatedProductQuantity((prev)=>{
    //   const existing = prev.find((ext)=>ext?.id===id)
    // });
      // try{
      //   const response = await axios.post(`${serverUrl}/cms/api/v1/order/add-to-cart`,productQuantity)                             
      // }
      // catch(err:any){
      //   console.log("Failed to get data", err?.message)
      // }
    }
    //fetch product data
    const handleFetchProductData = async() =>{
      if(productId && variantId && userId){
        try{
          const payload = {
            "productId": productId,
            "variantId": variantId,
            "quantity": 1,
            "userId":userId,
            "cartId":""
        }
          const response = await axios.post(`${serverUrl}/cms/api/v1/order/add-to-cart`,payload)              
          setOrderData(response?.data)        
        }
        catch(err:any){
          console.log("Failed to get data", err?.message)
        }
      }else if(userId){
        try{

          const response = await axios.get(`${serverUrl}/cms/api/v1/order/get-cart-details/${userId}`)   ;
          // const response = await axios.get(`${serverUrl}/cms/api/v1/order/get-order-history/${userId}`)               
          setOrderData(response?.data)        
        }
        catch(err:any){
          console.log("Failed to get data", err?.message)
        }
      }
      
    }
    
    //actions added in following useeffect hook will be executed, when component mounted
    useEffect(()=>{      
      handleFetchProductData();           
    },[]);
    const navigate = useNavigate();
    //handle proceed to checkout
    const handleProceedToCheckout = async()=>{      
      try{
await fetch(`${serverUrl}/cms/api/v1/order/create-order?amount=1000&currency=INR`, {
  method: 'POST'
})
  .then(response => response.json())
  .then(order => {
      const options = {
          key: "rzp_test_IbLXsFqHioZSwO", // Replace with your Razorpay API Key
          amount: order.amount, // Amount in paise
          currency: order.currency,
          name: "Your Company",
          description: "Test Transaction",
          order_id: order.id,
          handler: function (response:any) {
              alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
          },
          theme: {
              color: "#3399cc"
          }
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
  })
  .catch(err => console.error(err));

        const payload = {
          "cartId": orderData?.id,          
          "address": null,
    "paymentMode": "online",
    "deliverySlot": null
      }
        const response = await axios.post(`${serverUrl}/cms/api/v1/order/place-order`,payload)
        response?.status === 200 && navigate(`/account-orders`);                       
      }
      catch(err:any){
        console.log("Failed to place order", err?.message)
      }
    }

    
   return (
    <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        <Breadcrumbs item1="Home" item2="Shop" item3="Cart"/>
    <h1 className="h3 mb-4">Shopping cart</h1>
    <div className="row">

      {/* Items list */}
      <div className="col-lg-8">
        <div className="pe-lg-2 pe-xl-3 me-xl-3">
          <p className="fs-sm">Buy <span className="text-dark-emphasis fw-semibold">$183</span> more to get <span className="text-dark-emphasis fw-semibold">Free Shipping</span></p>
          <div className="progress w-100 overflow-visible mb-4" role="progressbar" aria-label="Free shipping progress" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{height: "4px"}}>
            <div className="progress-bar bg-warning rounded-pill position-relative overflow-visible" style={{width: "75%", height: "4px"}}>
              <div className="position-absolute top-50 end-0 d-flex align-items-center justify-content-center translate-middle-y bg-body border border-warning rounded-circle me-n1" style={{width: "1.5rem", height: "1.5rem"}}>
                <i className="ci-star-filled text-warning"></i>
              </div>
            </div>
          </div>

          {/* Table of items */}
          <table className="table position-relative z-2 mb-4">
            <thead>
              <tr>
                <th scope="col" className="fs-sm fw-normal py-3 ps-0"><span className="text-body">Product</span></th>
                <th scope="col" className="text-body fs-sm fw-normal py-3 d-none d-xl-table-cell"><span className="text-body">Price</span></th>
                <th scope="col" className="text-body fs-sm fw-normal py-3 d-none d-md-table-cell"><span className="text-body">Quantity</span></th>
                <th scope="col" className="text-body fs-sm fw-normal py-3 d-none d-md-table-cell"><span className="text-body">Total</span></th>
                <th scope="col" className="py-0 px-0">
                  <div className="nav justify-content-end">
                    <button type="button" className="nav-link d-inline-block text-decoration-underline text-nowrap py-3 px-0">Clear cart</button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="align-middle">

              {/* Item */}
              {orderData?.itemList?.map((data:any)=>(
                <tr>
                <td className="py-3 ps-0">
                  <div className="d-flex align-items-center">
                    <a className="flex-shrink-0" href="shop-product-general-electronics.html">
                      <img src={data?.image?.fileUrl} width="110" alt={data?.productName}/>
                    </a>
                    <div className="w-100 min-w-0 ps-2 ps-xl-3">
                      <h5 className="d-flex animate-underline mb-2">
                        <a className="d-block fs-sm fw-medium text-truncate animate-target" href="shop-product-general-electronics.html">{data?.productName}</a>
                      </h5>
                      <ul className="list-unstyled gap-1 fs-xs mb-0">
                        {/* <li><span className="text-body-secondary">Color:</span> <span className="text-dark-emphasis fw-medium">White</span></li>
                        <li><span className="text-body-secondary">Model:</span> <span className="text-dark-emphasis fw-medium">128GB</span></li> */}
                        <li className="d-xl-none"><span className="text-body-secondary">Price:</span> <span className="text-dark-emphasis fw-medium">{formatPrice(data?.subTotal)}</span></li>
                      </ul>
                      <div className="count-input rounded-2 d-md-none mt-3">
                        <button type="button" className="btn btn-sm btn-icon" onClick={()=>handleQuantityChange(data?.productId,-1)} disabled={data?.orderQuantity<=1} aria-label="Decrement quantity">
                          <i className="ci-minus"></i>
                        </button>
                        <input type="number" className="form-control form-control-sm" value={data?.orderQuantity} readOnly/>
                        <button type="button" className="btn btn-sm btn-icon" onClick={()=>handleQuantityChange(data?.productId,1)} aria-label="Increment quantity">
                          <i className="ci-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="h6 py-3 d-none d-xl-table-cell">{formatPrice(data?.subTotal)}</td>
                <td className="py-3 d-none d-md-table-cell">
                  <div className="count-input">
                    <button type="button" className="btn btn-icon" onClick={()=>handleQuantityChange(data?.productId,-1)} disabled={data?.orderQuantity<=1} aria-label="Decrement quantity">
                      <i className="ci-minus"></i>
                    </button>
                    <input type="number" className="form-control" value={data?.orderQuantity} readOnly/>
                    <button type="button" className="btn btn-icon" onClick={()=>handleQuantityChange(data?.productId,1)} aria-label="Increment quantity">
                      <i className="ci-plus"></i>
                    </button>
                  </div>
                </td>
                <td className="h6 py-3 d-none d-md-table-cell">{formatPrice(data?.subTotal)}</td>
                <td className="text-end py-3 px-0">
                  <button type="button" className="btn-close fs-sm" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" data-bs-title="Remove" aria-label="Remove from cart"></button>
                </td>
              </tr>
              ))}            
            </tbody>
          </table>

          <div className="nav position-relative z-2 mb-4 mb-lg-0">
            <a className="nav-link animate-underline px-0" href="shop-catalog-electronics.html">
              <i className="ci-chevron-left fs-lg me-1"></i>
              <span className="animate-target">Continue shopping</span>
            </a>
          </div>
        </div>
      </div>


      {/* Order summary (sticky sidebar) */}
      <aside className="col-lg-4" style={{marginTop: "-100px"}}>
        <div className="position-sticky top-0" style={{paddingTop: "100px"}}>
          <div className="bg-body-tertiary rounded-5 p-4 mb-3">
            <div className="p-sm-2 p-lg-0 p-xl-2">
              <h5 className="border-bottom pb-4 mb-4">Order summary</h5>
              <ul className="list-unstyled fs-sm gap-3 mb-0">
                <li className="d-flex justify-content-between">
                  Subtotal `{orderData?.itemList?.length}` items:
                  <span className="text-dark-emphasis fw-medium">{formatPrice(orderData?.total)}</span>
                </li>
                <li className="d-flex justify-content-between">
                  Saving:
                  <span className="text-danger fw-medium">-$110.00</span>
                </li>
                <li className="d-flex justify-content-between">
                  Tax collected:
                  <span className="text-dark-emphasis fw-medium">$73.40</span>
                </li>
                <li className="d-flex justify-content-between">
                  Shipping:
                  <span className="text-dark-emphasis fw-medium">Calculated at checkout</span>
                </li>
              </ul>
              <div className="border-top pt-4 mt-4">
                <div className="d-flex justify-content-between mb-3">
                  <span className="fs-sm">Estimated total:</span>
                  <span className="h5 mb-0">{formatPrice(orderData?.total)}</span>
                </div>
                <a className="btn btn-lg btn-primary w-100" onClick={handleProceedToCheckout}>
                  Proceed to checkout
                  <i className="ci-chevron-right fs-lg ms-1 me-n1"></i>
                </a>
                <div className="nav justify-content-center fs-sm mt-3">
                  <a className="nav-link text-decoration-underline p-0 me-1" href="#authForm" data-bs-toggle="offcanvas" role="button">Create an account</a>
                  and get
                  <span className="text-dark-emphasis fw-medium ms-1">239 bonuses</span>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion bg-body-tertiary rounded-5 p-4">
            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="promoCodeHeading">
                <button type="button" className="accordion-button animate-underline collapsed py-0 ps-sm-2 ps-lg-0 ps-xl-2" data-bs-toggle="collapse" data-bs-target="#promoCode" aria-expanded="false" aria-controls="promoCode">
                  <i className="ci-percent fs-xl me-2"></i>
                  <span className="animate-target me-2">Apply promo code</span>
                </button>
              </h3>
              <div className="accordion-collapse collapse" id="promoCode" aria-labelledby="promoCodeHeading">
                <div className="accordion-body pt-3 pb-2 ps-sm-2 px-lg-0 px-xl-2">
                  <form className="needs-validation d-flex gap-2" noValidate>
                    <div className="position-relative w-100">
                      <input type="text" className="form-control" placeholder="Enter promo code" required/>
                      <div className="invalid-tooltip bg-transparent py-0">Enter a valid promo code!</div>
                    </div>
                    <button type="submit" className="btn btn-dark">Apply</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
   )
}