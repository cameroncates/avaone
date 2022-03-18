import React, { useState } from 'react'

export default function PriceDropdown() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="border-color__light2 mt-3">
            <div className="border-bottom  border-color__light2 pb-2">
                <button 
                    onClick={() => setCollapsed(!collapsed)}
                    className="btn btn-block bg-transparent text-white d-flex align-items-center justify-content-between px-1">
                    <h4 className="font-poppins-regular mb-0">Price (USD)</h4>
                    <span className={"mdi mdi-chevron-down mdi-24px transition__3 " + (collapsed ? "mdi-rotate-180" : "")} ></span>
                </button>
            </div>
            <div className={"transition__3 overflow__hidden " + (collapsed ? "overflow__hidden" : null )} style={{ maxHeight: collapsed ? "0px" : "1000px", height: "auto" }}>
                <div className="d-flex align-items-center py-4">
                    <p className="mb-1 pb-0">Currency: &nbsp;</p>
                    <div className="dropdown ml-2 pb-0 mb-0">
                        <button 
                            className="btn p-0 font-poppins-semibold bg-transparent text-white" 
                            type="button" id="currencyList" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            USD <span className="mdi mdi-menu-down"></span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="currencyList">
                            <a className="dropdown-item" href="javascript:void(0)">Action</a>
                            <a className="dropdown-item" href="javascript:void(0)">Another action</a>
                            <a className="dropdown-item" href="javascript:void(0)">Something else here</a>
                        </div>
                    </div>                    
                </div>
                <div className="row mx-0">
                    <div className="col-lg-5 pl-0"><input type="text" className="w-100 text-white border placeholder__white px-2 border-color__light bg-transparent border-radius__3" placeholder="Max." /></div>
                    <div className="col-lg-5 pl-0"><input type="text" className="w-100 text-white border placeholder__white px-2 border-color__light bg-transparent border-radius__3" placeholder="Min." /></div>
                    <div className="col-lg-6 px-0 my-4 py-2">
                        <button className="btn btn-block border-radius__24 bg-white"><span className="small">Apply</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
