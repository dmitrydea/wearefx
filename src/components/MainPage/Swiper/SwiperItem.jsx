import React from 'react'
import { Link } from 'react-router-dom'
import './SwiperItem.css'

const SwiperItem = ({ linkTo, title, paragraph, current }) => {
    return (
        <div className="swiper-item">
            <div className='cases-mobile-bg'>
                <div className='cases-mobile-bg-overlay-sh'>
                    <div className='cases-mobile-bg-overlay'></div>
                </div>
                <div className='slide-content'>
                    <div>
                        <h3>{title}</h3>
                        <p>{paragraph}</p>
                    </div>
                    <div>
                        <span>{current}</span>/06
                    </div>
                </div>
                <div className="caseLinkIMP">
                    <Link to="/casesPersonalMobile/1">
                        <div className="casesBtn gradientBtn btm0">
                            <span className="swiper-item-p">
                                Explore
                                <br />
                                case
                                <br />
                                details
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SwiperItem
