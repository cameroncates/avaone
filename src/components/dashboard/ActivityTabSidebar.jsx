import React from 'react'
import CollectionsDropdown from './sidebardropdowns/CollectionsDropdown'
import EventType2Dropdown from './sidebardropdowns/EventType2Dropdown'
import FiltersDropdown from './sidebardropdowns/FiltersDropdown'
import PriceDropdown from './sidebardropdowns/PriceDropdown'

export default function ActivityTabSidebar() {
    return (
        <div>            
            <FiltersDropdown />
            <EventType2Dropdown />
        </div>
    )
}
