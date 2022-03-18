import React, { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import bg from '../assets/img/bg.png'
import downloadBg from '../assets/img/download_bg.png'
import thumbnail from '../assets/img/home/thumbnail.png'
import HeroContainer from '../layout/partials/HeroContainer'

import art from '../assets/img/icons/art.svg'
import alien from '../assets/img/icons/aliens.svg'
import bgArt from '../assets/img/art.png'
import bgAllien from '../assets/img/aliens.png'
import bgCollectibles from '../assets/img/collectibles.png'
import pattern from '../assets/img/pattern.svg'

import appStoreBtn from '../assets/img/app-store.png'
import googlePlayBtn from '../assets/img/google-play.png'

import dumm1 from '../assets/img/dumm1.png'
import dumm2 from '../assets/img/dumm2.png'
import dumm3 from '../assets/img/dumm3.png'

import demsImg from '../assets/img/dems.png'

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

export default function Index() {
    function initSwiper() {
        new Swiper(".swiper-container", {
            slidesPerView: 1,
            spaceBetween: 1,
            centeredSlides: false,
            freeMode: true,
            grabCursor: false,
            loop: false,
            pagination: {
            el: ".swiper-pagination",
            clickable: true
            },
            autoplay: {
            delay: 1000,
            disableOnInteraction: false
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
            },
            breakpoints: {
            500: {
                slidesPerView: 3
            },
            700: {
                slidesPerView: 3
            }
            }
        })
    }

    useEffect(() => {
        initSwiper()
    })    
    return (
        <MainLayout>            
            <HeroContainer>
                <div className="row mx-0 justify-content-center align-items-center mt-5">
                    <div className="col-lg-6 py-5 mt-5 position-relative">
                        <img src={thumbnail} alt="Background Thumbnail" className="w-100 border-radius__24" style={{ border: "1px solid rgba(255, 255, 255, 0.40"}} />
                        <div className="w-100 h-100 position-absolute d-flex align-items-center justify-content-center" style={{ top: "0px"}}>
                            <button className="btn bg-transparent text-white">
                                <span className="mdi mdi-play-circle mdi-48px"></span>
                                <h4 className="mb-0">Play</h4>
                            </button>
                        </div>
                    </div>
                </div>
            </HeroContainer>
            {/* BROWSE CATEGORIES */}
            <div className="container">
                <div className="text-white text-center py-5">
                    <h2 className="font-poppins-semibold mb-3 mt-4">Browse Categories</h2>
                    <p className="w-50 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Malesuada sit feugiat etiam risus, massa sit.</p>
                </div>
                <div className="swiper swiper-container px-4 ">
                    <div className="swiper-wrapper position-relative align-items-center mb-5 pt-4 pb-5">
                        <div className="swiper-slide flex-wrap text-center pr-4">
                            <div className="border-radius__30 box-shadow__dark w-100 px-4 pt-4 pb-5 text-left" style={{ height: "300px", background: `url(${bgArt}) 100%` }}>
                                <div>
                                    <img src={art} alt="" className="bg__purple px-3 py-3 border-radius__20" style={{ width: "70px" }} />
                                </div>
                                <p className="font-poppins-semibold text-white text-left mt-4">ART</p>
                                <p className="text__dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="swiper-slide flex-wrap text-center pr-4">
                            <div className="border-radius__30 box-shadow__dark w-100 px-4 pt-4 pb-5 text-left" style={{ height: "300px", background: `url(${bgCollectibles}) 100%` }}>
                                <h2 className="font-poppins-semibold text-white text-center mt-2">COLLECTIBLES</h2>
                            </div>
                        </div>
                        <div className="swiper-slide flex-wrap text-center pr-4">
                            <div className="border-radius__30 box-shadow__dark w-100 px-4 pt-4 pb-5 text-left" style={{ height: "300px", background: `url(${bgAllien}) 100%` }}>
                                <div>
                                    <img src={alien} alt="" className="bg__purple px-3 py-3 border-radius__20" style={{ width: "70px" }} />
                                </div>
                                <p className="font-poppins-semibold text-white text-left mt-4">ALIENS</p>
                                <p className="text__dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="swiper-slide flex-wrap text-center pr-4">
                            <div className="border-radius__30 box-shadow__dark w-100 px-4 pt-4 pb-5 text-left" style={{ height: "300px", background: `url(${bgAllien}) 100%` }}>
                                <div>
                                    <img src={alien} alt="" className="bg__purple px-3 py-3 border-radius__20" style={{ width: "70px" }} />
                                </div>
                                <p className="font-poppins-semibold text-white text-left mt-4">ALIENS</p>
                                <p className="text__dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>                

            {/* DOWNLOAD SECTION */}
            <div className="container-fluid hero-container" style={{ background: `url(${downloadBg}) 100%` }}>
                <div className="container text-center text-white py-5">
                    <h2 className="font-poppins-semibold mt-4 mb-3">DOWNLOAD OUR APP</h2>
                    <p className="w-50 mx-auto mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. <br /> Malesuada sit feugiat etiam risus, massa sit.</p>
                    <div className="pt-2 pb-5">
                        <button className="btn bg-transparent px-0 mx-2"><img src={appStoreBtn} alt="" /></button>
                        <button className="btn bg-transparent px-0 mx-2"><img src={googlePlayBtn} alt="" /></button>
                    </div>
                </div>
            </div>

            {/* SERIES, PRODUCSTS & TRAVEL SERIES */}
            <div className="container text-center pt-5">
                <h2 className="font-poppins-semibold mt-5 mb-3">SERIES AND PRODUCTS</h2>
                <p className="w-50 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. <br /> Malesuada sit feugiat etiam risus, massa sit.</p>

                <h2 className="font-poppins-semibold mt-5 pt-5 mb-3">TRAVEL SERIES</h2>
                <p className="w-50 mx-auto mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. <br /> Malesuada sit feugiat etiam risus, massa sit.</p>

                <button className="btn bg-transparent px-5 btn__outline__gradient mt-4">Learn More</button>
            </div>

            <div className="container-fluid hero-container pt-2 mt-5" style={{ background: `url(${pattern}) 100%` }}>
                <div className="container">
                    <div className="row mx-0 pt-5 pb-5 justify-content-center">
                        <div className="col-lg-2">
                            <img src={dumm1} className="w-100 border-radius__10" alt="" />
                        </div>
                        <div className="col-lg-2">
                            <img src={dumm2} className="w-100 border-radius__10" alt="" />
                        </div>
                        <div className="col-lg-2">
                            <img src={dumm3} className="w-100 border-radius__10" alt="" />
                        </div>
                        <div className="col-lg-2">
                            <img src={dumm3} className="w-100 border-radius__10" alt="" />
                        </div>
                        <div className="col-lg-2">
                            <img src={dumm3} className="w-100 border-radius__10" alt="" />
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br />
            </div>
            <div className="container-fluid hero-container mt-5" style={{ background: `url(${pattern}) 100%` }}>
                <div className="container">
                    <div className="row mx-0 align-items-center">
                        <div className="col-lg-8">
                            <h3 className="font-poppins-semibold mb-3">DEM's</h3>
                            <p className="w-75 lh__180cent">Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit. Malesuada sit feugiat etiam risus, massa sit. Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit. Malesuada sit feugiat etiam risus, massa sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit.</p>                                
                        </div>
                        <div className="col-lg-4 pl-0 pr-4">
                            <div className="border-radius__24 border bw__4">
                                <img src={demsImg} className="w-100 border-radius__24 border bw__2" alt="" style={{ transform: "translate(20px, -16px)"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}

