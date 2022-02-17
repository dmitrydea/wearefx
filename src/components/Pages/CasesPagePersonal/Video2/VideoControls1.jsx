import React, { useState, useEffect } from 'react'
import './VideoPersonal1.css'

const VideoControls1 = ({
    handlePlay,
    playing,
    loadedSeconds,
    playedSeconds,
    fullscreen
}) => {
    const [showElements, setShowElements] = useState(true)

    useEffect(() => {
        
    }, [playedSeconds, loadedSeconds])
    return (
        <>
            <div
                className={
                    fullscreen
                        ? 'visibleCursor video-controls video-controls-special'
                        : 'video-controls video-controls-special'
                }
            >
                <div className="video-center">
                    <div className="play-mute">
                        <button
                            className={
                                showElements ? `play-btn` : 'fadeIn play-btn'
                            }
                            onClick={() => handlePlay()}
                        >
                            {!playing ? 'Play' : 'Pause'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoControls1
