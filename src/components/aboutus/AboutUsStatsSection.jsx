import React from 'react'

export default function AboutUsStats() {
    return (
        <div className="my-5 pt-5 pb-5 position-relative">
            <div className="bg__pinkblue__gradient w-100 h-100 position-absolute" style={{ top: 0, left: 0}}></div>
            <div className="row text-center justify-content-center bg__dark2 mx-0 zindex__2000 position-relative py-4 px-2 mb-4 border-radius__12">
                <div className="col-lg-2">
                    <h6 className="font-poppins-semibold mb-1">2012</h6>
                    <p className="small text__grey2 mb-0">Founded</p>
                </div>
                <div className="col-lg-2">
                    <h6 className="font-poppins-semibold mb-1">50+</h6>
                    <p className="small text__grey2 mb-0">Employees</p>
                </div>
                <div className="col-lg-2">
                    <h6 className="font-poppins-semibold mb-1">1M+</h6>
                    <p className="small text__grey2 mb-0">Collections</p>
                </div>
                <div className="col-lg-2">
                    <h6 className="font-poppins-semibold mb-1">25M+</h6>
                    <p className="small text__grey2 mb-0">NFTs</p>
                </div>
                <div className="col-lg-2">
                    <h6 className="font-poppins-semibold mb-1">1M+</h6>
                    <p className="small text__grey2 mb-0">Collections</p>
                </div>
            </div>
        </div>
    )
}
