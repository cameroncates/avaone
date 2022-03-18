import React, { useState } from 'react'

export default function CollapsableCard({ children, title, minHeight }) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="border-color__light2 mt-3 bg__dark5 border-radius__21 px-4 py-4">
            <div className="border-bottom  border-color__light2 pb-2">
                <button 
                    onClick={() => setCollapsed(!collapsed)}
                    className="btn btn-block bg-transparent text-white d-flex align-items-center justify-content-between px-1 transition__3">
                    <h4 className="font-poppins-regular mb-0">{ title }</h4>
                    <span className={"mdi mdi-chevron-down mdi-24px transition__3 " + (collapsed ? "mdi-rotate-180" : "")} ></span>
                </button>
            </div>
            <div className={"transition__3 " + (collapsed ? " overflow__hidden" : "overflow__auto") } style={{ height: collapsed ? "0px" : (minHeight || "350px") }}>
                { children }
            </div>
        </div>
    )
}
