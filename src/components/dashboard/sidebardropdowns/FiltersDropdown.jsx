import React from 'react'

export default function FiltersDropdown() {
    return (
        <div className="border-bottom border-color__light2">
            <button className="btn btn-block bg-transparent text-white d-flex align-items-center justify-content-between px-1">
                <h4 className="font-poppins-regular mb-0">Filters</h4>
                <span className="mdi mdi-chevron-down mdi-24px"></span>
            </button>
        </div>
    )
}
