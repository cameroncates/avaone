import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default function BidAmountEnterModal() {

    function submitBid(e) {
        e.preventDefault()
        $(".mdi-close-circle").click()
        console.log("submitted...")
    }
    return (
        <div className="modal fade" id="bidAmountEnter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered bg-transparent" role="document">
                <div className="modal-content bg-transparent">
                    <div className="modal-header row mx-0 align-items-center justify-content-end px-0 border-0">
                        <div className="col-lg-3 px-0 text-right"> 
                            <a data-dismiss="modal" className="btn bg-transparent p-0 mdi mdi-close-circle mdi-36px text-white"></a>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                    <div className="modal-body border-0"> 
                        <h1 className="font-poppins-bold display-4 text-center mb-4 pb-3">ENTER YOUR BID</h1>               
                        <div className="row mx-0 justify-content-center">
                            <div className="col-lg-8 px-0">
                                <input type="text" className="w-100 text-white px-4 bg__light4 placeholder__white border bw__2 border-radius__8 py-3 border-color__light" placeholder="Enter amount..." />
                                <div className="row mx-0 mt-4 pt-4 justify-content-center">
                                    <div className="col-lg-5 text-center">
                                        <button 
                                            onClick={(e) => submitBid(e)}
                                            data-dismiss="modal"
                                            data-toggle="modal" data-target="#bidSuccessfulModal"
                                            className="btn bg-white text__purple font-poppins-semibold border-radius__24 px-5 py-2">Submit</button>
                                    </div>
                                    <div className="col-lg-5 text-center">
                                        <button data-dismiss="modal" className="btn text-white btn__outline__gradient px-5 py-2 mr-4 border-radius__22">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )
}
