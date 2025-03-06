import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export const Navbar = () =>{
    //router navigate or redirect
    const navigate = useNavigate();
      //import server URL from .env file
      const serverUrl = process.env.REACT_APP_SERVER_URL;  
      //store navbar links
      const [navbarLinks, setNavbarLinks] = useState<any>();      
      //fetch navbar links
      const handleCategoryTypesData = async() =>{
        try{          
          const response = await axios.get(`${serverUrl}/cms/api/v1/product/get-category-types`)                 
          setNavbarLinks(response?.data)
        }
        catch(err:any){
          console.log("Failed to get navbar links data", err?.message)
        }
      }
      //actions added in following useeffect hook will be executed, when component mounted
      useEffect(()=>{        
        handleCategoryTypesData();            
      },[])
      //store dropdown links
      const [dropdownLinks, setDropdownLinks] = useState<any>(); 
      //fetch dropdown links
      const handleFetchDropdownData = async(id:string) =>{
        try{                    
          const response = await axios.get(`${serverUrl}/cms/api/v1/product/all-categories/${id}`)           
          setDropdownLinks(response?.data)
        }
        catch(err:any){
          console.log("Failed to fetch dropdown data", err?.message)
        }
      }
      const handleNavbarLinkClick=(selectedProductId:string,selectedProductId2:string)=>{
        navigate(`/products/${selectedProductId}/${selectedProductId2}`)
      }
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
                {navbarLinks?.map((navLink:any)=>(
                 <li className="nav-item dropdown position-static me-lg-n1 me-xl-0" key={navLink?.id}>
                 <a className="nav-link dropdown-toggle fs-sm" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false" onClick={()=>handleFetchDropdownData(navLink?.id)}>{navLink?.name}</a>
                 <div className="dropdown-menu p-4">
                 {/* <div className="dropdown-menu p-4" style="--cz-dropdown-spacer: 1rem"> */}
                   <div className="d-flex flex-column flex-lg-row gap-4">
                     <div style={{minWidth:"380px", display:"flex", flexWrap:"wrap"}}>
                       {dropdownLinks?.map((category:any)=>(
                         // style={{minWidth: `${index <=3 ? "" : index >3 && index <=6 ? "190px" : ""} `}}
                         <div key={category?.id} className="mb-3" style={{boxSizing:"border-box",flexBasis:"50%"}}>
            <div className="h6 mb-2">{category?.name}</div>
            <ul className="nav flex-column gap-2 mt-0">
             {category?.subcategories?.map((subCategory:any)=>(
               <li className="d-flex w-100 pt-1" key={subCategory?.id}>
                <span className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" onClick={()=>handleNavbarLinkClick(category?.id,subCategory?.id)}>{subCategory?.name}</span>
              </li>
             ))}                 
            </ul>
            </div>
                       ))}                   
             </div>
                   </div>
                 </div>
               </li>
                 ))}
              
           
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