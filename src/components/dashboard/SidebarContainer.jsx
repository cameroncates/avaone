import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ActivityTabSidebar from './ActivityTabSidebar'
import CollectedTabSidebar from './CollectedTabSidebar'
import DashboardTabs from './DashboardTabs'
import InventoryTabSidebar from './InventoryTabSidebar'
import ItemsTabSidebar from './ItemsTabSidebar'

export default function SidebarContainer({ route, navigator }) {
    const { pathname } = useLocation(),
        controller = pathname.split("/")[1],
        action = pathname.split("/")[2]

    const Sidebar = useMemo(() => {
        return () => {
            switch(action) {
                case "collected":
                    return (<CollectedTabSidebar />)
                
                case "activity":
                    return (<ActivityTabSidebar />)

                case "items":
                    return (<ItemsTabSidebar />)

                case "inventory":
                case "sold-items":
                case "customers-db":
                    return (<InventoryTabSidebar />)
                    
                default:
                    return (<CollectedTabSidebar />)
            }
        }
    }, [action])
    
    return (
        <div className="bg__dark2 border-radius__20 pt-4 pb-2 px-4">
            <Sidebar />
        </div>
    )
}
