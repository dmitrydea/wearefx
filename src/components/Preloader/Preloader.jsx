import React from 'react'
import './Preloader.css'
import preloader from './X_A2.webm'
import preloader_mp from './X_A2.mp4'

const Preloader = ({ isLoading }) => {
        return (
            <div>
                <video className="preloader" autoPlay muted playsInline>
                    <source src={preloader_mp} type="video/mp4" />
                    <source src={preloader} type="video/webm" />
                </video>
            </div>
        )
}

export default Preloader
