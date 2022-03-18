import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import bg from '../../assets/img/bg.png'
import profile from '../../assets/img/profile.png'
import DashboardTabs from '../../components/dashboard/DashboardTabs'

export default function DashboardContainer({ children }) {
    const [sortOptions, setSortOptions] = useState(false), 
        [tabs, setTabs] = useState([]),
        [tabs1] = useState([
            { name: "Collected", key: "collected", amount: "123" },
            { name: "Created", key: "created", amount: "123" },
            { name: "Activity", key: "activity", amount: "123" },
            { name: "Offers", key: "offers", amount: "123" },
        ]),
        [tabs2] = useState([
            { name: "Items", key: "items" },
            { name: "Activity", key: "activity" },
            { name: "Inventory", key: "inventory" },
            { name: "Customer DB", key: "customer-db" },
        ]),
        [tabs3] = useState([
            { name: "Items", key: "items" },
            { name: "Customers DB", key: "customers-db" },
            { name: "Sold Items", key: "sold-items" },
            { name: "Inventory", key: "inventory" },
        ]),
        { pathname } = useLocation(),
        controller = pathname.split("/")[1],
        action = pathname.split("/")[2]

        
        useEffect(() => {
            switch(action) {
                case "collected":
                case "created":
                    setTabs(tabs1)
                    setSortOptions(false)
                    break

                case "activity":
                case "items":
                    setTabs(tabs2)
                    setSortOptions(true)
                    break

                case "inventory":
                case "sold-items":
                case "customers-db":
                    setTabs(tabs3)
                    setSortOptions(true)
                    break
                
                default:
                    setTabs(tabs1)
            }
        }, [])

    return (  
        <div className="container-fluid bg__dark__gradient px-0">
            <div className="container-fluid hero-container pt-5 pb-4" style={{ background: `url(${bg}) 100% ` }}>
                <div className="container text-center mt-5 pt-5 mb-0 pb-0">
                    <img src={profile} className="round__profile__picture p-0 mb-0 box-shadow__purple" />
                    <p className="small mt-3 ls__2px">Joined Dec 2014</p>
                    <h1 className="font-poppins-bold ls__2px position-relative d-inline-block">
                        Vladmir Djukic 
                        <span className="mdi mdi-circle-medium position-absolute text__green" style={{ transform: "translate(-5px, -15px)"}}></span>
                    </h1>
                    <div className="w-100 mt-3">
                        <p className="d-inline-block bg__dark3 border-radius__20 px-4 py-2">2346782.23423</p>
                    </div>
                    <div className="w-100 text-right">
                        <Link to="/upload-product" className="btn bg__dark4 px-4 btn__outline__gradient py-1 border-radius__24">
                            <span className="d-flex align-items-center text-white">
                                <span className="mdi mdi-plus mr-2"></span>
                                Create New Product
                            </span>
                        </Link>
                    </div>
                </div>
            </div>    
            <div className="container">
                <DashboardTabs tabs={tabs} />
                { children }
            </div>
        </div>       
    )
}
