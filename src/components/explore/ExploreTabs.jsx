import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function ExploreTabs({ props }) {
    const [tabs] = useState([
        { name: "Trending", key: "trending" },
        { name: "Collectibles", key: "collectibles" },
        { name: "Arts", key: "arts" },
        { name: "Photography", key: "photography" },
        { name: "Utility", key: "utility" },
        { name: "Virtual Words", key: "virtual-words" },
    ]),
        { pathname } = useLocation(),
        controller = pathname.split("/")[1],
        action = pathname.split("/")[2]

    return (
        <div className="my-5 pt-5 position-relative">
            <div className="bg__pinkblue__gradient w-100 h-100 position-absolute" style={{ top: 0, left: 0}}></div>
            <div className="row text-center justify-content-center bg__dark2 mx-0 zindex__2000 position-relative py-3 px-2 mb-4 border-radius__12">
                {tabs && tabs.map((tab, key) => (
                    <div key={key} className="col-lg-2">
                        <Link
                            to={`/explore/${tab.key}`} 
                            className={"btn font-poppins-semibold mb-1 text-white py-3 border-radius__18 border__dark2 px-4 " + (action == tab.key ? "bg__bluepurple__gradient " : "bg__transparent")}>{tab.name}</Link>
                    </div>                    
                ))}
            </div>
        </div>
    )
}
