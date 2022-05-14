import React from 'react'
import { Link } from 'react-router-dom'
import './StoryBottom.css'
import Pdf from '../../../../PrivacyPolicy.pdf';

const StoryFooter = ({mForFooter}) => {
    return (
        <div className={`story-footer ${mForFooter} `}>
            <div className="story-footer-left story-footer-left-desk">
                <Link to='/wearefx'>Home</Link>
                <Link className='active' to='/cases'>Cases</Link>
                <Link to='/story'>Our story</Link>
                <Link to='/hire'>Hire us</Link>
            </div>
            <div className="story-footer-left story-footer-left-mobile">
                <Link to='/wearefx'>Home</Link>
                <Link className='active' to='/casesMobile'>Cases</Link>
                <Link to='/storyMobile'>Our story</Link>
                <Link to='/hireMobile'>Hire us</Link>
            </div>
            <Link to='/wearefx'>
                <div className="story-footer-middle" />
            </Link>
            <div className="story-footer-right">
                <div>
                    <p>Wearefx © 2021 by </p>
                    <p className="violet_on_hover"> Brāh lab ﹤</p>
                </div>
                <p className="violet_on_hover">
                    <a className="violet_on_hover" target = "_blank"
                        href={Pdf}>
                        Privacy Policy
                    </a>
                </p>
                
            </div>
        </div>
    )
}

export default StoryFooter
