import React, { useState } from 'react'

export default function EventTypeDropdown() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="border-color__light2 mt-3">
            <button 
                onClick={() => setCollapsed(!collapsed)}
                className="btn btn-block bg-transparent text-white d-flex align-items-center justify-content-between px-1">
                <h4 className="font-poppins-regular mb-0">Event Type</h4>
                <span className={"mdi mdi-chevron-down mdi-24px transition__3 " + (collapsed ? "mdi-rotate-180" : "")} ></span>
            </button>
            <div className="transition__3 overflow__hidden" style={{ maxHeight: collapsed ? "0px" : "1000px" }}>
                <div className="row mx-0 text-center py-4 px-2 my-3 bg__dark__opaque border-radius__10">
                    <div className="col-lg-6 px-2">
                        <button className="btn btn-block border-radius__24 text-white bg__dark3"><span className="small">Buy Now</span></button>
                    </div>
                    <div className="col-lg-6 px-2">
                        <button className="btn btn-block border-radius__24 text-white bg__dark3"><span className="small">Auction</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
