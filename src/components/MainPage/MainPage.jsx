import React, { useEffect, useState, useRef } from 'react'
import { Cases } from '../Cases/Cases'
import { Hire } from '../Hire/Hire'
import { MainPageButton } from '../MainPageButton/MainPageButton'
import { Story } from '../Story/Story'
import TypingText from '../TypingText/TypingText'
import { Link } from 'react-router-dom'
import './MainPage.css'
import './MainPageMedia.css'

import videoPower from './video/videoPower.webm'

const applyLayout = (canvas) => {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

const MainPage = ({
    is1BtnHovered,
    is2BtnHovered,
    is3BtnHovered,
    setIs3BtnHovered,
    setIs2BtnHovered,
    setIs1BtnHovered,
}) => {
    const casesArray = [
        {
            title: "McDonald<span style='color:#fff;'>'</span>s",
            id: 1,
            className: 'mcDonalds',
            background: 'mcBack',
        },
        {
            title: 'Puma',
            id: 2,
            className: 'puma',
            background: 'pBack',
        },
        {
            title: 'Flint',
            id: 3,
            className: 'mcDonalds',
            background: 'fBack',
        },
        {
            title: 'Little big',
            id: 4,
            className: 'mcDonalds',
            background: 'lBack',
        },
        {
            title: 'Parimatch',
            id: 5,
            className: 'mcDonalds',
            background: 'pBack',
            // pmBack
        },
        {
            title: 'Navi',
            id: 6,
            className: 'mcDonalds',
            background: 'nBack',
        },
    ]

    const [buttonsCoords, setButtonsCoords] = useState([])

    const btn1Ref = useRef(null)
    const btn2Ref = useRef(null)
    const btn3Ref = useRef(null)

    const canvas1 = document.getElementById('overlay1')
    const canvas2 = document.getElementById('overlay2')
    const canvas3 = document.getElementById('overlay3')

    const polyline = document.getElementById('polyline')
    const polyline1 = document.getElementById('polyline1')
    const polyline2 = document.getElementById('polyline2')

    const [isCasesArrayHover, setIsCasesArrayHover] = useState(false)

    const [isCasesClicked, setIsCasesClicked] = useState(false)
    const [isCasesEntered, setIsCasesEntered] = useState(false)

    const [isStoryClicked, setIsStoryClicked] = useState(false)
    const [isStoryEntered, setIsStoryEntered] = useState(false)

    const [isHireClicked, setIsHireClicked] = useState(false)
    const [isHireEntered, setIsHireEntered] = useState(false)

    const [isCanvasesHidded, setIsCanvasesHidded] = useState(false)

    const PlaceCursor = document.getElementsByClassName('movable')[0]

    const on1BtnEnter = () => {
        setIs1BtnHovered(true)
        setIsCasesEntered(true)
        canvas1.classList.add('displayNone')
    }
    const on1BtnLeave = () => {
        setIs1BtnHovered(false)
        setIsCasesEntered(false)
        canvas1.classList.remove('displayNone')
    }
    const on2BtnEnter = () => {
        setIsStoryEntered(true)
        canvas2.classList.add('displayNone')
        setIs2BtnHovered(true)
    }
    const on2BtnLeave = () => {
        setIsStoryEntered(false)
        canvas2.classList.remove('displayNone')
        setIs2BtnHovered(false)
    }
    const on3BtnEnter = () => {
        setIsHireEntered(true)
        canvas3.classList.add('displayNone')
        setIs3BtnHovered(true)
    }
    const on3BtnLeave = () => {
        setIsHireEntered(false)
        canvas3.classList.remove('displayNone')
        setIs3BtnHovered(false)
    }
    const joinPoints = (ctx, from, to) => {
        const stroke = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
        if (isCasesEntered || isStoryEntered || isHireEntered) {
            stroke.addColorStop(0, 'rgba(255, 255, 255, 0)')
            stroke.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)')
            stroke.addColorStop(0.6, 'rgba(255, 255, 255, 0.9)')
            stroke.addColorStop(0.9, 'rgba(255, 255, 255, 0.02)')
        } else {
            stroke.addColorStop(0, 'rgba(255, 255, 255, 0)')
            stroke.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)')
            stroke.addColorStop(0.5, 'white')
            stroke.addColorStop(0.9, 'rgba(255, 255, 255, 0.2)')
            stroke.addColorStop(1, 'rgba(255, 255, 255, 0)')
        }
        ctx.strokeStyle = stroke
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)

        if (isCasesEntered) ctx.lineTo(to.x + 4, to.y - 5)
        if (isStoryEntered) ctx.lineTo(to.x - 50, to.y + 25)
        if (isHireEntered) ctx.lineTo(to.x + 50, to.y + 25)
        else ctx.lineTo(to.x, to.y)
        ctx.stroke()
    }
    function drawAnimLine(canvas, mouseCoords, elementCoords) {
        const ctx = canvas.getContext('2d')
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const x1 = elementCoords.x - window.scrollX
            const y1 = elementCoords.y - window.scrollY
            joinPoints(ctx, { x: x1, y: y1 }, mouseCoords)
        }
        requestAnimationFrame(draw)
    }

    const btnMove1 = (e) => {
        if (!buttonsCoords.length) return
        if (
            (Math.abs(buttonsCoords[0].y - e.clientY) < 130 &&
                Math.abs(buttonsCoords[0].x - e.clientX) < 130) ||
            (Math.abs(buttonsCoords[1].y - e.clientY) < 130 &&
                Math.abs(buttonsCoords[1].x - e.clientX) < 130) ||
            (Math.abs(buttonsCoords[2].y - e.clientY) < 130 &&
                Math.abs(buttonsCoords[2].x - e.clientX) < 130)
        ) {
            PlaceCursor.style.transform = 'scale(2.5) translate(-20%, -10%)'
        } else if (
            (Math.abs(buttonsCoords[0].y - e.clientY) < 200 &&
                Math.abs(buttonsCoords[0].x - e.clientX) < 200) ||
            (Math.abs(buttonsCoords[1].y - e.clientY) < 200 &&
                Math.abs(buttonsCoords[1].x - e.clientX) < 200) ||
            (Math.abs(buttonsCoords[2].y - e.clientY) < 200 &&
                Math.abs(buttonsCoords[2].x - e.clientX) < 200)
        ) {
            PlaceCursor.style.transform = 'scale(1.7) translate(-30%, -20%)'
        } else {
            PlaceCursor.style.transition = 'background 0.5s ease-in-out'
            PlaceCursor.style.transform = 'scale(1) translate(-50%, -40%)'
        }
    }

    const onMove = (e) => {
        if (!buttonsCoords.length) return
        drawAnimLine(canvas1, { x: e.clientX, y: e.clientY }, buttonsCoords[0])
        drawAnimLine(canvas2, { x: e.clientX, y: e.clientY }, buttonsCoords[1])
        drawAnimLine(canvas3, { x: e.clientX, y: e.clientY }, buttonsCoords[2])
    }

    const resizeEvent = (e) => {
        return;
        var b1 = btn1Ref.current?.getBoundingClientRect();
        var b2 = btn2Ref.current?.getBoundingClientRect();
        var b3 = btn3Ref.current?.getBoundingClientRect();
        try {
            //if (isCasesEntered) ctx.lineTo(to.x + 4, to.y - 5)
            //if (isStoryEntered) ctx.lineTo(to.x - 50, to.y + 25)
            //if (isHireEntered) ctx.lineTo(to.x + 50, to.y + 25)
            b1.x = b1.x + 50;
            b1.y = b1.y + 50;

            b2.x = b2.x + 50;
            b2.y = b2.y + 50;

            b3.x = b3.x + 50;
            b3.y = b3.y + 50;
        } catch(e) {

        }
        setButtonsCoords([
            b1,
            b2,
            b3
        ])
    }

    useEffect(() => {
        applyLayout(canvas1)
        applyLayout(canvas2)
        applyLayout(canvas3)

        btn1Ref.current.addEventListener('mouseover', on1BtnEnter)
        btn1Ref.current.addEventListener('mouseleave', on1BtnLeave)

        btn2Ref.current.addEventListener('mouseover', on2BtnEnter)
        btn2Ref.current.addEventListener('mouseleave', on2BtnLeave)

        btn3Ref.current.addEventListener('mouseover', on3BtnEnter)
        btn3Ref.current.addEventListener('mouseleave', on3BtnLeave)

        if (!buttonsCoords.length) {
            setButtonsCoords([
                btn1Ref.current?.getBoundingClientRect(),
                btn2Ref.current?.getBoundingClientRect(),
                btn3Ref.current?.getBoundingClientRect(),
            ])
        }
        window.addEventListener('mousemove', onMove)

        window.addEventListener('mousemove', btnMove1)

        window.addEventListener('resize', resizeEvent)

        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mousemove', btnMove1)

            btn1Ref.current?.removeEventListener('mouseover', on1BtnEnter)
            btn1Ref.current?.removeEventListener('mouseleave', on1BtnLeave)

            btn2Ref.current?.removeEventListener('mouseover', on2BtnEnter)
            btn2Ref.current?.removeEventListener('mouseleave', on2BtnLeave)

            btn3Ref.current?.removeEventListener('mouseover', on3BtnEnter)
            btn3Ref.current?.removeEventListener('mouseleave', on3BtnLeave)
        }
    }, [
        buttonsCoords.length,
        is1BtnHovered,
        is2BtnHovered,
        is3BtnHovered,
        on1BtnEnter,
        on1BtnLeave,
        on2BtnEnter,
        on2BtnLeave,
        on3BtnEnter,
        on3BtnLeave,
    ])

    const casesClicked = () => {
        setIsCanvasesHidded(!isCanvasesHidded)
        setIsCasesClicked((isCasesClicked) => !isCasesClicked)
    }
    const storyClicked = () => {
        setIsCanvasesHidded(!isCanvasesHidded)
        setIsStoryClicked((isStoryClicked) => !isStoryClicked)
    }
    const hireClicked = () => {
        setIsCanvasesHidded(!isCanvasesHidded)
        setIsHireClicked((isHireClicked) => !isHireClicked)
    }
    const HoveredArrays = (status) => {
        setIsCasesArrayHover((isCasesArrayHover) => status)
    }
    // useEffect(() => {
    //     if (
    //         (isCasesClicked && isCasesEntered) ||
    //         (isStoryClicked && isStoryEntered) ||
    //         (isHireClicked && isHireEntered)
    //     )
    //         PlaceCursor.classList.add('standartCursor')
    // }, [
    //     isCasesClicked,
    //     isCasesEntered,
    //     isStoryClicked,
    //     isStoryEntered,
    //     isHireClicked,
    //     isHireEntered,
    // ])

    return (
        <div className="mainPageSelector">
            <div className="no_overflow ">
                <video className={(isCasesClicked || isHireClicked || isStoryClicked) && !isCasesArrayHover ? 'showreel no_overflow video__filter' : 'showreel no_overflow'} autoPlay loop muted>
                    <source src={videoPower} type="video/webm" />
                </video>
                <div className="showreel__mobile" />
                <div className="toner " />
                <div className="no_overflow">
                    <MainPageButton
                        canvas={canvas1}
                        onClick={casesClicked}
                        isHovered={isCasesEntered}
                        title="cases"
                        isClicked={isCasesClicked}
                        className={
                            isCasesClicked
                                ? 'clickedCases firstCircle '
                                : 'firstCircle'
                        }
                        ref={btn1Ref}
                    />

                    <MainPageButton
                        canvas={canvas2}
                        onClick={storyClicked}
                        isHovered={is2BtnHovered}
                        title="story"
                        ref={btn2Ref}
                        isClicked={isStoryClicked}
                        className={
                            isStoryClicked
                                ? 'clickedStory secondCircle'
                                : 'secondCircle'
                        }
                    />
                    <MainPageButton
                        canvas={canvas3}
                        onClick={hireClicked}
                        isHovered={is3BtnHovered}
                        title="hire us"
                        ref={btn3Ref}
                        isClicked={isHireClicked}
                        className={
                            isHireClicked
                                ? 'clickedHire thirdCircle'
                                : 'thirdCircle'
                        }
                        x
                    />
                    <Cases
                        polyline={polyline}
                        casesArray={casesArray}
                        coordsToX={buttonsCoords[0]?.x}
                        coordsToY={buttonsCoords[0]?.y}
                        isCasesEntered={isCasesEntered}
                        isCanvasesHidded={isCanvasesHidded}
                        canvases={[canvas1, canvas2, canvas3]}
                        isClicked={isCasesClicked}
                        HoveredArrays={HoveredArrays}
                    />
                    <Story
                        polyline={polyline1}
                        coordsToX={buttonsCoords[1]?.x}
                        coordsToY={buttonsCoords[1]?.y}
                        isStoryEntered={isStoryEntered}
                        isCanvasesHidded={isCanvasesHidded}
                        canvases={[canvas1, canvas2, canvas3]}
                        isClicked={isStoryClicked}
                    />
                    <Hire
                        polyline={polyline2}
                        coordsToX={buttonsCoords[2]?.x}
                        coordsToY={buttonsCoords[2]?.y}
                        isHireEntered={isHireEntered}
                        isCanvasesHidded={isCanvasesHidded}
                        canvases={[canvas1, canvas2, canvas3]}
                        isClicked={isHireClicked}
                        setIsClicked={setIsHireClicked}
                    />
                    <div className={` main no_overflow`}>
                        {(isCasesClicked || isHireClicked || isStoryClicked) && !isCasesArrayHover ? <div className="special__noise"></div> : ""}
                        {(isCasesClicked || isHireClicked || isStoryClicked) && !isCasesArrayHover ? <div className="special__noise__overlay"></div> : "" }
                        {isCasesArrayHover ? <div className="special__overlay__x"></div> : ""}
                        <div className="mobile__btns">
                            <Link to="/storyMobile">
                                <button>story</button>
                            </Link>
                            <Link to="/casesMobile">
                                <button>cases</button>
                            </Link>
                            <Link to="/hireMobile">
                                <button>hire us</button>
                            </Link>
                        </div>
                        <div className="main__top">
                            <TypingText isClicked={isCasesClicked} />
                            <div className="main__logo" />
                        </div>
                        <div className="main__bottom">
                            <div className="fhd">
                                <div className="main__bottom__video">
                                    <div className="progress-done"></div>
                                </div>
                            </div>
                            <div className="mobile">
                                <div className="main__bottom__video">
                                    <div className="progress-done"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage