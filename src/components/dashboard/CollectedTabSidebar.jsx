import React from 'react'
import CollectionsDropdown from './sidebardropdowns/CollectionsDropdown'
import EventTypeDropdown from './sidebardropdowns/EventTypeDropdown'
import FiltersDropdown from './sidebardropdowns/FiltersDropdown'
import PriceDropdown from './sidebardropdowns/PriceDropdown'

export default function CollectedTabSidebar() {
    return (
        <div>            
            <FiltersDropdown />
            <EventTypeDropdown />
            <PriceDropdown />
            <CollectionsDropdown />
        </div>
    )
}
