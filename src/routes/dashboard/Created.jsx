import React from 'react'
import SidebarContainer from '../../components/dashboard/SidebarContainer'
import MainLayout from '../../layout/MainLayout'
import DashboardContainer from '../../layout/partials/DashboardContainer'
import photo from '../../assets/img/dumm1.png'
import ExploreCollectiblesCard from '../../components/cards/ExploreCollectiblesCard'

export default function Created() {
    return (
        <MainLayout>
            <DashboardContainer>
                <div className="row mx-0">
                    <div className="col-lg-12">
                        <div className="bg__dark2 border-radius__20 py-4 px-3">
                            <div className="row mx-0 mt-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(_ => (
                                    <div key={_} className="col-lg-3 mb-5 pb-0 px-4 border-bottom border-color__light2">
                                        <ExploreCollectiblesCard />
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
