import React from 'react'
import MainLayout from '../../layout/MainLayout'
import HeroContainer from '../../layout/partials/HeroContainer'
import nftIcon from '../../assets/img/icons/nft-icon.svg'
import productServiceIcon from '../../assets/img/icons/product-services-icon.svg'
import { Link } from 'react-router-dom'

import '../../assets/style/horizontal-steps.css'

export default function UploadNftStep2() {
    return (
        <MainLayout>
            <HeroContainer>
                <div className="container py-5 my-5">
                    <div className="row mx-0 justify-content-center">
                        <h1 className="col-lg-12 text-center font-poppins-bold my-5 pb-5 display-4">UPLOAD YOUR PRODUCT</h1>
                        <div className="text-white text-decoration__none col-lg-10 px-4">
                            <div className="border border-color__light5 text-center bg__light4 bw__3 border-radius__30 p-5 h-100">
                                <div class="steps">
                                    <ul class="steps-list">
                                        <li class="steps-list-item completed"><span></span>Step 1</li>
                                        <li class="steps-list-item completed"><span></span>Step 2</li>
                                        <li class="steps-list-item"><span></span>Step 3</li>
                                        <li class="steps-list-item "><span></span>Step 4</li>
                                        <li class="steps-list-item "><span></span>Step 5</li>
                                        <li class="steps-list-item "><span></span>Step 6</li>
                                        <li class="steps-list-item "><span></span>Step 7</li>
                                    </ul>
                                </div>                                
                                <h2 className="font-poppins-semibold text-center mb-5 mt-4">Will your NFT use Geo-Fencing?</h2>
                                <div className="w-100 text-center pt-4">
                                    <Link to="/upload-nft/step3" className="btn bg-transparent border-radius__24 bw__2 border mx-3 text-white px-5">Yes</Link>
                                    <Link to="/upload-nft/step1" className="btn bg-transparent border-radius__24 bw__2 border mx-3 text-white px-5">No</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HeroContainer>

        </MainLayout>          
    )
}
