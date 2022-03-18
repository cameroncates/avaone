import React from 'react'
import SidebarContainer from '../../components/dashboard/SidebarContainer'
import MainLayout from '../../layout/MainLayout'
import DashboardContainer from '../../layout/partials/DashboardContainer'
import target from '../../assets/img/icons/target.svg'
import chatDots from '../../assets/img/icons/chat-dots.svg'
import chatDotsOutline from '../../assets/img/icons/chat-dots-outline.svg'
// import {  } from 'react-router-dom'

export default function CustomerDB() {

    return (
        <MainLayout>
            <DashboardContainer>
                <div className="row mx-0">
                    <div className="col-lg-4 px-0">
                        <SidebarContainer />
                    </div>
                    <div className="col-lg-8">
                        <div className="bg__dark2 border-radius__20 py-4 px-4">
                            <div className="row mx-0 align-items-center border-bottom border-color__light2 pb-3 mx-2 mt-4">
                                <h4 className="col-lg-6 mb-0 px-0">Customers Details</h4>
                            </div>

                            <table className="table small border-0 mt-5 text-center align-middle" style={{ minWidth: "540px" }}>
                                <thead className="border-0 small">
                                    <tr>
                                        <td className="border-0 font-poppins-semibold">ID</td>
                                        <td className="border-0 font-poppins-semibold">NAME</td>
                                        <td className="border-0 font-poppins-semibold">SHIPMENT ADDRESS</td>
                                        <td className="border-0 font-poppins-semibold">LABEL ACCESSES</td>
                                        <td className="border-0 font-poppins-semibold">CHAT</td>
                                    </tr>
                                </thead>
                                <tbody className="small">
                                    {[1, 2, 3, 4, 5].map((_, key) => (
                                        <tr key={key}>
                                            <td className="border-color__light2 py-4">1</td>
                                            <td className="border-color__light2 py-4">Zelko Radic</td>
                                            <td className="border-color__light2 py-4">Office 3, Black Lane Ave.NY</td>
                                            <td className="border-color__light2 py-4">NFT</td>
                                            <td className="border-color__light2 py-4">
                                                { key == 0 ? 
                                                    <img src={chatDots} width="18px" alt="" />
                                                : <img src={chatDotsOutline} width="18px" alt="" />
                                                }
                                            </td>
                                        </tr>     
                                    ))}
                                                                                         
                                </tbody>
                            </table>   
                            <div className="text-center w-100 pt-5 pb-4 border-top border-color__light2">
                                <button className="btn px-2 py-1 mdi mdi-chevron-left text-dark bg-white border-radius__5 mr-2"></button>
                                <button className="btn px-3 py-1 text-dark bg-white border-radius__5 mr-2"><span className="small">1</span></button>
                                <button className="btn px-3 py-1 text-dark bg-white border-radius__5 mr-2"><span className="small">2</span></button>
                                <button className="btn px-3 py-1 text-white bg__skyblue border-radius__5 mr-2"><span className="small">3</span></button>
                                <button className="btn px-3 py-1 text-dark bg-white border-radius__5 mr-2"><span className="small">4</span></button>
                                <button className="btn px-3 py-1 text-dark bg-white border-radius__5 mr-2"><span className="small">5</span></button>
                                <button className="btn px-2 py-1 mdi mdi-chevron-right text-dark bg-white border-radius__5"></button>
                            </div>                              
                        </div>
                    </div>
                </div>
            </DashboardContainer>

        </MainLayout>        
    )
}
