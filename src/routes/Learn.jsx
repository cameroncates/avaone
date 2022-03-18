import React from 'react'
import Faqs from '../components/learn/Faqs'
import MainLayout from '../layout/MainLayout'
import HeroContainer from '../layout/partials/HeroContainer'

export default function Learn() {
    return (
        <MainLayout>
            <HeroContainer>
                <div className="container mt-5 pt-5">
                    <div className="row mx-0 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="font-poppins-bold display-4 mb-3">HELP DESK</h1>
                            <p className="lh__180cent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                        <div className="col-lg-6 mt-4">
                            <div className="input-group flex-nowrap border border-radius__8 bg__light4 bw__2">
                                <input type="text" className="w-100 bg-transparent py-3 border-0 px-3 placeholder__white text-white" placeholder="Search" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent border-0 text-white mdi mdi-menu-down mdi-24px"></span>
                                </div>
                            </div>                 
                        </div>
                        <div className="col-lg-12">
                            <Faqs />
                        </div>
                    </div>
                </div>
            </HeroContainer>

        </MainLayout>        
    )
}
