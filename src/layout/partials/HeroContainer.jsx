import React from 'react'
import bg from '../../assets/img/bg.png'

export default function HeroContainer({ children }) {
    return (         
        <div className="container-fluid hero-container py-5" style={{ background: `url(${bg}) 100%` }}>
            { children }
        </div>
    )
}
