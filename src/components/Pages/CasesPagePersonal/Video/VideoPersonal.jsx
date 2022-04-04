import React, { useState, useRef, useEffect, useCallback } from 'react'
import './VideoPersonal.css'
import ReactPlayer from 'react-player'
import Video from './VideoSrc/videoPower.mp4'
import VideoControls from './VideoControls'
import Slider from 'react-slick'

export const VideoPersonal = ({
    refPlayer,
    refPlayerScreenfull,
    fullscreen,
    setFullscreen,
}) => {
    const [CurrentSlide, setCurrentSlide] = useState(1);
    const [videoState, setVideoState] = useState({
        playing: false,
        muted: false,
        loadedSeconds: 1,
        playedSeconds: 0,
    })
    const refSliderVideos = useRef(null)
    const settingsSliderVideos = {
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const [trackSliderVideos, setTrackSliderVideos] = useState('')
    const slidesArrayVideos = [
        {
            id: 1,
            Video_: Video,
            refPlayer_: useRef(null),
        },
        {
            id: 2,
            Video_: Video,
            refPlayer_: useRef(null),
        },
        {
            id: 3,
            Video_: Video,
            refPlayer_: useRef(null),
        },
        {
            id: 4,
            Video_: Video,
            refPlayer_: useRef(null),
        }
    ]
    const { playing, muted, loadedSeconds, playedSeconds } = videoState
    const handlePlayCurrent = () => {
        var stream = document.querySelectorAll('.slider-player .slick-active video');
        stream = stream && stream[0] ? stream[0] : null; 
        if(stream == null) return; 
        if(stream.paused) {
            stream.play();
            
        } else {
            stream.pause();
        }
        setVideoState({ ...videoState, playing: !videoState.playing })
    }
    const StopVideosAndReloadControls = () => {
        var streams = document.querySelectorAll('.slider-player video');
        streams = streams && streams.length > 0 ? streams : null; 
        if(streams == null) return;
        for (let i = 0; i < streams.length; i++) {
            streams[i].pause();
            streams[i].currentTime = 0;
        }
        setVideoState({ ...videoState, playing: false })
    }
    const handlePlay = () => {
        setVideoState({ ...videoState, playing: !videoState.playing })
    }
    const handleMuted = () => {
        setVideoState({ ...videoState, muted: !videoState.muted })
    }
    const handleProgress = (e) => {
        setVideoState({ ...videoState, ...e })
    }
    const handleEnded = (e) => {
        setVideoState({ ...videoState, playing: !videoState.playing })
    }
    const handleProgressTrack = (e) => {
        var stream = document.querySelectorAll('.slider-player .slick-active video');
        stream = stream && stream[0] ? stream[0] : null; 
        if(stream == null) return; 
        stream.currentTime  = Number(e);
        //refPlayer.current.seekTo(Number(e))
    }
    const handleFullScreen = () => {
        setFullscreen(true)

        if (refPlayerScreenfull.current.requestFullscreen)
            refPlayerScreenfull.current.requestFullscreen()
        else if (refPlayerScreenfull.current.webkitRequestFullscreen)
            /* Safari */ refPlayerScreenfull.current.webkitRequestFullscreen()
        else if (refPlayerScreenfull.current.msRequestFullscreen)
            /* IE11 */ refPlayerScreenfull.current.msRequestFullscreen()
    }
    const handleFullScreenClose = () => {
        setFullscreen(false)

        if (document.exitFullscreen) document.exitFullscreen()
        else if (document.webkitExitFullscreen)
            /* Safari */ document.webkitExitFullscreen()
        else if (document.msExitFullscreen)
            /* IE11 */ document.msExitFullscreen()
    }
    const prevSlideVideo = () => {
        StopVideosAndReloadControls();
        document.getElementById('prevBtnSlider_video').classList.add('activeBtn')
        refSliderVideos.current.slickPrev()
        setTimeout(() => {
            document
                .getElementById('prevBtnSlider_video')
                .classList.remove('activeBtn')
        }, 500)
        if(CurrentSlide - 1 < 1) {
            setCurrentSlide(slidesArrayVideos.length);
        } else {
            setCurrentSlide(CurrentSlide - 1);
        }
    }
    const nextSlideVideo = () => {
        StopVideosAndReloadControls();
        document.getElementById('nextBtnSlider_video').classList.add('activeBtn')
        refSliderVideos.current.slickNext()
        setTimeout(() => {
            document
                .getElementById('nextBtnSlider_video')
                .classList.remove('activeBtn')
        }, 500)
        if(CurrentSlide + 1 > slidesArrayVideos.length) {
            setCurrentSlide(1);
        } else {
            setCurrentSlide(CurrentSlide + 1);
        }
    }
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setFullscreen(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false)

        return () => {
            document.removeEventListener('keydown', escFunction, false)
        }
    }, [])

    return (
        <div
            id="player"
            ref={refPlayerScreenfull}
            className={
                fullscreen ? 'slider-player visibleCursor video-object' : 'slider-player video-object'
            }
        >
            <div
                className={
                    fullscreen ? 'visibleCursor video-toner' : 'video-toner'
                }
                onClick={() => handlePlayCurrent()}
            />
            <Slider
                ref={refSliderVideos}
                {...settingsSliderVideos}
            >
                {slidesArrayVideos.map((item) => (
                    <ReactPlayer
                        className="video-video"
                        id={'video' + item.id}
                        width={'100vw'}
                        height={'100vh'}
                        url={item.Video_}
                        muted={muted}
                        ref={item.refPlayer_}
                        onProgress={handleProgress}
                        onEnded={handleEnded}
                    />
                ))}
            </Slider>
            <div className='paginationSliders'>
                <span className='paginationSliders-current'>{CurrentSlide}</span>/{slidesArrayVideos.length}
            </div>
            <div>
                <button
                    id="prevBtnSlider_video"
                    className="prev-slider-video prev-slider"
                    onClick={() => prevSlideVideo()}
                />
                <button
                    id="nextBtnSlider_video"
                    className="next-slider-video next-slider"
                    onClick={() => nextSlideVideo()}
                />
            </div>
            <VideoControls
                playing={playing}
                handlePlay={handlePlayCurrent}
                muted={muted}
                fullscreen={fullscreen}
                handleMuted={handleMuted}
                loadedSeconds={loadedSeconds}
                playedSeconds={playedSeconds}
                handleProgressTrack={handleProgressTrack}
                handleFullScreen={handleFullScreen}
                handleFullScreenClose={handleFullScreenClose}
            />
        </div>
    )
}
