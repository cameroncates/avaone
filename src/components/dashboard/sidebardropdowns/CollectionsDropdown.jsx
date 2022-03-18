import React, { useState } from 'react'
import face from '../../../assets/img/face.png'

export default function CollectionsDropdown() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="border-color__light2 mt-3">
            <div className="border-bottom  border-color__light2 pb-2">
                <button 
                    onClick={() => setCollapsed(!collapsed)}
                    className="btn btn-block bg-transparent text-white d-flex align-items-center justify-content-between px-1">
                    <h4 className="font-poppins-regular mb-0">Collections</h4>
                    <span className={"mdi mdi-chevron-down mdi-24px transition__3 " + (collapsed ? "mdi-rotate-180" : "")} ></span>
                </button>
            </div>
            <div className="transition__3 overflow__hidden mb-4" style={{ maxHeight: collapsed ? "0px" : "1000px", height: "auto" }}>
                {[1, 2].map(_ => (
                    <div key={_} className="row mx-0 align-items-center mt-4 pt-2">
                        <div className="col-lg-8 d-flex align-items-center">
                            <img src={face} width="60px" className="border-radius__4" />
                            <h5 className="font-poppins-medium ml-2 mb-0">Pixelz_Warriors</h5>
                        </div>
                        <p className="col-lg-4 text-right mb-0">42</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
