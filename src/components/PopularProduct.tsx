import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper/modules";
import "swiper/css/navigation";
import { popularProducts } from '../config/data';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { formatPrice } from '../utility/formatCurrency';
export const PopularProducts = () =>{
   //router navigate or redirect
   const navigate = useNavigate();
  //  const [searchParams] = useSearchParams(); 
  //  const selectedCategoryId = searchParams.get("id1");//get the id from URL 
  //  const selectedCategoryId2 = searchParams.get("id2");
 
     //import server URL from .env file
     const serverUrl = process.env.REACT_APP_SERVER_URL;  
     //store product data
     const [popularProductsData, setPopularProductsData] = useState<any>();
     //fetch product data
     const handleFetchProductData = async() =>{
       try{
         const payload = {
           "name": "",
           "categoryId": "",
           "subCategoryId": "",
           "isPopular":"true"
       }
         const response = await axios.post(`${serverUrl}/cms/api/v1/product/products-by-filter`,payload)              
         await setPopularProductsData(response?.data)  
              
       }
       catch(err:any){
         console.log("Failed to get product data", err?.message)
       }
     }    
     //actions added in following useeffect hook will be executed, when component mounted
     useEffect(()=>{
       
       handleFetchProductData();   
       
     },[]);
     const handleCheckoutNavigation=(productId:string,variantId:string,userId:string)=>{
      navigate(`/checkout/${productId}/${variantId}/${userId}`)
    }
    return (
        <section className="container pb-5 mt-md-n2 mb-2 mb-sm-3 mb-md-4 mb-xl-5">

        {/* Heading */}
        <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
          <h2 className="h3 mb-0">Popular products</h2>
          <div className="nav ms-3">
            <a className="nav-link animate-underline px-0 py-2" href="shop-catalog-furniture.html">
              <span className="animate-target">View all</span>
              <i className="ci-chevron-right fs-base ms-1"></i>
            </a>
          </div>
        </div>

        {/* Product carousel */}
        <div className="position-relative pb-xxl-3">

      
          {/* Slider */}
          <Swiper
                  modules={[Navigation]}                  
                  speed={600}
                  breakpoints={{
                    320:{slidesPerView:1, slidesPerGroup:1},
                    768:{slidesPerView:2, slidesPerGroup:1},
                    1024:{slidesPerView:4, slidesPerGroup:1},                    
                  }}                          
                    navigation
                    loop={true}
                    className='pt-3 pt-sm-4'
                >
              {/* slides */}

                {popularProductsData?.map((product:any) => (
                                    <SwiperSlide key={product?.id}>
                                      <div className="swiper-slide">
                <div className="animate-underline">
                  <a className={`${product?.attachments[1]?.fileUrl ? "hover-effect-opacity":null} ratio ratio-1x1 d-block mb-3`} href="shop-product-furniture.html">
                    <img src={product?.attachments[0]?.fileUrl} className="hover-effect-target opacity-100" alt={product?.Name}/>
                    <img src={product?.attachments[1]?.fileUrl} className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4" alt={product?.Name}/>
                  </a>
                  <div className="d-flex gap-2 mb-3">
                    <input type="radio" className="btn-check" name="colors-4" id="color-4-1" checked/>
                    <label htmlFor="color-4-1" className="btn btn-color fs-base" style={{color: "#384043"}}>
                      <span className="visually-hidden">Dark gray</span>
                    </label>
                    <input type="radio" className="btn-check" name="colors-4" id="color-4-2"/>
                    <label htmlFor="color-4-2" className="btn btn-color fs-base" style={{color: "#bdc5da"}}>
                      <span className="visually-hidden">Light gray</span>
                    </label>
                    <input type="radio" className="btn-check" name="colors-4" id="color-4-3"/>
                    <label htmlFor="color-4-3" className="btn btn-color fs-base" style={{color: "#526f99"}}>
                      <span className="visually-hidden">Bluish gray</span>
                    </label>
                  </div>
                  <h3 className="mb-2 text-left">
                    <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-furniture.html">
                      <span className="animate-target">{product.Description}</span>
                    </a>
                  </h3>
                  <div className="h6 text-left">{formatPrice(product.price)}</div>
                  <div className="d-flex gap-2">
                    <button type="button" className="btn btn-dark w-100 rounded-pill px-3" onClick={()=>handleCheckoutNavigation(product?.id,product?.variants[0]?.id,"67b9c5f1e4b3771fff37bfdd")}>Add to cart</button>
                    <button type="button" className="btn btn-icon btn-secondary rounded-circle animate-pulse" aria-label="Add to wishlist">
                      <i className="ci-heart fs-base animate-target"></i>
                    </button>
                  </div>
                </div>
              </div>
                                    </SwiperSlide>
                                  ))}
                   
            
            </Swiper>
        </div>

      </section>
    )
}