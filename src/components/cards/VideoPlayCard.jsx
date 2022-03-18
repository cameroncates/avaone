import React from 'react'
import thumbnail from '../../assets/img/home/thumbnail.png'

export default function VideoPlayCard() {
    return (
        <>                        
            <img src={thumbnail} alt="Background Thumbnail" className="w-100 border-radius__24" style={{ border: "1px solid rgba(255, 255, 255, 0.40"}} />
            <div className="w-100 h-100 position-absolute d-flex align-items-center justify-content-center" style={{ top: "0px"}}>
                <button className="btn bg-transparent text-white">
                    <span className="mdi mdi-play-circle" style={{ fontSize: "6rem"}}></span>
                    <h2 className="mb-0" style={{ transform: "translateY(-15px)"}}>Play</h2>
                </button>
            </div>
        </>
    )
}
