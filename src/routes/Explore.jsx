import React from 'react'
import AboutUsStats from '../components/aboutus/AboutUsStatsSection'
import topShadow from '../assets/img/top-dark-shadow.svg'
import ExploreCollectiblesCard from '../components/cards/ExploreCollectiblesCard'
import ExploreTabs from '../components/explore/ExploreTabs'
import MainLayout from '../layout/MainLayout'
import HeroContainer from '../layout/partials/HeroContainer'

export default function Explore() {
    return (
        <MainLayout>
        <HeroContainer>
            <div className="container mt-5 pt-5">
                <div className="row mx-0 justify-content-center">
                    <div className="col-lg-9 text-center">
                        <h1 className="font-poppins-bold display-4 mb-3">EXPLORE COLLECTIBLES</h1>
                        <p className="lh__180cent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially. </p>
                    </div>
                    <div className="col-lg-12">
                        <ExploreTabs />
                    </div>
                </div>
            </div>
        </HeroContainer>
        <div className="container-fluid px-0" style={{ transform: "translateY(-110px)"}}>
            <img src={topShadow} className="w-100" alt="" />
            <div className="container" style={{ transform: "translateY(-25px)"}}>
                <div className="row mx-0">
                    <div className="col-lg-3 px-4 mb-3">
                        <ExploreCollectiblesCard href="/dashboard/collected" />
                    </div>
                    <div className="col-lg-3 px-4 mb-3">
                        <ExploreCollectiblesCard href="/dashboard/collected" />
                    </div>
                    <div className="col-lg-3 px-4 mb-3">
                        <ExploreCollectiblesCard href="/dashboard/collected" />
                    </div>
                    <div className="col-lg-3 px-4 mb-3">
                        <ExploreCollectiblesCard href="/dashboard/collected" />
                    </div>
                    <div className="col-lg-3 px-4 mb-3">
                        <ExploreCollectiblesCard href="/dashboard/collected" />
                    </div>
                    <div className="col-lg-3 px-4 mb-3">
                        <ExploreCollectiblesCard href="/dashboard/collected" />
                    </div>
                    <div className="col-lg-3 px-4 mb-3">
                        <ExploreCollectiblesCard href="/dashboard/collected" />
                    </div>
                    <div className="col-lg-3 px-4 mb-3">
                        <ExploreCollectiblesCard href="/dashboard/collected" />
                    </div>
                </div>
            </div>
        </div>
        </MainLayout>        
    )
}
