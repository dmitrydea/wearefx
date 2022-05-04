import React, { useState, useEffect } from 'react'
import './VideoFullPersonal.css'

const VideoFullControls = ({
    handlePlay,
    playing,
    muted,
    handleMuted,
    loadedSeconds,
    playedSeconds,
    handleProgressTrack,
    fullscreen,
    handleFullScreen,
    handleFullScreenClose,
}) => {
    const [showElements, setShowElements] = useState(true)


    useEffect(() => {
        const fillBar = document.getElementById('fill1')
        fillBar.style.width = `${(playedSeconds / loadedSeconds) * 100}%`
    }, [playedSeconds, loadedSeconds])
    return (
        <>
            <div
                className={
                    fullscreen
                        ? (showElements ? 'visibleCursor video-controls video-controls-full displayNoneMain' : 'visibleCursor video-controls video-controls-hide video-controls-full')
                        : (showElements ? 'video-controls video-controls-full' : 'video-controls video-controls-hide video-controls-full')
                }
            >
                <div className={
                            showElements
                                ? 'video-text'
                                : 'video-text displayNone'
                        }>
                    <div className="casesArrow" />
                    <p>Scroll<br />down<br />to view<br />details</p>
                </div>
                <div className="video-center">
                    <div className={showElements ? 'play-mute' : 'play-mute displayNoneMain' }>
                        <div>
                            <button
                                className={
                                    showElements ? `play-btn` : 'fadeIn play-btn'
                                }
                                onClick={() => handlePlay()}
                            >
                                {!playing ? 'Play' : 'Pause'}
                            </button>
                        </div>
                        <div>
                            <div
                                className={
                                    showElements
                                        ? 'full-progressbar'
                                        : 'full-progressbar progress-bar-width'
                                }
                            >
                                <span className={'bar'}>
                                    <span id="fill1" className="fill"></span>
                                </span>
                                <input
                                    type="range"
                                    value={playedSeconds}
                                    max={loadedSeconds}
                                    min={0}
                                    step={1}
                                    className={
                                        showElements
                                            ? ` inputProgress`
                                            : 'inputProgress progress-bar-width'
                                    }
                                    onChange={(e) =>
                                        handleProgressTrack(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                className={
                                    showElements ? `muted-btn` : 'fadeIn muted-btn'
                                }
                                onClick={() => handleMuted()}
                            >
                                {!muted ? 'mute' : 'unmute'}
                            </button>
                            <button
                                className={
                                    !fullscreen
                                        ? showElements
                                            ? ` fullscreen`
                                            : ` fadeIn fullscreen`
                                        : 'displayNone'
                                }
                                onClick={() => handleFullScreen()}
                            ></button>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoFullControls
