import React, { useEffect, useCallback,useRef, useState } from 'react'
import './Story.css'
import 'animate.css'
import Cube from '../Cube/Cube'
import { Link } from 'react-router-dom'
import Line from '../Line/Line'
import useWindowDimensions from '../useWindowDimension/useWindowDimensions'

export const Story = ({
    polyline,
    coordsToX,
    coordsToY,
    isClicked,
    canvases,
    isCanvasesHidded,
    isStoryEntered,
}) => {
    
    const { width, height } = useWindowDimensions()

    useEffect(() => {
        document.getElementById('polyline').classList.add('displayNone')
        document.getElementById('polyline2').classList.add('displayNone')
    }, [])

    const offCanvases = useCallback(() => {
        canvases.map((i) => i.classList.add('displayNone'))
        polyline.classList.remove('displayNone')
    }, [canvases, polyline.classList])

    const onCanvases = useCallback(() => {
        canvases.map((i) => i.classList.remove('displayNone'))
        polyline.classList.add('displayNone')
    }, [canvases, polyline.classList])

    useEffect(() => {
        if (isCanvasesHidded) offCanvases()
        else onCanvases()
        if (!isStoryEntered && isCanvasesHidded)
            canvases[1].classList.add('displayNone')
        else canvases[1].classList.remove('displayNone')
    }, [isCanvasesHidded, canvases, isStoryEntered, offCanvases, onCanvases])

    const ToFullScreen = () => {
        const elem = document.getElementById('storyLayoutElem')
        elem.classList.add('storyFullScreen')
    }

    const [visible, setVisible] = useState(false)
    const [visibleBB, setVisibleBB] = useState(false)
    const visRef = useRef(null)
    const visRef2 = useRef(null)
    useEffect(() => {
        (async () => {
            if (isClicked) {
                setVisible(true)
                visRef2.current = setInterval(function() {
                    try {
                        setVisibleBB(true);
                    } catch (error) {}
                },250);
            }
            else {
                setVisibleBB(false);
                if (visRef.current) clearTimeout(visRef.current)
                if (visRef2.current) clearInterval(visRef2.current)
                await new Promise((r) => {
                    visRef.current = setTimeout(() => setVisible(false), 2000)
                })
            }
        })()
        return () => {
            if (visRef.current) clearTimeout(visRef.current)
        }
    }, [isClicked])

    if (!visible) return null

    return (
        <div
            id="storyLayoutElem"
            className={isClicked ? 'storyLayout' : 'reversedLayoutStory'}
        >
            <Cube />
            <Line
                polyline={polyline}
                isClicked={isClicked}
                coords={{
                    first: {
                        x: width * 0.18,
                        y: 0,
                    },
                    last: {
                        x: coordsToX,
                        y: coordsToY + 23,
                    },
                }}
                coords1={{
                    first: {
                        x: coordsToX,
                        y: coordsToY + 23,
                    },
                    last: {
                        x: width,
                        y: height,
                    },
                }}
                amount={7}
            />
            <div className={visibleBB ? "storyBlock" : "displayNone"}>
                <h3>
                    We are a full-service <br />experiential VFX <br />production studio based
                    in <br />Ukraine inspired by the <br />creative potential of <br />emerging
                    technologies. 😎
                </h3>
                <div className='storyBlock_info'>
                    <Link to="/cases" onClick={() => ToFullScreen()}>
                        our cases ﹤
                    </Link>
                    <Link to="/hire" onClick={() => ToFullScreen()}>
                        hire us ﹤
                    </Link>
                    <div className="casesArrow casesArrPadding"></div>
                    <p>
                        As a wide collective of highly <br />skilled creatives, we
                        vizualize <br />any content on any screen <br />and any space.
                        Create CG and <br />VFX for Advertising, TV, Print, <br />digital,
                        series, short and now <br />long format films, games, VR <br />and
                        AR experiences.
                    </p>
                    <p>
                        A deeply collaborative <br />approach and respect for every <br />
                        aspect and role in the creation <br />process stands at our
                        core.
                    </p>
                </div>
            </div>
            <Link to="/story" onClick={() => ToFullScreen()}>
                <span className="shape pos2 shape-test" />
                <div className="storyBtn gradientBtn">
                    <p>
                        View our
                        <br />
                        expertise &<br />
                        technologies
                    </p>
                </div>
            </Link>
        </div>
    )
}
