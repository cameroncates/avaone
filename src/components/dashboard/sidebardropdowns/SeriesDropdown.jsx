import React, { useState } from 'react'

export default function SeriesDropdown() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="border-color__light2 mt-3">
            <div className="border-bottom  border-color__light2 pb-2">
                <button 
                    onClick={() => setCollapsed(!collapsed)}
                    className="btn btn-block bg-transparent text-white d-flex align-items-center justify-content-between px-1">
                    <h4 className="font-poppins-regular mb-0">Series</h4>
                    <span className={"mdi mdi-chevron-down mdi-24px transition__3 " + (collapsed ? "mdi-rotate-180" : "")} ></span>
                </button>
            </div>
            <div className={"transition__3 overflow__hidden px-2 " + (collapsed ? "overflow__hidden" : null )} style={{ maxHeight: collapsed ? "0px" : "500px", height: "auto" }}>
                <div className="form-check mt-4 mb-2">
                    <input type="checkbox" className="form-check-input checkbox__white" id="travelseries" />
                    <label className="form-check-label small" for="travelseries">Travel Series</label>
                </div>                
                <div className="form-check mb-2">
                    <input type="checkbox" className="form-check-input checkbox__white" id="vaultseries" />
                    <label className="form-check-label small" for="vaultseries">Vault Series</label>
                </div>                
                <div className="form-check mb-5">
                    <input type="checkbox" className="form-check-input checkbox__white" id="charityseries" />
                    <label className="form-check-label small" for="charityseries">Charity Series</label>
                </div>                
            </div>
        </div>
    )
}
