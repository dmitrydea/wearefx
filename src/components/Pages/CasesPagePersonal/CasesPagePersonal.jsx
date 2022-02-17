import React, { useEffect, useRef, useState } from 'react'
import CursorProvider from '../../CursorProvider/CursorProvider'
import StoryFooter from '../StoryPage/StoryComponents/StoryBottom/StoryFooter'
import './CasesPagePersonal.css'
import ContactBlock from './ContactBlock'
import { PersonalHeader } from './PersonalHeader'
import { PersonalSlider } from './PersonalSlider'
import TextBlock from './TextBlock'
import { VideoPersonal } from './Video/VideoPersonal'
import '../../../styles/Global.css'
import { VideoPersonal1 } from './Video2/VideoPersonal1'

const CasesPagePersonal = () => {
    useEffect(() => {
        document.getElementById('polyline').classList.add('displayNone')
        document.getElementById('polyline1').classList.add('displayNone')
        document.getElementById('polyline2').classList.add('displayNone')
        document.getElementById('overlay1').classList.add('displayNone')
        document.getElementById('overlay2').classList.add('displayNone')
        document.getElementById('overlay3').classList.add('displayNone')
    }, [])

    const refPlayer = useRef(null)
    const refPlayerScreenfull = useRef(null)

    const refPlayer1 = useRef(null)
    const refPlayerScreenfull1 = useRef(null)

    const [fullscreen, setFullscreen] = useState(false)

    const [fullscreen1, setFullscreen1] = useState(false)
    return (
        <CursorProvider>
            <div id="personalPageId" className=" personal-page">
                <PersonalHeader />
                <VideoPersonal
                    fullscreen={fullscreen}
                    setFullscreen={setFullscreen}
                    refPlayer={refPlayer}
                    refPlayerScreenfull={refPlayerScreenfull}
                />
                <TextBlock
                heightClass={'heightClass3'}
                    text={
                        'we wanted to show the duality of<br />the life that a child with kidney<br />disease faces everyday. We came up<br />with a technique commonly used in<br />photography, but not as often used<br />in films.'
                    }
                    approachTxt={
                        'Approach'
                    }
                />
                <VideoPersonal1
                    fullscreen={fullscreen1}
                    setFullscreen={setFullscreen1}
                    refPlayer={refPlayer1}
                    refPlayerScreenfull={refPlayerScreenfull1}
                />
                <TextBlock
                    heightClass={'heightClass'}
                    text={
                        'The key to pulling of the multiplicity<br />effect was a piece of camera<br />equipment know as a Technodolly.<br />This computer controlled camera<br />crane, can be pre-programmed to<br />make the same camera movement<br />over and over again. As it follows<br />the same predefined path we shoot<br />the kids in different positions. This<br />allows to overlay and stitch the<br />shots so we end up with the same<br />child twice in one shot'
                    }
                    approachTxt={
                        'Technique'
                    }
                />
                <PersonalSlider />
                <TextBlock
                heightClass={'heightClass2 text-block-special-bg'}
                    firstTxt={'Kees Albers - creative director'}
                    secondTxt={'Bureauloos'}
                    text={
                        '“It was a real pleasure working<br />together with this team. WeareFX,<br />they really took the concept of the<br />film to the next level! The result is<br />really great and even better than<br />we imagined."'
                    }
                    approachTxt={
                        'Testimonial'
                    }
                />
                <div className='PreviewImages'>
                    <img src="/wearefx/static/media/image 8.61e3dc47.svg" alt="" />
                </div>
                <div className='PreviewImages'>
                    <img src="/wearefx/static/media/image 9.742ed35d.svg" alt="" />
                </div>
                <div className='PreviewImages'>
                    <img src="/wearefx/static/media/image 10.9b4af571.svg" alt="" />
                </div>
                <ContactBlock />
                <div className="next-project">
                    <span className="shape pos5" />
                    <div className="pStoryBtn storyBtn gradientBtn">
                        <p>
                            Explore
                            <br />
                            this project
                        </p>
                    </div>
                    <div className="info-block">
                        <h1>McDonald<span className='schar__'>'</span>s</h1>
                        <p>Granding, VFX, motion</p>
                        <p className="next-proj">Next project</p>
                    </div>
                </div>
                <StoryFooter />
            </div>
        </CursorProvider>
    )
}

export default CasesPagePersonal
