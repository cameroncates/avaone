import React from 'react'
import SidebarContainer from '../../components/dashboard/SidebarContainer'
import MainLayout from '../../layout/MainLayout'
import DashboardContainer from '../../layout/partials/DashboardContainer'
import photo from '../../assets/img/dumm1.png'

export default function Items() {
    return (
        <MainLayout>
            <DashboardContainer>
                <div className="row mx-0">
                    <div className="col-lg-4 px-0">
                        <SidebarContainer />
                    </div>
                    <div className="col-lg-8 pr-0">
                        <div className="bg__dark2 border-radius__20 py-4 px-3">
                            <div className="row mx-0">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(_ => (
                                    <div key={_} className="opacity-hover__1 col-lg-4 mb-4 pb-4 border-bottom border-color__light2">
                                        <div>
                                            <div className="position-relative">
                                                <img src={photo} className="w-100 border-radius__10" alt="" />
                                                <div className="w-100 opacity__0 transition__3 h-100 bg__dark__opaque2 border-radius__8 d-flex align-items-center justify-content-center position-absolute" style={{ left: 0, top: 0 }}>
                                                    <div className="text-center">
                                                        <h4 className="font-poppins-semibold">Blue Guard</h4>
                                                        <p>$ 120.95</p>
                                                        <button className="btn bg-white text-dark border-radius__24 px-4 py-1">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mx-0 small mt-3 pt-2">
                                                <p className="col-lg-6 px-0 mb-1">Blue_champ</p>
                                                <p className="col-lg-6 px-0 mb-1 text-right">Price</p>
                                            </div>
                                            <div className="row mx-0">
                                                <h6 className="col-lg-6 px-0 font-poppins-semibold">Blue Guard</h6>
                                                <h6 className="col-lg-6 px-0 font-poppins-semibold text-right">$ 120.95</h6>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardContainer>

        </MainLayout>        
    )
}
