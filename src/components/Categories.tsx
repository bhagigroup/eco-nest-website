import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Categories = () =>{
  //router navigate or redirect
  const navigate = useNavigate();
  //import server URL from .env file
  const serverUrl = process.env.REACT_APP_SERVER_URL;  
  //store category products
  const [categoryProducts, setCategoryProducts] = useState<any>();
  //fetch category products
  const handleFetchCategoryProducts = async() =>{
    try{
      const response = await axios.get(`${serverUrl}/cms/api/v1/product/get-categories`)      
      setCategoryProducts(response?.data)
    }
    catch(err:any){
      console.log("Failed to get category products data", err?.message)
    }
  }
  //actions added in following useeffect hook will be executed, when component mounted
  useEffect(()=>{
    handleFetchCategoryProducts();        
  },[])
  //Navigate to product page, and add selected/ clicked category id
  const handleCategoryClick=(selectedProductId:string)=>{
    navigate(`/products/${selectedProductId}`)
  }
    return (        
        <section className="container py-5 my-2 my-sm-3 mb-md-2 mt-lg-4 my-xl-5">
          <div className="overflow-x-auto pt-xxl-3" data-simplebar data-simplebar-auto-hide="false">
            <div className="row flex-nowrap flex-md-wrap justify-content-md-center g-0 gap-4 gap-md-0">
  
              {/* Category */}
              {categoryProducts?.map((category:any, index:number)=>(
                 <div className="col col-md-4 col-lg-3 col-xl-2 mb-4" key={index}>
                 <div className="category-card w-100 text-center px-1 px-lg-2 px-xxl-3 mx-auto" style={{minWidth: "165px"}}>
                   <div className="category-card-body" onClick={()=>handleCategoryClick(category?.id)} style={{cursor:"pointer"}}>
                     {/* <Link className="d-block text-decoration-none"> */}
                       <div className="bg-body-tertiary rounded-pill mb-3 mx-auto" style={{maxWidth: "164px"}}>
                         <div className="ratio ratio-1x1">
                           <img src={category?.image?.fileUrl} className="rounded-pill" alt={category?.name}/>
                         </div>
                       </div>
                       <h3 className="category-card-title h6 text-truncate">{category?.name}</h3>
                       <p className="text-truncate nav-link justify-content-center fs-sm hover-effect-underline p-0 text-center">{category?.description}</p>
                     {/* </Link> */}
                     {/* <ul className="category-card-list nav w-100 flex-column gap-1 pt-3">
                       <li className="w-100">
                         <Link className="nav-link justify-content-center min-w-0 w-100 fw-normal hover-effect-underline p-0" to="shop-catalog-furniture.html">
                           <span className="text-truncate">{category?.item1 || "Item 1"}</span>
                         </Link>
                       </li>
                       <li className="w-100">
                         <Link className="nav-link justify-content-center min-w-0 w-100 fw-normal hover-effect-underline p-0" to="shop-catalog-furniture.html">
                           <span className="text-truncate">{category?.item1 || "Item 2"}</span>
                         </Link>
                       </li>
                       <li className="w-100">
                         <Link className="nav-link justify-content-center min-w-0 w-100 fw-normal hover-effect-underline p-0" to="shop-catalog-furniture.html">
                           <span className="text-truncate">{category?.item3 || "Item 3"}</span>
                         </Link>
                       </li>
                     </ul> */}
                   </div>
                 </div>
               </div>
              ))}
             
            </div>
          </div>
        </section>
    )
}