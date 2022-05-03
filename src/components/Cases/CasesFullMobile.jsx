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
                    <div>
                        <p>Bond Delivery</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Tvorchi</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>McDonald's</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Chipsters</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Puma Ukraine</p>
                    </div>
                </div>
                <div
                    className={isClicked ? 'displayNone' : ''}
                    onClick={() => setIsClicked(!isClicked)}
                >
                    <div>
                        <p>LOAD MORE</p>
                    </div>
                </div>
                <div className={isClicked ? '' : 'displayNone'}>
                    <p>McDonald's</p>
                </div>
                <div className={isClicked ? '' : 'displayNone'}>
                    <p>Chipsters</p>
                </div>
                <div className={isClicked ? '' : 'displayNone'}>
                    <p>Puma Ukraine</p>
                </div>
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
