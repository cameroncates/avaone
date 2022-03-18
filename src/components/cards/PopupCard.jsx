import React from 'react'
import image from '../../assets/img/dems.png'

export default function PopupCard() {
    return (
        <div className="border-radius__24 border bw__4">
            <img src={image} className="w-100 border-radius__24 border bw__2" alt="" style={{ transform: "translate(20px, -16px)"}} />
        </div>
    )
}
