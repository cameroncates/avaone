import React from 'react'
import Navbar from './partials/Navbar'

export default function MainLayout({ children }) {
	return (
		<div className="bg__dark__gradient">
			<Navbar />
			<div>{ children }</div>
			Footer
		</div>
	)
}
