import React from 'react'
import { Link } from 'react-router-dom'

const HirePageHeader = () => {
    return (
        <div className="story-header">
            <div className="header-left">
                <div>
                    <h1 className='special__hire'>Hire</h1>
                    <h1 className='special__hire_2'>us</h1>
                </div>
                <div>
                    <Link className='hover__special__menu' to="/cases">Cases</Link>
                    <Link className='hover__special__menu' to="/story">our story</Link>
                </div>
            </div>
            <Link to="/wearefx">
                        <div className="animated-logo-X">X</div>
                <div className="animated-logo header-right"></div>
            </Link>
        </div>
    )
}

export default HirePageHeader
