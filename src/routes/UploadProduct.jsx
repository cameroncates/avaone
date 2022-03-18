import React from 'react'
import MainLayout from '../layout/MainLayout'
import HeroContainer from '../layout/partials/HeroContainer'
import nftIcon from '../assets/img/icons/nft-icon.svg'
import productServiceIcon from '../assets/img/icons/product-services-icon.svg'
import { Link } from 'react-router-dom'

export default function UploadProduct() {
    return (
        <MainLayout>
            <HeroContainer>
                <div className="container py-5 my-5">
                    <div className="row mx-0">
                        <h1 className="col-lg-12 text-center font-poppins-bold my-5 pb-5 display-4">UPLOAD YOUR PRODUCT</h1>
                        <Link to="/upload-nft/step1" className="text-white text-decoration__none col-lg-6 px-4">
                            <div className="border border-color__light5 text-center bg__light4 bw__3 border-radius__30 p-5 h-100">
                                <img src={nftIcon} className="w-75 p-5" alt="" />
                                <h1 className="font-poppins-semibold text-center">NFT</h1>
                            </div>
                        </Link>
                        <Link to="/" className="text-white text-decoration__none col-lg-6 px-4">
                            <div className="border border-color__light5 text-center bg__light4 bw__3 border-radius__30 p-5 h-100">
                                <img src={productServiceIcon} className="w-75 p-5" alt="" />
                                <h1 className="font-poppins-semibold text-center">Product / Services</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </HeroContainer>

        </MainLayout>        
    )
}
