import React from 'react'
import SidebarContainer from '../../components/dashboard/SidebarContainer'
import MainLayout from '../../layout/MainLayout'
import DashboardContainer from '../../layout/partials/DashboardContainer'
import img1 from '../../assets/img/cart/cartimg1.png'
import img2 from '../../assets/img/cart/img2.png'
import img3 from '../../assets/img/cart/img3.png'
import img4 from '../../assets/img/cart/img4.png'
import img5 from '../../assets/img/cart/img5.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SoldItems() {
    const [products] = useState([
        { img: img1, customer: "Zelko Radic" },
        { img: img2, customer: "Mark Smith" },
        { img: img3, customer: "Adam K." },
        { img: img4, customer: "Shaun Jr." },
        { img: img5, customer: "Mark Smith" }
    ])
    return (
        <MainLayout>
            <DashboardContainer>
                <div className="row mx-0">
                    <div className="col-lg-4 px-0">
                        <SidebarContainer />
                    </div>
                    <div className="col-lg-8 pr-0">
                        <div className="bg__dark2 border-radius__20 py-4 px-3">
                            <div className="row mx-0 mb-4 pb-3 pt-3">
                                <h6 className="col-lg-6 font-poppins-semibold">Product</h6>
                                <div className="row mx-0 col-lg-6 px-0 text-center">
                                    <h6 className="col-lg-4 px-0 font-poppins-semibold">Customer</h6>
                                    <h6 className="col-lg-4 px-0 font-poppins-semibold">Quantity</h6>
                                    <h6 className="col-lg-4 pl-0 pr-4 text-right font-poppins-semibold">Total</h6>
                                </div>
                            </div>
                            {products && products.map((product, i) => (
                                <div key={i} className="mb-3 border-bottom border-color__light3">
                                    <div to="/" className="row mx-0 py-3 mb-3 hover__cartitem transition__3 border-radius__10 text-white text-decoration__none">
                                        <div className="col-lg-6 row mx-0 align-items-center px-0">
                                            <div className="col-lg-5 px-3 position-relative">
                                                <img src={product.img} alt="" className="w-100 border-radius__10" />
                                                <button 
                                                    style={{ top: "-10px", right: "10px"}}
                                                    className="btn mdi mdi-close-circle mdi-16px p-0 bg-transparent text-white position-absolute"></button>
                                            </div>
                                            <div className="col-lg-7 px-0">
                                                <p className="small mb-0"><span className="small">ID: 3637</span></p>
                                                <p className="font-poppins-semibold px-0 mb-0">Ut diam consequat</p>
                                                <div className="row mx-0">
                                                    <p className="col-lg-4 mb-1 px-0">Color: </p>
                                                    <p className="col-lg-8 mb-1 px-0 font-poppins-semibold">Brown </p>
                                                    <p className="col-lg-4 px-0">Size: </p>
                                                    <p className="col-lg-8 px-0 font-poppins-semibold">XL </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mx-0 col-lg-6 px-0 text-center align-self-center">
                                            <p className="col-lg-4 px-0 font-poppins-semibold">{ product.customer }</p>
                                            {/* <p className="col-lg-4 px-0 font-poppins-semibold">2</p> */}
                                            <div className="col-lg-4 px-0 font-poppins-semibold">
                                                <div className="d-inline-block">
                                                    <div className="mx-auto text-dark d-flex align-items-center bg-white border-radius__24">
                                                        <button className="border-0 bg-transparent text-dark mdi mdi-minus-circle"></button>
                                                        <span className="mx-2 small">1</span>
                                                        <button className="border-0 bg-transparent text-dark mdi mdi-plus-circle"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="col-lg-4 pl-0 pr-4 font-poppins-semibold text-right">‎£219.00</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="text-center w-100 mt-5 pb-4">
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
