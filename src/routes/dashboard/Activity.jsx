import React from 'react'
import SidebarContainer from '../../components/dashboard/SidebarContainer'
import MainLayout from '../../layout/MainLayout'
import DashboardContainer from '../../layout/partials/DashboardContainer'
import target from '../../assets/img/icons/target.svg'
// import {  } from 'react-router-dom'

export default function Activity() {

    return (
        <MainLayout>
            <DashboardContainer>
                <div className="row mx-0">
                    <div className="col-lg-4 px-0">
                        <SidebarContainer />
                    </div>
                    <div className="col-lg-8">
                        <div className="bg__dark2 border-radius__20 py-4 px-4">
                            <div className="row mx-0 align-items-center border-bottom border-color__light2 pb-1 mx-2">
                                <h4 className="col-lg-6 mb-0 px-0">NFT'S Statistics</h4>
                                <div className="col-lg-6 text-right px-0">
                                    <button className="btn mdi p-0 bg-transparent text-white mdi-chevron-up mdi-36px"></button>
                                </div>
                            </div>
                            <div className="row mx-0 align-items-center border-bottom border-color__light2 pb-3 mx-2 mt-4">
                                <h4 className="col-lg-6 mb-0 px-0">NFT Details</h4>
                            </div>

                            <table className="table small border-0 mt-5 text-center align-middle" style={{ minWidth: "540px" }}>
                                <thead className="border-0 small">
                                    <tr>
                                        <td className="border-0 font-poppins-semibold">TYPE</td>
                                        <td className="border-0 font-poppins-semibold">ITEMS</td>
                                        <td className="border-0 font-poppins-semibold">PRICE</td>
                                        <td className="border-0 font-poppins-semibold">QUANTITY</td>
                                        <td className="border-0 font-poppins-semibold">FROM</td>
                                        <td className="border-0 font-poppins-semibold">TO</td>
                                        <td className="border-0 font-poppins-semibold">TIME</td>
                                    </tr>
                                </thead>
                                <tbody className="small">
                                    {[1, 2, 3, 4, 5].map((_, key) => (
                                        <tr key={key}>
                                            <td className="border-color__light2 py-4">List</td>
                                            <td className="border-color__light2 py-4">
                                                <div className="d-flex align-items-center">
                                                    <img src={target} width="20px" alt="" className="mr-2" />
                                                    Virtual real Estate
                                                </div>
                                            </td>
                                            <td className="border-color__light2 py-4">$90.00</td>
                                            <td className="border-color__light2 py-4">1</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">SKQOC..</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">Unamed</td>
                                            <td className="border-color__light2 py-4">1 hr ago</td>
                                        </tr>     
                                    ))}
                                                                                         
                                </tbody>
                            </table>                                 
                        </div>
                    </div>
                </div>
            </DashboardContainer>

        </MainLayout>        
    )
}
