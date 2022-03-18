import React from 'react'
import MainLayout from '../layout/MainLayout'
import HeroContainer from '../layout/partials/HeroContainer'
import image from '../assets/img/image4.png'
import CollapsableCard from '../components/cards/CollapsableCard'
import PriceHistoryIcon from '../assets/img/activity.svg'
import BidAmountEnterModal from '../components/modals/BidAmountEnterModal'
import { Link } from 'react-router-dom'
import BidSuccessfulModal from '../components/modals/BidSuccessfulModal'

export default function NftDetails() {
    return (
        <MainLayout>
            {/* MODALS */}
            <BidAmountEnterModal />
            <BidSuccessfulModal />
            
            <HeroContainer>
                <div className="container mt-5 pt-5">
                    <div className="row mx-0">
                        <div className="col-lg-3 pl-0 pr-4">
                            <img src={image} className="w-100" alt="" />
                        </div>
                        <div className="col-lg-9 ls__1px">
                            <p className="d-inline-block text-white bg__skyblue px-3 py-1 border-radius__24 ls__1px">Created Team</p>
                            <h1 className="font-poppins-bold">Virtual Real Estate</h1>
                            <p className="ls__1px">Owned By <span className="text__skyblue ls__1px">SCJIW...</span></p>
                            <div className="w-100 border-bottom border-color__light"></div>
                            <div className="row mx-0 mt-4">
                                <div className="col-lg-12 px-0">
                                    <div className="row mx-0 align-items-center">
                                        <div className="col-lg-3 ls__1px px-0">
                                            <h5>Current Price</h5>
                                            <h1 className="font-poppins-bold mb-0">$ 90.00</h1>
                                        </div>
                                        <div className="col-lg-9 text-right px-0">
                                            <button className="btn bg-white text__purple px-5 py-2 mr-4 border-radius__24">Buy Now</button>
                                            <button className="btn text-white btn__outline__gradient px-5 py-2 mr-4 border-radius__22">Make Offer</button>
                                            <button 
                                                data-toggle="modal" data-target="#bidAmountEnter"
                                                className="btn text-white btn__outline__gradient px-5 py-2 border-radius__22">Bid</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HeroContainer>
            <div className="container pt-5 pb-5 px-0">
                <div className="row mx-0">
                    <div className="col-lg-6 pr-4 mb-4">
                        <CollapsableCard title="Description">
                            <p className="ls__1px lh__180cent small px-2 pt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </CollapsableCard>
                    </div>
                    <div className="col-lg-6 pl-4 mb-4">
                        <CollapsableCard title="Price History">
                            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                <div className="row mx-0 justify-content-center">
                                    <img src={PriceHistoryIcon} alt="" className="col-lg-6" />
                                    <h2 className="col-lg-12 text-center text__dark3 py-4">No Activity Yet</h2>
                                </div>
                            </div>
                        </CollapsableCard>
                    </div>
                    <div className="col-lg-6 pr-4 mb-4">
                        <CollapsableCard title="About CreatedTeam">
                            <p className="ls__1px lh__180cent small px-2 pt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </CollapsableCard>
                    </div>
                    <div className="col-lg-6 pr-4 mb-4">
                        <CollapsableCard title="Listings">
                            <table className="table small border-0 mt-4 text-center align-middle" style={{ minWidth: "540px" }}>
                                <thead className="border-0 small">
                                    <tr>
                                        <td className="border-0 font-poppins-semibold">PRICE</td>
                                        <td className="border-0 font-poppins-semibold">USD PRICE</td>
                                        <td className="border-0 font-poppins-semibold">QUANTITY</td>
                                        <td className="border-0 font-poppins-semibold">EXPIRATION</td>
                                        <td className="border-0 font-poppins-semibold">FROM</td>
                                    </tr>
                                </thead>
                                <tbody className="small">
                                    <tr>
                                        <td style={{ minWidth: "70px" }} className="border-color__light2 py-3">0.02 ETH</td>
                                        <td className="border-color__light2 py-3">$90.00</td>
                                        <td className="border-color__light2 py-3">1</td>
                                        <td className="border-color__light2 py-3">SKQOC</td>
                                        <td className="border-color__light2 py-3 font-poppins-semibold text__skyblue">CreatedTeam</td>
                                        <td className="border-color__light2 py-3 font-poppins-semibold text__skyblue">                                        
                                            <button className="btn text-white btn__outline__gradient btn__outline__gradient__grey border-radius__22 px-2 py-0">
                                                <span className="small">Buy Now</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ minWidth: "70px" }} className="border-color__light2 py-3">0.02 ETH</td>
                                        <td className="border-color__light2 py-3">$90.00</td>
                                        <td className="border-color__light2 py-3">1</td>
                                        <td className="border-color__light2 py-3">SKQOC</td>
                                        <td className="border-color__light2 py-3 font-poppins-semibold text__skyblue">CreatedTeam</td>
                                        <td className="border-color__light2 py-3 font-poppins-semibold text__skyblue">                                        
                                            <button className="btn text-white btn__outline__gradient btn__outline__gradient__grey border-radius__22 px-2 py-0">
                                                <span className="small">Buy Now</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ minWidth: "70px" }} className="border-color__light2 py-3">0.02 ETH</td>
                                        <td className="border-color__light2 py-3">$90.00</td>
                                        <td className="border-color__light2 py-3">1</td>
                                        <td className="border-color__light2 py-3">SKQOC</td>
                                        <td className="border-color__light2 py-3 font-poppins-semibold text__skyblue">CreatedTeam</td>
                                        <td className="border-color__light2 py-3 font-poppins-semibold text__skyblue">                                        
                                            <button className="btn text-white btn__outline__gradient btn__outline__gradient__grey border-radius__22 px-2 py-0">
                                                <span className="small">Buy Now</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ minWidth: "70px" }} className="border-color__light2 py-3">0.02 ETH</td>
                                        <td className="border-color__light2 py-3">$90.00</td>
                                        <td className="border-color__light2 py-3">1</td>
                                        <td className="border-color__light2 py-3">SKQOC</td>
                                        <td className="border-color__light2 py-3 font-poppins-semibold text__skyblue">CreatedTeam</td>
                                        <td className="border-color__light2 py-3 font-poppins-semibold text__skyblue">                                        
                                            <button className="btn text-white btn__outline__gradient btn__outline__gradient__grey border-radius__22 px-2 py-0">
                                                <span className="small">Buy Now</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>                            
                        </CollapsableCard>
                    </div>
                    <div className="col-lg-6 pr-4 mb-4">
                        <CollapsableCard title="Details" minHeight="150px">
                            <table className="table small border-0 mt-4 text-center align-middle" style={{ minWidth: "440px" }}>
                                <thead className="border-0 small">
                                    <tr>
                                        <td className="border-0 font-poppins-semibold">CONTRACT ADDRESS</td>
                                        <td className="border-0 font-poppins-semibold">TOKEN ID</td>
                                        <td className="border-0 font-poppins-semibold">TOKEN STANDARD</td>
                                        <td className="border-0 font-poppins-semibold">BLOCKCHAIN</td>
                                    </tr>
                                </thead>
                                <tbody className="small">
                                    <tr>
                                        <td className="border-color__light2 py-3">0.02 ETH</td>
                                        <td className="border-color__light2 py-3">5</td>
                                        <td className="border-color__light2 py-3">ERC-1155</td>
                                        <td className="border-color__light2 py-3">SKQOC</td>
                                    </tr>                                                                    
                                </tbody>
                            </table>                            
                        </CollapsableCard>
                    </div>
                    <div className="col-lg-6 pr-4 mb-4">
                        <CollapsableCard title="Offers" minHeight="150px">
                            <table className="table small border-0 mt-4 text-center align-middle" style={{ minWidth: "540px" }}>
                                <thead className="border-0 small">
                                    <tr>
                                        <td className="border-0 font-poppins-semibold">UNIT PRICE</td>
                                        <td className="border-0 font-poppins-semibold">USD UNIT PRICE</td>
                                        <td className="border-0 font-poppins-semibold">QUANITY</td>
                                        <td className="border-0 font-poppins-semibold">FLOOR DIFFERENCE</td>
                                        <td className="border-0 font-poppins-semibold">EXPIRATION</td>
                                        <td className="border-0 font-poppins-semibold">FROM</td>
                                    </tr>
                                </thead>
                                <tbody className="small">
                                    <tr>
                                        <td className="border-color__light2 py-3">0.02 ETH</td>
                                        <td className="border-color__light2 py-3">$90.00</td>
                                        <td className="border-color__light2 py-3">1</td>
                                        <td className="border-color__light2 py-3">413% above</td>
                                        <td className="border-color__light2 py-3">1 Month</td>
                                        <td className="border-color__light2 py-3 font-poppins-semibold text__skyblue">A215FR2...</td>
                                    </tr>                                                                    
                                </tbody>
                            </table>                            
                        </CollapsableCard>
                    </div>
                    <div className="col-lg-12 pr-4 mb-4">

                        <div className="border-color__light2 mt-3 bg__dark5 border-radius__21 px-4 py-4">
                            <div className="border-bottom  border-color__light2 pb-4 row mx-0 align-items-center">
                                <h4 className="col-lg-6 font-poppins-regular mb-0">NFT's Activtiy</h4>
                                <div className="col-lg-6 text-right">
                                    <div className="dropdown ml-2 pb-0 mb-0">
                                        <button 
                                            className="btn py-1 pr-1 btn__outline__gradient border-radius__5" 
                                            type="button" id="currencyList" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="pr-5 mr-5">Filter By</span> 
                                            <span className="mdi mdi-menu-down"></span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="currencyList">
                                            <Link className="dropdown-item" to="/nft-details">Action</Link>
                                            <Link className="dropdown-item" to="/nft-details">Another action</Link>
                                            <Link className="dropdown-item" to="/nft-details">Something else here</Link>
                                        </div>
                                    </div>                                   
                                </div>
                            </div>
                            <div>
                                <table className="table small border-0 mt-4 text-center align-middle" style={{ minWidth: "540px" }}>
                                    <thead className="border-0 small">
                                        <tr>
                                            <td className="border-0 font-poppins-semibold">TYPE</td>
                                            <td className="border-0 font-poppins-semibold">UNIT PRICE</td>
                                            <td className="border-0 font-poppins-semibold">QUANTITY</td>
                                            <td className="border-0 font-poppins-semibold">FROM</td>
                                            <td className="border-0 font-poppins-semibold">TO</td>
                                            <td className="border-0 font-poppins-semibold">TIME</td>
                                        </tr>
                                    </thead>
                                    <tbody className="small">
                                        <tr>
                                            <td className="border-color__light2 py-4">lIST</td>
                                            <td className="border-color__light2 py-4">3.120 ETH</td>
                                            <td className="border-color__light2 py-4">1</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">SKQOC..</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">Land_of_the_world</td>
                                            <td className="border-color__light2 py-4">A215FR2...</td>
                                        </tr>     
                                        <tr>
                                            <td className="border-color__light2 py-4">lIST</td>
                                            <td className="border-color__light2 py-4">3.120 ETH</td>
                                            <td className="border-color__light2 py-4">1</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">SKQOC..</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">Land_of_the_world</td>
                                            <td className="border-color__light2 py-4">A215FR2...</td>
                                        </tr>  
                                        <tr>
                                            <td className="border-color__light2 py-4">lIST</td>
                                            <td className="border-color__light2 py-4">3.120 ETH</td>
                                            <td className="border-color__light2 py-4">1</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">SKQOC..</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">Land_of_the_world</td>
                                            <td className="border-color__light2 py-4">A215FR2...</td>
                                        </tr>  
                                        <tr>
                                            <td className="border-color__light2 py-4">lIST</td>
                                            <td className="border-color__light2 py-4">3.120 ETH</td>
                                            <td className="border-color__light2 py-4">1</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">SKQOC..</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">Land_of_the_world</td>
                                            <td className="border-color__light2 py-4">A215FR2...</td>
                                        </tr>  
                                        <tr>
                                            <td className="border-color__light2 py-4">lIST</td>
                                            <td className="border-color__light2 py-4">3.120 ETH</td>
                                            <td className="border-color__light2 py-4">1</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">SKQOC..</td>
                                            <td className="border-color__light2 py-4 font-poppins-semibold text__skyblue">Land_of_the_world</td>
                                            <td className="border-color__light2 py-4">A215FR2...</td>
                                        </tr>                                                                 
                                    </tbody>
                                </table>           
                            </div>
                        </div>                 
                    </div>
                </div>
            </div>

        </MainLayout>        
    )
}
