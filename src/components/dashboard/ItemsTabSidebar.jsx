import React from 'react'
import CollectionsDropdown from './sidebardropdowns/CollectionsDropdown'
import EventTypeDropdown from './sidebardropdowns/EventTypeDropdown'
import FiltersDropdown from './sidebardropdowns/FiltersDropdown'
import PriceDropdown from './sidebardropdowns/PriceDropdown'
import SeriesDropdown from './sidebardropdowns/SeriesDropdown'
import StatusDropdown from './sidebardropdowns/StatusDropdown'

export default function ItemsTabSidebar() {
    return (
        <div>            
            <FiltersDropdown />
            <EventTypeDropdown />
            <PriceDropdown />
            <StatusDropdown />
            <SeriesDropdown />
        </div>
    )
}
