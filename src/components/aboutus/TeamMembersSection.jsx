import React from 'react'
import pattern from '../../assets/img/pattern.svg'
import topShadow from '../../assets/img/top-dark-shadow.svg'
import VideoPlayCard from '../cards/VideoPlayCard'
import bgOverlay from '../../assets/img/blue-purple-overlay.svg'
import TeamMemberCard from '../cards/TeamMemberCard'

export default function TeamMembersSection() {
    return (
        <div className="position-relative pb-5 overflow__hidden" style={{ backgroundColor: "#232323" }}>
            <div className="text-center container pb-5">
                <h1 className="font-poppins-semibold mb-3">Our Team Members</h1>
                <p className="lh__180cent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque rhoncus eget iaculis vitae elementum, in sagittis, hac.  </p>                
            </div>
            <img src={bgOverlay} className="position-absolute w-100 h-100" style={{ top: "15%" }} />
            <div className="container-fluid hero-container mt-5 px-0 mb-5 pb-5" style={{ background: `url(${pattern}) 100%` }}>
                <div className="container">
                    <div className="row mx-0 justify-content-center align-items-center mt-5 pt-5 px-5">
                        <div className="col-lg-4 mb-5 pb-5">
                            <TeamMemberCard />
                        </div>
                        <div className="col-lg-4 mb-5 pb-5">
                            <TeamMemberCard />
                        </div>
                        <div className="col-lg-4 mb-5 pb-5">
                            <TeamMemberCard />
                        </div>
                        <div className="col-lg-4 mb-5 pb-5">
                            <TeamMemberCard />
                        </div>
                        <div className="col-lg-4 mb-5 pb-5">
                            <TeamMemberCard />
                        </div>
                        <div className="col-lg-4 mb-5 pb-5">
                            <TeamMemberCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
