export const Filters = () =>{
    const updateFilterCount = (selectedFilter:string)=>{
        console.log(selectedFilter)
    }
    return (
      <>
        <div className="sticky-top bg-body mb-3 mb-sm-4" style={{marginTop: "-4.5rem"}}>
        <div className="row align-items-center pt-5">
          <div className="col-5 col-sm-8 col-md-9 d-flex gap-2 pb-3 mt-4">
            <div className="d-none d-sm-block w-100 me-1">
              <select className="form-select rounded-pill" data-select='{
                "classNames": {
                  "containerInner": ["form-select", "filter-select", "rounded-pill"]
                }
              }' aria-label="Sorting">
                <option value="">Sort by</option>
                <option value="popular" selected>Most popular</option>
                <option value="match">Best match</option>
                <option value="new">New arrivals</option>
                <option value="price-asc">Price ascending</option>
                <option value="price-desc">Price descending</option>
              </select>
            </div>
            <div className="dropdown w-100 d-none d-md-block me-1">
              <button type="button" className="btn btn-outline-secondary dropdown-toggle filter-select justify-content-between w-100 text-body fw-normal rounded-pill px-3" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">Category <span className="ms-1 me-auto" id="categoryCount"></span></button>
              <div className="dropdown-menu w-100 p-3">
                <div className="d-flex flex-column gap-2">
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="living-room" checked onClick={()=>updateFilterCount('categoryCount')} data-count-id="categoryCount"/>
                    <label htmlFor="living-room" className="form-check-label d-flex align-items-end">
                      Living room
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">657</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="bedroom" checked onClick={()=>updateFilterCount('categoryCount')} data-count-id="categoryCount"/>
                    <label htmlFor="bedroom" className="form-check-label d-flex align-items-end">
                      Bedroom
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">528</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="kitchen" onClick={()=>updateFilterCount('categoryCount')} data-count-id="categoryCount"/>
                    <label htmlFor="kitchen" className="form-check-label d-flex align-items-end">
                      Kitchen
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">342</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="office" onClick={()=>updateFilterCount('categoryCount')} data-count-id="categoryCount"/>
                    <label htmlFor="office" className="form-check-label d-flex align-items-end">
                      Office
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">283</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="lighting" checked onClick={()=>updateFilterCount('categoryCount')} data-count-id="categoryCount"/>
                    <label htmlFor="lighting" className="form-check-label d-flex align-items-end">
                      Lighting
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">395</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="decoration" onClick={()=>updateFilterCount('categoryCount')} data-count-id="categoryCount"/>
                    <label htmlFor="decoration" className="form-check-labe d-flex align-items-endl">
                      Decoration
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">204</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="accessories" checked onClick={()=>updateFilterCount('categoryCount')} data-count-id="categoryCount"/>
                    <label htmlFor="accessories" className="form-check-label d-flex align-items-end">
                      Accessories
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">190</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown w-100 d-none d-lg-block me-1">
              <button type="button" className="btn btn-outline-secondary dropdown-toggle filter-select justify-content-between w-100 text-body fw-normal rounded-pill px-3" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">Type <span className="ms-1 me-auto" id="typeCount"></span></button>
              <div className="dropdown-menu w-100 p-3">
                <div className="d-flex flex-column gap-2">
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="armchair" onClick={()=>updateFilterCount('typeCount')} data-count-id="typeCount"/>
                    <label htmlFor="armchair" className="form-check-label d-flex align-items-end">
                      Armchair
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">324</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="sofa" onClick={()=>updateFilterCount('typeCount')} data-count-id="typeCount"/>
                    <label htmlFor="sofa" className="form-check-label d-flex align-items-end">
                      Sofa
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">275</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="ottoman" onClick={()=>updateFilterCount('typeCount')} data-count-id="typeCount"/>
                    <label htmlFor="ottoman" className="form-check-label d-flex align-items-end">
                      Ottoman
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">117</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="bench" onClick={()=>updateFilterCount('typeCount')} data-count-id="typeCount"/>
                    <label htmlFor="bench" className="form-check-label d-flex align-items-end">
                      Bench
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">86</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="bed" onClick={()=>updateFilterCount('typeCount')} data-count-id="typeCount"/>
                    <label htmlFor="bed" className="form-check-label d-flex align-items-end">
                      Bed frame
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">263</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="lamp" onClick={()=>updateFilterCount('typeCount')} data-count-id="typeCount"/>
                    <label htmlFor="lamp" className="form-check-label d-flex align-items-end">
                      Lamp
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">415</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="stool" onClick={()=>updateFilterCount('typeCount')} data-count-id="typeCount"/>
                    <label htmlFor="stool" className="form-check-labe d-flex align-items-end">
                      Stool
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">104</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown w-100 d-none d-xl-block me-1">
              <button type="button" className="btn btn-outline-secondary dropdown-toggle filter-select justify-content-between w-100 text-body fw-normal rounded-pill px-3" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">Color <span className="ms-1 me-auto" id="colorCount"></span></button>
              <div className="dropdown-menu w-100 p-3">
                <div className="d-flex flex-column gap-2">
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="emerald" onClick={()=>updateFilterCount('colorCount')} data-count-id="colorCount"/>
                    <label htmlFor="emerald" className="form-check-label d-flex align-items-end">
                      <span className="align-self-center rounded-circle border border-2 p-1 me-2" style={{borderColor: "#32808e", backgroundColor: "#32808e"}}></span>
                      Emerald
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">97</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="dark-gray" onClick={()=>updateFilterCount('colorCount')} data-count-id="colorCount"/>
                    <label htmlFor="dark-gray" className="form-check-label d-flex align-items-end">
                      <span className="align-self-center rounded-circle border border-2 p-1 me-2" style={{borderColor: "#6a6f7b", backgroundColor: "#6a6f7b"}}></span>
                      Dark gray
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">346</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="light-gray" onClick={()=>updateFilterCount('colorCount')} data-count-id="colorCount"/>
                    <label htmlFor="light-gray" className="form-check-label d-flex align-items-end">
                      <span className="align-self-center rounded-circle border border-2 p-1 me-2" style={{borderColor: "#bdc5da", backgroundColor: "#bdc5da"}}></span>
                      Light gray
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">291</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="brown" onClick={()=>updateFilterCount('colorCount')} data-count-id="colorCount"/>
                    <label htmlFor="brown" className="form-check-label d-flex align-items-end">
                      <span className="align-self-center rounded-circle border border-2 p-1 me-2" style={{borderColor: "#af8d6a", backgroundColor: "#af8d6a"}}></span>
                      Brown
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">105</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="blue" onClick={()=>updateFilterCount('colorCount')} data-count-id="colorCount"/>
                    <label htmlFor="blue" className="form-check-label d-flex align-items-end">
                      <span className="align-self-center rounded-circle border border-2 p-1 me-2" style={{borderColor: "#216aae", backgroundColor: "#216aae"}}></span>
                      Blue
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">84</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="green" onClick={()=>updateFilterCount('colorCount')} data-count-id="colorCount"/>
                    <label htmlFor="green" className="form-check-label d-flex align-items-end">
                      <span className="align-self-center rounded-circle border border-2 p-1 me-2" style={{borderColor: "#187c1c", backgroundColor: "#187c1c"}}></span>
                      Green
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">69</span>
                    </label>
                  </div>
                  <div className="form-check m-0">
                    <input type="checkbox" className="form-check-input fs-base" id="beige" onClick={()=>updateFilterCount('colorCount')} data-count-id="colorCount"/>
                    <label htmlFor="beige" className="form-check-label d-flex align-items-end">
                      <span className="align-self-center rounded-circle border border-2 p-1 me-2" style={{borderColor: "#bdaB9e", backgroundColor: "#bdaB9e"}}></span>
                      Beige
                      <span className="fs-xs text-body-secondary ps-2 ms-auto">173</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* All filters offcanvas toggle */}
            <nav className="nav">
              <a className="nav-link animate-underline px-2" href="#shopFilters" data-bs-toggle="offcanvas" aria-controls="shopFilters">
                <i className="ci-filter me-1"></i>
                <span className="animate-target text-nowrap">All filters</span>
              </a>
            </nav>
          </div>

          {/* Product / room view switcher */}
          <div className="col-7 col-sm-4 col-md-3">
            <ul className="nav nav-underline flex-nowrap justify-content-end" id="viewShwitcher">
              <li className="nav-item" role="presentation">
                <button type="button" className="nav-link active" id="showProduct" role="tab" aria-selected="true">
                  Product
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button type="button" className="nav-link" id="showRoom" role="tab" aria-selected="false">
                  Room
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Selected filters */}
        <div className="d-flex flex-wrap align-items-center gap-2 text-nowrap mt-n3 mb-3 mb-lg-4">
          <button type="button" className="btn btn-sm btn-secondary rounded-pill me-1">
            <i className="ci-close fs-sm me-1 ms-n1"></i>
            Living room
          </button>
          <button type="button" className="btn btn-sm btn-secondary rounded-pill me-1">
            <i className="ci-close fs-sm me-1 ms-n1"></i>
            Bedroom
          </button>
          <button type="button" className="btn btn-sm btn-secondary rounded-pill me-1">
            <i className="ci-close fs-sm me-1 ms-n1"></i>
            Lighting
          </button>
          <button type="button" className="btn btn-sm btn-secondary rounded-pill me-1">
            <i className="ci-close fs-sm me-1 ms-n1"></i>
            Accessories
          </button>
          <div className="nav ps-1">
            <a className="nav-link fs-xs text-decoration-underline px-0" href="#!">Clear all</a>
          </div>
        </div>
      </>
    )
}