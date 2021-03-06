import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import App from './App'
import CasesFullMobile from './components/Cases/CasesFullMobile'
import CasesMobile from './components/Cases/CasesMobile'
import CasesPersonalMobile from './components/Cases/CasesPersonalMobile'
import HireMobile from './components/Hire/HireMobile'
import { CasesPage } from './components/Pages/CasesPage/CasesPage'
import CasesPagePersonal from './components/Pages/CasesPagePersonal/CasesPagePersonal'
import HirePage from './components/Pages/HirePage/HirePage'
import { StoryPage } from './components/Pages/StoryPage/StoryPage'
import StoryMobile from './components/Story/StoryMobile'
import StoryMobileFull from './components/Story/StoryMobileFull'
import { useTransition, animated } from 'react-spring'
import ScrollTop from './components/ScrollTop/ScrollTop'



const Routerelement = () => {
    var check_html_hid = ["wearefx","cases"];
    const location = useLocation();
    var loc__ = location.pathname.replace(/\//g, '');
    console.log(loc__);
    if(check_html_hid.indexOf(loc__) > -1) {
        try {
            document.getElementsByTagName("html")[0].style.overflow = "hidden"; 
        } catch (error) { }
    } else {
        try {
            document.getElementsByTagName("html")[0].style.overflow = "visible"; 
        } catch (error) { }
    }
    const sleep = (t) => new Promise((res) => setTimeout(res, t))
    const transitions = useTransition(location, {
        from: window.innerWidth > 811 ?  {
            position: 'absolute',
            width: '100vw',
            heigth: '100vh',
            opacity: 0,
            transform: 'translatesY(0%)',
            filter: 'blur(1.2rem)',
        } : {
            position: 'absolute',
            width: '100vw',
            heigth: '100vh',
            opacity: 0,
            transform: 'translatesY(0%)'
        },
        enter: (i) => async (next) => {
            await sleep(500)
            await next( window.innerWidth > 811 ? {
                position: 'absolute',
                width: '100vw',
                heigth: '100vh',
                opacity: 1,
                transform: 'translatesY(0%)',
                filter: 'blur(0rem)',
            } : {
                position: 'absolute',
                width: '100vw',
                heigth: '100vh',
                opacity: 1,
                transform: 'translatesY(0%)'
            })
        },
        leave: window.innerWidth > 811 ? {
            position: 'absolute',
            width: '100vw',
            heigth: '100vh',
            opacity: 0,
            transition: 'ease',
            transform: 'translatesY(100%)',
            filter: 'blur(0.6rem)',
        } : {
            position: 'absolute',
            width: '100vw',
            heigth: '100vh',
            opacity: 0,
            transition: 'ease',
            transform: 'translatesY(100%)'
        },
    })

    const [showOneTime, setShowOneTime] = useState(true)
    return transitions((props, item) => (
        <animated.div style={props}>
            <Routes location={item}>
                <Route
                    exact
                    path="/wearefx"
                    element={
                        <App
                            showOneTime={showOneTime}
                            setShowOneTime={setShowOneTime}
                        />
                    }
                />
                <Route exact path="/story" element={<StoryPage />} />
                <Route exact path="/cases" element={<CasesPage />} />
                <Route exact path="/hire" element={<HirePage />} />
                <Route exact path="/storyMobile" element={<StoryMobile />} />
                <Route
                    exact
                    path="/storyMobileFull"
                    element={<StoryMobileFull />}
                />
                <Route exact path="/hireMobile" element={<HireMobile />} />
                <Route exact path="/casesMobile" element={<CasesMobile />} />
                <Route
                    exact
                    path="/casesPersonalMobile/:id"
                    element={<CasesPersonalMobile />}
                />
                 <Route
                    exact
                    path="/cases/:id"
                    element={<CasesPagePersonal />}
                />
                <Route
                    exact
                    path="/casesfullmobile"
                    element={<CasesFullMobile />}
                />
            </Routes>
            <ScrollTop />
        </animated.div>
    ))
}

export default Routerelement
