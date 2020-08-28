import React, { useState, useEffect } from 'react'
import './photo_slider.css'

export const PhotoSlider = (props) => {
    let { photoUrl, photos } = props

    const [idx, setIdx] = useState(0)

    const shiftLeft = () => {
        if (idx === 0) {
            setIdx(3)
        } else {
            setIdx(idx-1)
        }
    }

    const shiftRight = () => {
        if (idx === 3) {
            setIdx(0)
        } else {
            setIdx(idx+1)
        }
    }

    return (
        <div className='show-photo'>
            <div className='left_arrow'
                 onClick={() => shiftLeft()}>
                <span >
                    <i className="arrow left"></i>
                </span>
            </div>
            <img className='photo'
                id={idx === 0 ? 'show' : 'hide'}
                src={`${photoUrl}`}
                alt=""
            />
            {photos ? photos.map((photo,i) => (
                <img 
                    key={i}
                    className='s-photo'
                    id={idx === i+1 ? 'show' : 'hide'}
                    src={`${photo.images.medium.url}`}
                    alt=""
                /> 
            )) : null }
            <div className='right_arrow'
                onClick={()=>shiftRight()}>
                <span>
                    <i id='la'className="arrow right"></i>
                </span>
            </div>
            <div className='dot-container'>
                <div>
                    {[...Array(4).keys()].map((i) => {
                        return (
                            <span
                                key={i}
                                id={idx === i ? 'selected-dot' : ''}
                                className="dot"
                                onClick={() => setIdx(i)}></span>                          
                        )
                    })}
                </div>
            </div>
        </div>
    )
}