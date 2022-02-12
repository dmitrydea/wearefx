import React from 'react'
import './Preloader.css'
import preloader from './X_A2.webm'

const Preloader = ({ isLoading }) => {
        return (
            <div>
                <video className="preloader" autoPlay muted>
                    <source src={preloader} type="video/webm" />
                </video>
            </div>
        )
}

export default Preloader
