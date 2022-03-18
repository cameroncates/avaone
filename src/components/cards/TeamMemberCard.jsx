import React from 'react'
import photo from '../../assets/img/profile.png'

export default function TeamMemberCard() {
    return (
        <div className="w-100 bg-white text-dark text-center border-radius__20">
            <div style={{ transform: "translateY(-50px)"}}>
                <img src={photo} alt="" className="round__profile__picture p-0 mb-0 box-shadow__purple" />
                <div className="pb-0 pt-4 mt-1">
                    <h4 className="font-poppins-semibold mb-1">Ronald Richards</h4>
                    <p className="small mb-0">Google inc.</p>
                </div>
            </div>
        </div>
    )
}
