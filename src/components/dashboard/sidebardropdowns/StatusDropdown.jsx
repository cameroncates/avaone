import React, { useState } from 'react'

export default function StatusDropdown() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="border-color__light2 mt-3">
            <div className="border-bottom  border-color__light2 pb-2">
                <button 
                    onClick={() => setCollapsed(!collapsed)}
                    className="btn btn-block bg-transparent text-white d-flex align-items-center justify-content-between px-1">
                    <h4 className="font-poppins-regular mb-0">Status</h4>
                    <span className={"mdi mdi-chevron-down mdi-24px transition__3 " + (collapsed ? "mdi-rotate-180" : "")} ></span>
                </button>
            </div>
            <div className={"transition__3 overflow__hidden px-2 " + (collapsed ? "overflow__hidden" : null )} style={{ maxHeight: collapsed ? "0px" : "1000px", height: "auto" }}>
                <div className="form-check mt-4 mb-4">
                    <input type="checkbox" className="form-check-input checkbox__white" id="onsales" />
                    <label className="form-check-label small" for="onsales">On Sales</label>
                </div>                
            </div>
        </div>
    )
}
