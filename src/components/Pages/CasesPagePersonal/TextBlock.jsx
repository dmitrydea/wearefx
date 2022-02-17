import React from 'react'

const TextBlock = ({ text, firstTxt, secondTxt,heightClass, approachTxt }) => {
    return (
        <div className={`${heightClass} text-block`}>
            <div className="text-block-div">
                <p className="text-block-p">
                    <span dangerouslySetInnerHTML={{__html: text}}></span>
                    <div className={firstTxt && secondTxt ? 'desc' : 'desc displayNoneMain'}>
                        <p>{firstTxt}</p>
                        <p>{secondTxt}</p>
                    </div>
                </p>
                <p className="text-block-p approach">{approachTxt}</p>
            </div>
        </div>
    )
}

export default TextBlock
