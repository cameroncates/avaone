import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import $ from 'jquery'

import logo from '../../assets/img/logo.svg'

export default class Navbar extends Component {
    state = {
        page: null,
        links: [
            { name: "Home", href: "/" },
            { name: "About", href: "/aboutus" },
            { name: "Learn", href: "/learn" },
            { name: "Explore", href: "/explore/trending" },
            { name: "Ava Market", href: "/learn" },
            { name: "Aventure", href: "/learn" },
        ],
        bgColor: '',
        textColor: 'text-white',
        maxHeight: '500px',
        logo: logo,
        navOpen: false,
        searchOpen: false,
        active: null,
    }  
    scrollTop() {
        $('html, body').animate({
            scrollTop: 0
        }, 699) 
    }  
    componentDidMount() {
        let $this = this
        this.setState({
            ...this.state,
            page: window.location.pathname
        })
        $(document).ready(function() {
            $(window).on('scroll', function() {
                let scrollTop = $(this).scrollTop(),
                    h = $(this).height()
                if (scrollTop > (h * 0.10)) {
                    $this.setState({
                        ...$this.state,
                        bgColor: 'bg__dark__gradient',
                        maxHeight: '0px',
                        active: null,
                    })
                } else {
                    $this.setState({
                        ...$this.state,
                        bgColor: 'bg__transparent',
                        maxHeight: '400px',
                        active: null,
                    })
                }
            })        

            $("#mobile__view__container").find("*")
            .click((ev) => {
                let tagName = $(ev.currentTarget).prop("tagName") 

                if (tagName == "A") {
                    $this.setState({
                        ...$this.state,
                        navOpen: false,
                        searchOpen: false 
                    })
                }
            })
    
        })
    }

    render() {
        let { textColor, bgColor, navOpen, searchOpen, active } = this.state
        // $("body").css({
        //     overflowY: navOpen ? "hidden" : "auto"
        // })
        return (
            <div className="position-fixed zindex__4000 w-100">
                <div id="navbar" className={"container-fluid 100 px-0 transition__3 pb-1 " + bgColor}>
                    <div className="container pt-0">
                        <div className="row mx-0 align-items-center justify-content-between py-3">
                            <div className="px-0">
                                <Link   
                                    onClick={() => this.scrollTop()} 
                                    to="/" className="btn px-0">
                                    <img src={this.state.logo} className="transition__3" width="200px" alt="" />
                                </Link>                            
                            </div>
                            <div className="text-center  px-0 align-self-center d-none d-lg-block mt-2 text-white">
                                {this.state.links && this.state.links.map((link, i) => (
                                    <Link key={i} to={link.href} className="py-2 text-white mx-4">{ link.name }</Link>   
                                ))}
                            </div>
                            <button className="btn bg-transparent px-5 btn__outline__gradient">Login</button>
                        </div>
                    </div>
                </div>                
                <div id="mobile__view__container" className="w-100 bg-primary-opaque position-relative transition" style={{ maxHeight: navOpen ? "1000px" : "0px", overflowY: "hidden" }}>
                    <div id="accordion" className="py-2 px-2 overflow-auto nav__dropdown__height">
                        <div className="card bg-transparent border-0 border-bottom-secondary border-radius-0">
                            <div className="card-header px-2 border-0 pb-1" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn text-white ls-2 d-flex w-100 justify-content-between align-items-center px-2" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span>ABOUT US</span>
                                        <span className="mdi mdi-chevron-right mdi-24px"></span>
                                    </button>
                                </h5>
                            </div>

                            <div id="collapseOne" className="collapse collapsed" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body mt-0 pt-0 mb-3">
                                    <div className="w-25 border-bottom-cyan border-w2 mb-2 mt-1"></div>
                                        <Link to="/what-we-do" className="d-block text-white small py-2">What We Do</Link>
                                        <Link to="/national-security" className="d-block text-white small py-2">How We Serve National Security</Link>
                                        <Link to="/perception-management" className="d-block text-white small py-2">How We Provide Perception Management</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-transparent border-0 border-bottom-secondary border-radius-0">
                            <div className="card-header px-2 border-0 pb-1" id="headingTwo">
                                <h5 className="mb-0">
                                    <button className="btn text-white ls-2 d-flex w-100 justify-content-between align-items-center px-2" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <span>CAPABILITIES</span>
                                        <span className="mdi mdi-chevron-right mdi-24px"></span>
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body mt-0 pt-0 mb-3">
                                    <div className="w-25 border-bottom-cyan border-w2 mb-2 mt-1"></div>
                                    <div className="row mx-0 px-0 py-4">
                                        <div className="col-lg-6 px-0">
                                            <h6 className="text-white small">Threat Intelligence</h6>
                                            <Link to="/capabilities/threat_intelligence/terrorism_threat_investigation" className="dp-item d-block py-2 text-light-blue small hover-none">Terrorism and threat investigation</Link>
                                            <Link to="/capabilities/threat_intelligence/propaganda_investigation" className="dp-item d-block py-2 text-light-blue small">Propaganda Investigation</Link>
                                            <Link to="/capabilities/threat_intelligence/crime_geomapping" className="dp-item d-block py-2 text-light-blue small">Crime Geomapping</Link>
                                            <div className="w-100 my-4"></div>
                                            <h6 className="text-white small">Perception Management Intelligence</h6>
                                            <Link to="/capabilities/perception_management_intelligence/narrative_influencers_analysis" className="dp-item d-block py-2 text-light-blue small">Narrative And Influencers Analysis</Link>
                                            <Link to="/capabilities/perception_management_intelligence/reputation_intelligence" className="dp-item d-block py-2 text-light-blue small">Reputation Intelligence</Link>
                                            <div className="w-100 my-4"></div>
                                            <h6 className="text-white small">National Security Intelligence</h6>
                                            <Link to="/capabilities/national_security_intelligence/law_order_maintainance" className="dp-item d-block py-2 text-light-blue small">Law & Order Maintainance</Link>
                                            {/* <Link to="/capabilities/national_security_intelligence/satellite_monitoring_system" className="dp-item d-block py-2 text-light-blue small">Satellite Monitoring System</Link> */}
                                            <Link to="/capabilities/national_security_intelligence/national_database_fusion_centre" className="dp-item d-block py-2 text-light-blue small">National Database Fusion Centre</Link>
                                            <Link to="/capabilities/national_security_intelligence/cdr_interception" className="dp-item d-block py-2 text-light-blue small">CDR Interception</Link>
                                            <Link to="/capabilities/national_security_intelligence/kidnapping_missing_persons_investigation" className="dp-item d-block py-2 text-light-blue small">Kidnapping & Missing Persons Investigation</Link>
                                            <Link to="/capabilities/national_security_intelligence/external_threats_detection" className="dp-item d-block py-2 text-light-blue small">External Threats Detection</Link>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div className="card bg-transparent border-0 border-bottom-secondary border-radius-0">
                            <div className="card-header px-2 border-0 pb-0" id="headingThree">
                                <h5 className="mb-0">
                                    <button className="btn text-white ls-2 d-flex w-100 justify-content-between align-items-center px-2" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        <span>PRODUCTS</span>
                                        <span className="mdi mdi-chevron-right mdi-24px"></span>
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                <div className="card-body mt-0 pt-0 mb-3">
                                    <div className="w-25 border-bottom-cyan border-w2 mb-2 mt-1"></div>
                                    <Link to="/owlsense" className="d-block text-white small py-2">OwlSense AI</Link>
                                    <Link to="/rapideye" className="d-block text-white small py-2">RapidEye Software</Link>
                                    {/* <Link to="/thuraya-satellite" className="d-block text-white small py-2">Satellite Monitoring System</Link> */}
                                    <Link to="/perception-management-tool" className="d-block text-white small py-2">Perception Management Tool</Link>           
                                </div>                                
                            </div>
                        </div>
                    </div>     
                    <div className="row mx-0 w-100 text-center border-top-secondary position-absolute bottom-0 bg-primary-opaque d-none">
                        <div className="col-3 p-4 border-right-secondary">
                            <a href="https://www.facebook.com/Rapidev.Official/" target="_blank">
                                <img src="" alt="" className="p-2 w-100" />
                            </a>
                        </div>
                        <div className="col-3 p-4 border-right-secondary">
                            <a href="https://twitter.com/rapidevd" target="_blank">
                                <img src="" alt="" className="p-2 w-100" />
                            </a>
                        </div>
                        <div className="col-3 p-4 border-right-secondary">
                            <a href="https://www.instagram.com/rapidev.pk" target="_blank">
                                <img src="" alt="" className="p-2 w-100" />
                            </a>
                        </div>
                        <div className="col-3 p-4 border-right-secondary">
                            <a href="https://www.linkedin.com/company/rapidev/mycompany/" target="_blank">
                                <img src="" alt="" className="p-2 w-100" />
                            </a>
                        </div>
                    </div>               
                </div>          
            </div>
        )
    }
}
