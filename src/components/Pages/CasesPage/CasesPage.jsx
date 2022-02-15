import React, { useEffect, useState } from 'react'
import Cube from '../../Cube/Cube'
import './CasesPage.css'
import '../StoryPage/StoryComponents/StoryHeader/StoryHeader.css'
import CursorProvider from '../../CursorProvider/CursorProvider'
import { CasesSlider } from './CasesSlider/CasesSlider'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'

export const CasesPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [isHoveredBackground, setIsHoveredBackground] = useState('')
    const [showedCases, setShowedCases] = useState([])

    const [showCube, setShowCube] = useState('')

    const navigate = useNavigate()

    const onMouseEnterCase = (e, element) => {
        sethovered([e.clientX, e.clientY])
        setIsHoveredBackground(element.casesArrayItemBack)
    }
    const onMouseLeaveCase = () => {
        sethovered(null)
        setIsHoveredBackground('')
    }

    useEffect(() => {
        document.getElementById('polyline').classList.add('displayNone')
        document.getElementById('polyline1').classList.add('displayNone')
        document.getElementById('polyline2').classList.add('displayNone')
        document.getElementById('overlay1').classList.add('displayNone')
        document.getElementById('overlay2').classList.add('displayNone')
        document.getElementById('overlay3').classList.add('displayNone')
    }, [])

    const casesArray = [
        {
            id: 12345,
            title: `McDonald's`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-MC',
            page: 1,
            delay: '0.2s',
        },
        {
            id: 4562,
            title: `Puma`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Puma',
            page: 1,
            delay: '0.3s',
        },
        {
            id: 435673,
            title: `Flint`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Flint',
            page: 1,
            delay: '0.4s',
        },
        {
            id: 498765432,
            title: `Little big`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-big',
            page: 1,
            delay: '0.5s',
        },
        {
            id: 55678,
            title: `Parimatch`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Pm',
            page: 1,
            delay: '0.6s',
        },
        {
            id: 66743567,
            title: `Navi`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Navi',
            page: 1,
            delay: '0.7s',
        },
        {
            id: 756789,
            title: `Tvorchi`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Tvorchi',
            page: 1,
            delay: '0.8s',
        },
        {
            id: 8765438,
            title: `Bond Delivery`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Bond',
            page: 1,
            delay: '0.9s',
        },
        {
            id: 567899,
            title: `Puma X FC Shaktar`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Shaktar',
            page: 1,
            delay: '1s',
        },
        {
            id: 1890876540,
            title: `Kite`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Kite',

            delay: '1.1s',
            page: 1,
        },
        {
            id: 1678908767541,
            title: `Chipsters`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-Chipsters',

            delay: '1.2s',
            page: 1,
        },
        {
            id: 1567892,
            title: `Hushme`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            delay: '1.3s',
            page: 1,
        },
        {
            id: 135555,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
        {
            id: 16786544,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
        {
            id: 567815,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
        {
            id: 1765435,
            title: `test test`,
            casesArrayItemBack: 'mcHoveredBack',
            personalClass: 'hush-item',
            page: 2,
        },
    ]

    useEffect(() => {
        setShowedCases([...casesArray].filter((e) => e.page === currentPage))
    }, [currentPage])

    useEffect(() => {
        if (isHoveredBackground) setShowCube('displayNone')
        else setShowCube('')
    }, [isHoveredBackground])

    const [hovered, sethovered] = useState(null)

    const parallaxHandler = (e) => {
        let x = 0,
            y = 0
        if (hovered === null) {
            // TODO: set previous code git
            x = 0
            y = 0
        } else {
            x = (e.clientX - hovered[0]) / 30
            y = (e.clientY - hovered[1]) / 30
        }
        document.getElementById(
            'parallaxImageBlock'
        ).style.cssText = `transform: 
        perspective(1000px) 
        rotateY(${y}deg) 
        rotateX(${x/1.3}deg) 
        scale3d(1,1,1)
        `
    }
    return (
        <CursorProvider>
            <div className=" animationFocus cases-page">
                <Cube showCube={`${showCube}`} />
                <div className="story-header">
                    <div className="header-left">
                        <div>
                            <h1>our</h1>
                            <h1>cases</h1>
                        </div>
                        <div>
                            <Link to="/story">our story</Link>
                            <Link to="/hire">hire us</Link>
                        </div>
                    </div>
                    <Link to="/wearefx">
                        <div className="animated-logo-X">X</div>
                        <div className="animated-logo header-right"></div>
                    </Link>
                </div>
                <div
                    id="parallaxImageBlock"
                    className={`${isHoveredBackground} universalBack`}
                ></div>

                <div className="cases-Array">
                    {showedCases.map((item) => (
                        <div
                            onMouseMove={parallaxHandler}
                            onMouseEnter={(e) => onMouseEnterCase(e, item)}
                            onMouseLeave={() => onMouseLeaveCase()}
                            className={
                                item.isHovered
                                    ? `${item.personalClass} casesArrayItem`
                                    : 'casesArrayItem'
                            }
                            key={item.id}
                            onClick={() => navigate(`/cases/${item.id}`)}
                        >
                            <span style={{ animationDelay: `${item.delay}` }}>
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>

                <CasesSlider state={currentPage} setState={setCurrentPage} />

                <div className="casesTextBlock">
                    <div className="casesArrow" />
                    <p>
                        We’re always looking the truth about the brand we work
                        with and tell it naturaly and gorgeous, like no one else
                        before.
                    </p>
                </div>
                <span className="shape pos32" />
                <div className="casesBtn gradientBtn">
                    <p>
                        We’re
                        <br />
                        ready
                        <br />
                        Hire us
                    </p>
                </div>
            </div>
        </CursorProvider>
    )
}