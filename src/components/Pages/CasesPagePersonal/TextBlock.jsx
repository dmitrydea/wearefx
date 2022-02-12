import React from 'react'

const TextBlock = ({ text, firstTxt, secondTxt,heightClass }) => {
    return (
        <div className={`${heightClass} text-block`}>
            <div className="text-block-div">
                <p className="text-block-p">
                    {text}
                    <div className="desc">
                        <p>{firstTxt}</p>
                        <p>{secondTxt}</p>
                    </div>
                </p>
                <p className="text-block-p approach">Approach</p>
            </div>
        </div>
    )
}

export default TextBlock
