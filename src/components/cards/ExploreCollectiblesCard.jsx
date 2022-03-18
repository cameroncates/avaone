import React from 'react'
import { Link } from 'react-router-dom'

import img from '../../assets/img/dumm1.png'
import profile from '../../assets/img/profile.svg'

export default function ExploreCollectiblesCard({ href }) {
    return (
        <Link to={ href || "/nft-details" } className="text-center text-white text-decoration__none">
            <img src={img} alt="" className="w-100 border-radius__10 box-shadow__dark" />
            <div className="text-center" style={{ transform: "translateY(-37.5px)"}}>
                <img src={profile} width="75px" />
                <h4 className="font-poppins-bold my-3">Travel</h4>
                <p className="d-inline-block bg__purple text-white px-4 border-radius__24 py-1">By Created Teams</p>
                <p className="lh__170cent ls__1px small mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </Link>
    )
}
