import React from 'react'
import { Link } from 'react-router-dom'
import StoryFooter from '../Pages/StoryPage/StoryComponents/StoryBottom/StoryFooter'

const StoryMobileFull = () => {
    return (
        <div className="story-mobile">
            <div className="mobile-header">
                <Link to="/casesMobile" className="link">
                    Cases
                </Link>
                <Link to="/wearefx" className="to-home"></Link>
                <Link to="/hireMobile" className="link">
                    Hire us
                </Link>
            </div>
            <Link to="/storyMobile" className="backHref">
                &#60; Back to story
            </Link>
            <div className="sftf story-full-text">
                We push the boundaries of visual effects and work with our
                clients to innovate in the real world.
            </div>
            <div className="story-bottom-marquee">
                <div className="marquee-div">
                    <span>
                        <div className="marquee-img marquee-1" />
                        <div className="marquee-img marquee-2" />
                        <div className="marquee-img marquee-3" />
                        <div className="marquee-img marquee-4" />
                        <div className="marquee-img marquee-5" />
                        <div className="marquee-img marquee-6" />
                        <div className="marquee-img marquee-7" />
                        <div className="marquee-img marquee-8" />
                    </span>
                    <span>
                        <div className="marquee-img marquee-1" />
                        <div className="marquee-img marquee-2" />
                        <div className="marquee-img marquee-3" />
                        <div className="marquee-img marquee-4" />
                        <div className="marquee-img marquee-5" />
                        <div className="marquee-img marquee-6" />
                        <div className="marquee-img marquee-7" />
                        <div className="marquee-img marquee-8" />
                    </span>
                </div>
            </div>
            <div className="story-bottom-marquee-reverse">
                <div className="marquee-div-reverse">
                    <span>
                        <div className="marquee-img-reverse marquee-10" />
                        <div className="marquee-img-reverse marquee-20" />
                        <div className="marquee-img-reverse marquee-30" />
                        <div className="marquee-img-reverse marquee-40" />
                        <div className="marquee-img-reverse marquee-50" />
                        <div className="marquee-img-reverse marquee-60" />
                        <div className="marquee-img-reverse marquee-70" />
                    </span>
                    <span>
                        <div className="marquee-img-reverse marquee-10" />
                        <div className="marquee-img-reverse marquee-20" />
                        <div className="marquee-img-reverse marquee-30" />
                        <div className="marquee-img-reverse marquee-40" />
                        <div className="marquee-img-reverse marquee-50" />
                        <div className="marquee-img-reverse marquee-60" />
                        <div className="marquee-img-reverse marquee-70" />
                    </span>
                </div>
            </div>
            <div className="story-bottom-marquee">
                <div className="marquee-div">
                    <span>
                        <div className="marquee-img marquee-8" />
                        <div className="marquee-img marquee-7" />
                        <div className="marquee-img marquee-6" />
                        <div className="marquee-img marquee-5" />
                        <div className="marquee-img marquee-4" />
                        <div className="marquee-img marquee-3" />
                        <div className="marquee-img marquee-2" />
                        <div className="marquee-img marquee-1" />
                        
                    </span>
                    <span>
                        <div className="marquee-img marquee-8" />
                        <div className="marquee-img marquee-7" />
                        <div className="marquee-img marquee-6" />
                        <div className="marquee-img marquee-5" />
                        <div className="marquee-img marquee-4" />
                        <div className="marquee-img marquee-3" />
                        <div className="marquee-img marquee-2" />
                        <div className="marquee-img marquee-1" /> 
                    </span>
                </div>
            </div>
            <div className="stftf2 story-full-text ">
                Specialized in high end CG and VFX for Advertising, TV, Print,
                digital, series, short and now long format films since its
                launch, WeareFX has consistently evolved its processes as VFX
                specialists with a strong emphasis on art direction, design and
                technique development.
            </div>
            <div className="story-p-text spt2">
                WeAreFX`s is fully equipped and growing Ukraine-based studio accompanied 
                with a host of talents, including experienced lead
                3D Project Managers, 3D VFX artists, animators, lead lighting
                and 3D renderers. Their dedicated compositing teams include
                specialized Flame Artists, Shoot Supervisors and a host of in
                house, and After Effects compositors.
            </div>
            <div className="story-p-text spt2">
                Our’s services include Autodesk Smoke, Flame, DaVinci Resolve,
                Adobe Premiere Pro and Avid Media Composer suites.
            </div>
            <div className="story-mobile-ellipse">
                <Link to="/casesMobile">
                    <div className="violetMobileMargStoryFull casesBtn gradientBtn violetMobileMarg">
                        <p>
                            View our
                            <br />
                            works
                        </p>
                    </div>
                </Link>
            </div>
            <Link to="/hireMobile">
                <div className="violetBtn">
                    <p>
                        we’re ready
                        <br />
                        hire us!
                    </p>
                </div>
            </Link>

            <div>
                <StoryFooter />
            </div>
        </div>
    )
}

export default StoryMobileFull
