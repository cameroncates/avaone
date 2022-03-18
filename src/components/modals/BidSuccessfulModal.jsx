import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default function BidSuccessfulModal() {

    function submitBid(e) {
        e.preventDefault()
        $(".mdi-close-circle").click()
    }
    return (
        <div className="modal fade" id="bidSuccessfulModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document" style={{ backgroundColor: "rgba(0, 0, 0, 0.95)"}}>
                <div className="modal-content bg-transparent">
                    <div className="modal-header row mx-0 align-items-center justify-content-end px-0 border-0">
                        <div className="col-lg-3 px-0 text-right"> 
                            <a data-dismiss="modal" className="btn bg-transparent p-0 mdi mdi-close-circle mdi-36px text-white"></a>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                    <div className="modal-body border-0 text-center"> 
                        <h1 className="font-poppins-bold display-4 text-center">BID SUCCESSFUL</h1> 
                        <h5 className="mb-5">Waiting for artist's approval</h5>              
                        <a
                            href="/dashboard/activity" 
                            className="btn text-white btn__outline__gradient px-5 py-2 border-radius__22">Back to shop</a>
                    </div>
                </div>
            </div>
        </div>       
    )
}
