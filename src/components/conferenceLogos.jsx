import React from 'react'
import scrs from "../components/scrsLogo.jpg"
import diamond from "../components/assests/diamond.jpeg"
import logo1 from "../components/assests/logo1.jpg"
import iic from "../components/assests/IIClogo.jpg"
import tup from "../components/assests/TUPlogo.jpg"

const ConferenceLogos = () => {
    return (
        <>
            <div className="mx-auto my-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <img src={diamond} alt="Knowledge Partner here" className="h-20 w-24 sm:h-36 sm:w-40" />
                <img src={scrs} alt="Knowledge Partner here" className="h-20 w-24 sm:h-36 sm:w-40" />
                <img src={iic} alt="Knowledge Partner here" className="h-20 w-24 sm:h-34 sm:w-40" />
                <img src={tup} alt="Knowledge Partner here" className="h-20 w-24 sm:h-36 sm:w-48" />
                <img src={logo1} alt="Knowledge Partner here" className="h-20 w-24 sm:h-36 sm:w-40" />
            </div>
        </>
    )
}

export default ConferenceLogos