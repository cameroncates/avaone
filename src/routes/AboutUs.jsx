import React from 'react'
import AboutUsStats from '../components/aboutus/AboutUsStatsSection'
import AboutUsVideoSection from '../components/aboutus/AboutUsVideoSection'
import TeamMembersSection from '../components/aboutus/TeamMembersSection'
import PopupCard from '../components/cards/PopupCard'
import MainLayout from '../layout/MainLayout'
import HeroContainer from '../layout/partials/HeroContainer'

export default function AboutUs() {
    return (
        <MainLayout>
            <HeroContainer>
                <div className="container mt-5 pt-5">
                    <div className="row mx-0">
                        <div className="col-lg-7 align-self-center">
                            <h1 className="font-poppins-bold mb-3">BUILDS THE FUTURE OF THE TECHNOLOGY</h1>
                            <p className="lh__180cent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-4">
                            <PopupCard />
                        </div>
                        <div className="col-lg-12">
                            <AboutUsStats />
                        </div>
                    </div>
                </div>
            </HeroContainer>
            
            <div className="container-fluid px-0">
                <AboutUsVideoSection />
                <TeamMembersSection />
            </div>

        </MainLayout>        
    )
}
