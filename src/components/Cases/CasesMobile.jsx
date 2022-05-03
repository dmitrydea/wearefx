import React from 'react'
import './Cases.css'
import SwiperSLider from '../MainPage/Swiper/SwiperSLider'
import { Link } from 'react-router-dom'

const CasesMobile = () => {
    return (
        <div>
            <Link to="/casesfullmobile">
                <div className="caseBtnSlider">
                    <p>
                        View
                        <br />
                        cases
                        <br />
                        list
                    </p>
                </div>
            </Link>
            <SwiperSLider />
            <div className="main__top">
                <Link to="/wearefx">
                    <div className="main__logo" />
                </Link>
            </div>
        </div>
    )
}

export default CasesMobile
