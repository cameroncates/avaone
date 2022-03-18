import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function DashboardTabs({ tabs }) {
    
    const { pathname } = useLocation(),
        controller = pathname.split("/")[1],
        action = pathname.split("/")[2]
        
    return (
        <div className="my-4 pt-5 position-relative">
            <div className="bg__pinkblue__gradient w-100 h-100 position-absolute" style={{ top: 0, left: 0}}></div>
            <div className="row text-center justify-content-center bg__dark2 mx-0 zindex__2000 position-relative py-3 px-2 mb-4 border-radius__12">
                {tabs && tabs.map((tab, key) => (
                    <div key={key} className="col-lg-3">
                        <Link
                            to={`/dashboard/${tab.key}`} 
                            className={"btn font-poppins-semibold mb-1 text-white py-3 border-radius__18 border__dark2 px-5 " + (action == tab.key ? "bg__bluepurple__gradient " : "bg__transparent")}>
                                {tab.name} 
                                {tab.amount ?
                                    <>
                                        <br />
                                        <span className="text__grey2 font-poppins-regular">(123)</span>                                    
                                    </>  : null
                                }
                        </Link>
                    </div>                    
                ))}
            </div>
        </div>
    )
}
