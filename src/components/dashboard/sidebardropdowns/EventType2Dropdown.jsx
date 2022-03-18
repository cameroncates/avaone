import React, { useState } from 'react'

export default function EventType2Dropdown() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="border-color__light2 mt-3">
            <button 
                onClick={() => setCollapsed(!collapsed)}
                className="btn btn-block bg-transparent text-white d-flex align-items-center justify-content-between px-1">
                <h4 className="font-poppins-regular mb-0">Event Type</h4>
                <span className={"mdi mdi-chevron-down mdi-24px transition__3 " + (collapsed ? "mdi-rotate-180" : "")} ></span>
            </button>
            <div className="transition__3 overflow__hidden" style={{ maxHeight: collapsed ? "0px" : "10000px" }}>
                <div className="row mx-0 text-center py-4 px-2 my-3 bg__dark__opaque border-radius__10">
                    <div className="col-lg-6 px-2 mb-4">
                        <button className="btn btn-block bg__dark4 btn__outline__gradient py-1 border-radius__24"><span className="small">Listings</span></button>
                    </div>
                    <div className="col-lg-6 px-2 mb-4">
                        <button className="btn btn-block border-radius__24 text-white bg__dark3"><span className="small">Bids</span></button>
                    </div>
                    <div className="col-lg-6 px-2">
                        <button className="btn btn-block border-radius__24 text-white bg__dark3"><span className="small">Sales</span></button>
                    </div>
                    <div className="col-lg-6 px-2">
                        <button className="btn btn-block border-radius__24 text-white bg__dark3"><span className="small">Transfers</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
