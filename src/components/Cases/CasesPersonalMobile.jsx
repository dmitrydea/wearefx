import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StoryFooter from '../Pages/StoryPage/StoryComponents/StoryBottom/StoryFooter'
import Slider from 'react-slick'
import { PersonalSliderMobile } from '../Pages/CasesPagePersonal/PersonalSliderMobile'
import TextBlock from '../Pages/CasesPagePersonal/TextBlock'
import ContactBlock from '../Pages/CasesPagePersonal/ContactBlock'
import slide_ from '../../images/personal/gif.png';
import slide_log_1 from '../../images/personal/NAVI.png';
import slide_log_2 from '../../images/personal/Puma.png';
import slide_2 from '../../images/personal/gif2.png';
import next_proj from '../../images/gifcase2.svg';

const CasesPersonalMobile = () => {
    const [isClicked, setIsClicked] = useState(false)
    const settingsSliderVideos = {
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            setCurrentSlide(next + 1);
        }
    }
    const [CurrentSlide, setCurrentSlide] = useState(1);
    const [AllSlides, setAllSlides] = useState(3);
    return (
        <div className="story-mobile">
            <div className='nose_'>
                <div className="mobile-header">
                    <Link to="/storyMobile" className="link">
                        Our story
                    </Link>
                    <Link to="/wearefx" className="to-home"></Link>
                    <Link to="/hireMobile" className="link">
                        hire us
                    </Link>
                </div>
                <Link to="/casesMobile" className="backHref">
                    &#60; Back to cases
                </Link>
                <div className='cpm_'>
                    <h1 className="header-title">NAVI X PUMA<span className='schar__'>.</span> OBSESSED WE<span className='schar__'>.</span></h1>
                    <h6 className="header-desc">Granding, VFX, motion, production</h6>
                </div>
                <div className='sliderWrapper'>
                    <Slider {...settingsSliderVideos}>
                        <div className='sl-itm'>
                            <img src={slide_} alt="" />
                            <div className='sl-logos_'>
                                <img className='logos_icon' src={slide_log_2} alt="" />
                                <img className='logos_icon' src={slide_log_1} alt="" />
                            </div>
                            <div className='btn_play_video'>Play full video</div>
                        </div>
                        <div className='sl-itm'>
                        <img src={slide_} alt="" />
                            <div className='sl-logos_'>
                                <img className='logos_icon' src={slide_log_2} alt="" />
                                <img className='logos_icon' src={slide_log_1} alt="" />
                            </div>
                            <div className='btn_play_video'>Play full video</div>
                        </div>
                        <div className='sl-itm'>
                        <img src={slide_} alt="" />
                            <div className='sl-logos_'>
                                <img className='logos_icon' src={slide_log_2} alt="" />
                                <img className='logos_icon' src={slide_log_1} alt="" />
                            </div>
                            <div className='btn_play_video'>Play full video</div>
                        </div>
                    </Slider>
                    <div className='paginationSliders'>
                        <span className='paginationSliders-current'>{CurrentSlide}</span>/{AllSlides}
                    </div>
                </div>
                <TextBlock
                heightClass={'heightClass3'}
                    text={
                        'we wanted to show the duality of the life that a child with kidney disease faces everyday. We came up with a technique commonly used in photography, but not as often used in films.'
                    }
                    approachTxt={
                        'Approach'
                    }
                />
                <div>
                    <div className='sl-itm'>
                        <img src={slide_2} alt="" />
                        <div className='btn_play_video'>Play full video</div>
                    </div>
                </div>
                <TextBlock
                    heightClass={'heightClass'}
                    text={
                        'The key to pulling of the multiplicity effect was a piece of camera equipment know as a Technodolly. This computer controlled camera crane, can be pre-programmed to make the same camera movement over and over again. As it follows the same predefined path we shoot the kids in different positions. This allows to overlay and stitch the shots so we end up with the same child twice in one shot'
                    }
                    approachTxt={
                        'Technique'
                    }
                />
                <PersonalSliderMobile />
                <TextBlock
                heightClass={'heightClass2 text-block-special-bg'}
                    firstTxt={'Kees Albers - creative director'}
                    secondTxt={'Bureauloos'}
                    text={
                        '“It was a real pleasure working together with this team. WeareFX, they really took the concept of the film to the next level! The result is really great and even better than we imagined."'
                    }
                    approachTxt={
                        'Testimonial'
                    }
                />
                <div>
                    <div className='PreviewImages'>
                        <img src="/wearefx/static/media/image 8.61e3dc47.svg" alt="" />
                    </div>
                    <div className='PreviewImages'>
                        <img src="/wearefx/static/media/image 9.742ed35d.svg" alt="" />
                    </div>
                    <div className='PreviewImages'>
                        <img src="/wearefx/static/media/image 10.9b4af571.svg" alt="" />
                    </div>
                </div>
                <div className='cpm_button_position'>
                    <Link to="/storyMobileFull">
                        <div className="casesBtn gradientBtn hmb02 hmb03">
                            <p>
                                View our
                                <br />
                                expertise &<br />
                                tech.
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
                <ContactBlock />
                <Link to="/casesPersonalMobile/1">
                    <div className='cpm_next_project'>next project</div>
                </Link>
                <div className='cpm_next_project_block'>
                    <div className='cpm_next_project_block_overlay'></div>
                    <div className='cpm_next_project_block_text'>
                        <p>McDonald<span className='schar__'>'</span>s</p>
                        <p>Granding, VFX, motion</p>
                    </div>
                    <img src={next_proj} alt="" />
                </div>
                <div>
                    <StoryFooter />
                </div>
            </div>
        </div>
    )
}

export default CasesPersonalMobile
