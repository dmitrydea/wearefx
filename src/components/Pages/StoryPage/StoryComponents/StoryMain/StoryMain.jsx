import React from 'react'
import './StoryMain.css'
import '../StoryHeader/StoryHeader.css'
import { Link } from 'react-router-dom'

const StoryMain = () => {
    return (
        <div className="story-main">
            <div className="story-header">
                <div className="header-left">
                    <div>
                        <h1>our</h1>
                        <h1>story</h1>
                    </div>
                    <div>
                        <Link to="/cases">Cases</Link>
                        <Link to="/hire">hire us</Link>
                    </div>
                </div>
                <Link to='/wearefx'>
                        <div className="animated-logo-X">X</div>
                    <div className="animated-logo header-right"></div>
                </Link>
            </div>
            <div className="story-main-content">
                <p>
                    Specialized in high end CG and VFX<br />for Advertising, TV,
                    Print, digital,<br />series, short and now long format<br />films
                    since its launch, WeareFX has<br />consistently evolved their
                    processes<br />as VFX specialists with a strong<br />emphasis on art
                    direction, design<br />and technique development.
                </p>
                <p>
                    Wearefx’s fully equipped and growing Ukraine based<br />studio is
                    accompanied with a host of talents, including<br />experienced
                    lead 3D Project Managers, 3D VFX<br />artists, animators, lead
                    lighting and 3D renderers.<br />Their dedicated compositing teams
                    include specialized<br />Flame Artists, Shoot Supervisors and a
                    host of in<br />house, and After Effects compositors.{' '}
                </p>
                <p className='margin__special'>
                    Our’s services include Autodesk Smoke, Flame,<br />DaVinci
                    Resolve, Adobe Premiere Pro and Avid<br />Media Composer suites.
                </p>
            </div>
            <div className="story-main-content story-main-content-mobile">
                <p>
                    Specialized in high end CG and VFX for Advertising, TV,
                    Print, digital, series, short and now long format films
                    since its launch, WeareFX has consistently evolved their
                    processes as VFX specialists with a strong emphasis on art
                    direction, design and technique development.
                </p>
                <p>
                    Wearefx’s fully equipped and growing Ukraine based studio is
                    accompanied with a host of talents, including experienced
                    lead 3D Project Managers, 3D VFX artists, animators, lead
                    lighting and 3D renderers. Their dedicated compositing teams
                    include specialized Flame Artists, Shoot Supervisors and a
                    host of in house, and After Effects compositors.{' '}
                </p>
                <p className='margin__special'>
                    Our’s services include Autodesk Smoke, Flame,DaVinci
                    Resolve, Adobe Premiere Pro and Avid Media Composer suites.
                </p>
            </div>
            <div className="story-ellipse" />
        </div>
    )
}

export default StoryMain
