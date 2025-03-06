import { Link, useNavigate, useParams } from "react-router-dom"
import { Breadcrumbs } from "./generic/Breadcrums"
import { Filters } from "./generic/Filters"
import { useEffect, useState } from "react";
import axios from "axios";

export const Products = () =>{
      //router navigate or redirect
      const navigate = useNavigate();
  const params = useParams(); 
  const selectedCategoryId = params.id1;//get the id from URL 
  const selectedCategoryId2 = params.id2;

    //import server URL from .env file
    const serverUrl = process.env.REACT_APP_SERVER_URL;  
    //store product data
    const [selectedProductData, setSelectedProductData] = useState<any>();
    //fetch product data
    const handleFetchProductData = async() =>{
      try{
        const payload = {
          "name": "",
          "categoryId": selectedCategoryId,
          "subCategoryId": selectedCategoryId2
      }
        const response = await axios.post(`${serverUrl}/cms/api/v1/product/products-by-filter`,payload)              
        await setSelectedProductData(response?.data)  
             
      }
      catch(err:any){
        console.log("Failed to get product data", err?.message)
      }
    }    
    //actions added in following useeffect hook will be executed, when component mounted
    useEffect(()=>{
      if(selectedCategoryId && selectedCategoryId2){
      handleFetchProductData();   
      }     
    },[selectedCategoryId]);
    const handleNavbarLinkClick=(selectedProductId:string)=>{
      navigate(`/shop-product/${selectedProductId}`)
    }
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
          {selectedProductData?.map((product:any)=>(
            <div className="animate-underline mb-sm-2" key={product?.id}>
            <Link className="hover-effect-opacity ratio ratio-1x1 d-block mb-3" to="/shop-product">
              <img src={product.attachments[0]?.fileUrl} className="hover-effect-target opacity-100" alt="Product"/>
              <img src={product.attachments[1]?.fileUrl} className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4" alt="Room"/>
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
                <span className="animate-target">{product?.Name}</span>
              </a>
            </h3>
            <div className="h6">{product?.price}</div>
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-dark w-100 rounded-pill px-3" onClick={()=>handleNavbarLinkClick(product?.id)}>Add to cart</button>
              <button type="button" className="btn btn-icon btn-secondary rounded-circle animate-pulse" aria-label="Add to wishlist">
                <i className="ci-heart fs-base animate-target"></i>
              </button>
            </div>
          </div>
          ))}
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