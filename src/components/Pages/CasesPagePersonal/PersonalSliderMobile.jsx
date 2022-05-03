import React, { useState, useRef } from 'react'
import Slider from 'react-slick'

export const PersonalSliderMobile = () => {
    const refSlider = useRef(null)

    const nextSlide = () => {
        refSlider.current.slickNext()
    }
    const prevSlide = () => {
        refSlider.current.slickPrev()
    }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const slidesArray = [
        {
            id: 1,
            className: 'slide1 slideFlex',
            isBig: ' ',
        },
        {
            id: 2,
            className: 'slide2 slideFlex',
            isBig: ' ',
        },
        {
            id: 3,
            className: 'slide3 slideFlex',
            isBig: ' ',
        },
        {
            id: 4,
            className: 'slide4 slideFlex',
            isBig: ' ',
        },
        {
            id: 51,
            className: 'slide5 slideFlex',
            isBig: ' ',
        },
        {
            id: 11,
            className: 'slide1 slideFlex',
            isBig: ' ',
        },
        {
            id: 12,
            className: 'slide2 slideFlex',
            isBig: ' ',
        },
        {
            id: 13,
            className: 'slide3 slideFlex',
            isBig: ' ',
        },
        {
            id: 14,
            className: 'slide4 slideFlex',
            isBig: ' ',
        },
        {
            id: 15,
            className: 'slide5 slideFlex',
            isBig: ' ',
        },
    ]
    const [trackSlider, setTrackSlider] = useState('')

    const onMouseEnter = () => {
        setTrackSlider('sliderTrackMoved')
    }
    const onMouseLeave = () => {
        setTrackSlider('')
    }
    return (
        <div className={`${trackSlider} personalSlider`}>
            <Slider
                ref={refSlider}
                className={`personal-slider`}
                {...settings}
            >
                {slidesArray.map((item) => (
                    <div
                        onMouseEnter={() => onMouseEnter()}
                        onMouseLeave={() => onMouseLeave()}
                        key={item.id}
                        className={`${item.className} `}
                    />
                ))}
            </Slider>
            <button
                id="prevBtnSlider"
                className="prev-slider"
                onClick={() => prevSlide()}
            />
            <button
                id="nextBtnSlider"
                className="next-slider"
                onClick={() => nextSlide()}
            />
        </div>
    )
}
