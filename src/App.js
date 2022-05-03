import React, { useEffect, useState } from 'react'
import Preloader from './components/Preloader/Preloader'
import './styles/Global.css'
import CursorProvider from './components/CursorProvider/CursorProvider'
import MainPage from './components/MainPage/MainPage'

function App({ setShowOneTime, showOneTime }) {
    const [isLoading, setIsLoading] = useState(false)

    const [is1BtnHovered, setIs1BtnHovered] = useState(false)
    const [is2BtnHovered, setIs2BtnHovered] = useState(false)
    const [is3BtnHovered, setIs3BtnHovered] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setShowOneTime(false)
        }, 2400)
    }, [])
    useEffect(() => {
        if (isLoading) {
            let canvas = document.getElementById('overlay1')
            canvas.classList.add('displayNone')
            canvas = document.getElementById('overlay2')
            canvas.classList.add('displayNone')
            canvas = document.getElementById('overlay3')
            canvas.classList.add('displayNone')
        } else {
            let canvas = document.getElementById('overlay1')
            canvas.classList.remove('displayNone')
            canvas = document.getElementById('overlay2')
            canvas.classList.remove('displayNone')
            canvas = document.getElementById('overlay3')
            canvas.classList.remove('displayNone')
        }
    }, [isLoading])

    if (isLoading && showOneTime) {
        return <Preloader />
    } else {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return width > 811 ? (
            <div className={'App'}>
                <div>
                    <CursorProvider
                        hoveredCursor={is1BtnHovered}
                        hoveredCursor1={is2BtnHovered}
                        hoveredCursor2={is3BtnHovered}
                    >
                        <MainPage
                            setIs1BtnHovered={setIs1BtnHovered}
                            setIs2BtnHovered={setIs2BtnHovered}
                            setIs3BtnHovered={setIs3BtnHovered}
                            is1BtnHovered={is1BtnHovered}
                            is2BtnHovered={is2BtnHovered}
                            is3BtnHovered={is3BtnHovered}
                        />
                    </CursorProvider>
                </div>
            </div>
        ) : (
            <div className={'App'}>
                <div>
                    <MainPage
                        setIs1BtnHovered={setIs1BtnHovered}
                        setIs2BtnHovered={setIs2BtnHovered}
                        setIs3BtnHovered={setIs3BtnHovered}
                        is1BtnHovered={is1BtnHovered}
                        is2BtnHovered={is2BtnHovered}
                        is3BtnHovered={is3BtnHovered}
                    />
                </div>
            </div>
        )
    }
}

export default App
