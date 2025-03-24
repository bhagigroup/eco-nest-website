import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/HeroBanner.scss";
import axios from 'axios';
import { formatPrice } from '../utility/formatCurrency';
import { useNavigate } from 'react-router-dom';

interface HeroBannerProps {
  images: string[];
  thumbnails: string[];
  description: string[];
  price: string[];
}

export const HeroBanner: React.FC<HeroBannerProps> = () => {
    //router navigate or redirect
    const navigate = useNavigate();
  //import server URL from .env file
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  //store product data
  const [bannerData, setBannerData] = useState<any>();  
  //fetch banner data
   const handleFetchProductData = async() =>{
    try{
      const payload = {
        "name": "",
        "categoryId": "",
        "subCategoryId": "",
        "isPopular":"",
        "isBannerProduct":"true"
    }
      const response = await axios.post(`${serverUrl}/cms/api/v1/product/products-by-filter`,payload)              
      await setBannerData(response?.data)  ;                 
    }
    catch(err:any){
      console.log("Failed to get product data", err?.message)
    }
  }    
  //actions added in following useeffect hook will be executed, when component mounted
  useEffect(()=>{    
    handleFetchProductData();       
  },[]);
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? bannerData?.length - 1 : prevIndex - 1));
    
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === bannerData?.length - 1 ? 0 : prevIndex + 1));
    
  };
//shop product
  const handleNavigation=(selectedProductId:string)=>{
    navigate(`/shop-product/${selectedProductId}`)
  }
  return (
        <section className="bg-body-tertiary min-vh-100 d-flex align-items-center overflow-hidden" style={{ marginTop: '-110px', paddingTop: '110px' }}>
          <div className="container h-100 py-5 my-md-2 my-lg-3 my-xl-4 mb-xxl-5">
            <h1 className="display-4 text-center mx-auto mb-4" style={{ maxWidth: '680px' }}>
              Everything You Need for a Modern Interior
            </h1>
            <div className="row align-items-center justify-content-center gx-3 gx-sm-4 mb-3 mb-sm-4">
              {/* Prev slide preview */}
              <div className="col-lg-1 col-xl-2 d-none d-lg-flex justify-content-end">
                <div className="position-relative user-select-none" style={{ width: '262px' }}>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-50 rounded-circle d-none-dark"></span>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-none-dark d-none d-block-dark" style={{ opacity: '.05' }}></span>
                  <div className="swiper position-relative z-2 opacity-60 rounded-circle pe-none">
                    <div className="swiper-wrapper">
                      {/* Previous thumbnail image */}
                      <div className="swiper-slide" style={{width: "262px", height: "262px"}}>
                        <div className="ratio ratio-1x1">
                          {bannerData ? <img src={bannerData[(currentIndex === 0 ? bannerData?.length : currentIndex) - 1]?.attachments[0]?.fileUrl} alt="Previous Thumbnail"/> : <p>No Data Available</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Prev button */}
              <div className="col-auto col-sm-1 order-1 order-lg-2 d-flex align-items-center justify-content-center">
                <button type="button" className="btn-prev btn btn-lg btn-icon btn-outline-secondary rounded-circle" aria-label="Prev" onClick={handlePrev}>
                  <i className="ci-chevron-left fs-xl"></i>
                </button>
              </div>
    
              {/* Main slider */}
              <div className="col-sm-10 col-lg-8 col-xl-6 order-3">
                <Swiper
                  loop={true}
                  grabCursor={true}
                  speed={600}
                  initialSlide={currentIndex}
                  //onSlideChange={(swiper:any) => setCurrentIndex(swiper.activeIndex)}
                  navigation={{
                    prevEl: '.btn-prev',
                    nextEl: '.btn-next',
                  }}
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 0,
                    scale: 1.3,
                    depth: -200,
                    stretch: -100,
                    slideShadows: false,
                  }}
                  key={currentIndex} // Forces a re-render on index change
                >
                  {bannerData?.map((product:any) => (
                    <SwiperSlide key={product?.id} className='hero-banner'>
                      <div className="ratio">
                        <img src={product?.attachments[0]?.fileUrl} alt={product?.Name} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
    
              {/* Next button */}
              <div className="col-auto col-sm-1 order-2 order-sm-3 order-lg-4 d-flex align-items-center justify-content-center">
                <button type="button" className="btn-next btn btn-lg btn-icon btn-outline-secondary rounded-circle" aria-label="Next" onClick={handleNext}>
                  <i className="ci-chevron-right fs-xl"></i>
                </button>
              </div>
    
              {/* Next slide preview */}
              <div className="col-lg-1 col-xl-2 order-lg-5 d-none d-lg-block">
                <div className="position-relative user-select-none" style={{ width: '262px' }}>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-50 rounded-circle d-none-dark"></span>
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-none-dark d-none d-block-dark" style={{ opacity: '.05' }}></span>
                  <div className="swiper position-relative z-2 opacity-60 rounded-circle pe-none">
                    <div className="swiper-wrapper">
                      {/* Next thumbnail image */}
                      <div className="swiper-slide">
                        <div className="ratio ratio-1x1">
                          {bannerData ? <img src={bannerData[(currentIndex + 1)%bannerData?.length]?.attachments[0]?.fileUrl} alt="Next Thumbnail" /> : <p>No Data Available</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Linked captions */}
            <div className="swiper" data-swiper='{"allowTouchMove": false, "loop": true, "effect": "fade"}'>
              <div className="swiper-wrapper">
              {bannerData ?
                <div className="swiper-slide bg-body-tertiary text-center">
                  <h3 className="text-secondary-emphasis fs-base fw-normal mb-2">{bannerData[(currentIndex)%bannerData?.length]?.Description}</h3>
                  <p className="h4 mb-4">{formatPrice(bannerData[(currentIndex)%bannerData?.length]?.price)}</p>
                  <p className="btn btn-lg btn-dark rounded-pill" onClick={()=>handleNavigation(bannerData[(currentIndex)%bannerData?.length]?.id)}>
                    Shop now
                    <i className="ci-chevron-right fs-lg ms-2 me-n2"></i>
                  </p>
                </div>:<p>No Data Available</p>
}
                {/* Add other captions here */}
              </div>
            </div>
          </div>
        </section>
  );
};

