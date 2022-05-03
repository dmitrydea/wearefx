import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StoryFooter from '../Pages/StoryPage/StoryComponents/StoryBottom/StoryFooter'

const CasesFullMobile = () => {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className="story-mobile">
            <div className="mobile-header">
                <Link to="/storyMobile" className="link">
                    Our story
                </Link>
                <Link to="/wearefx" className="to-home"></Link>
                <Link to="/hireMobile" className="link">
                    hire us
                </Link>
            </div>           
            <div className="cases-full-array">
                <div>
                    <Link to="/casesPersonalMobile/1">
                        <div>
                            <p>Bond Delivery</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/casesPersonalMobile/1">
                        <div>
                            <p>Tvorchi</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/casesPersonalMobile/1">
                        <div>
                            <p>McDonald's</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/casesPersonalMobile/1">
                        <div>
                            <p>Chipsters</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/casesPersonalMobile/1">
                        <div>
                            <p>Puma Ukraine</p>
                        </div>
                    </Link>
                </div>
                <div
                    className={isClicked ? 'displayNone' : ''}
                    onClick={() => setIsClicked(!isClicked)}
                >
                    <div>
                        <p>LOAD MORE</p>
                    </div>
                </div>
                <Link to="/casesPersonalMobile/1">
                    <div className={isClicked ? '' : 'displayNone'}>
                        <p>McDonald's</p>
                    </div>
                </Link>
                <Link to="/casesPersonalMobile/1">
                    <div className={isClicked ? '' : 'displayNone'}>
                        <p>Chipsters</p>
                    </div>
                </Link>
                <Link to="/casesPersonalMobile/1">
                    <div className={isClicked ? '' : 'displayNone'}>
                        <p>Puma Ukraine</p>
                    </div>
                </Link>
            </div>
            <div className={isClicked ? 'mar70' : ''}>
                <Link to="/storyMobileFull">
                    <div className="casesBtn gradientBtn mb02">
                        <p>
                            WE'RE<br />
                            READY<br />
                            HIRE US
                        </p>
                    </div>
                </Link>
            </div>
            <div>
                <StoryFooter />
            </div>
        </div>
    )
}

export default CasesFullMobile
