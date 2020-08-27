import React, { useState, useEffect } from 'react'
import './photo_slider.css'

export const PhotoSlider = (props) => {
    let { photoUrl } = props

    const [idx, setIdx] = useState(0)

    const shiftLeft = () => {
        if (idx === 0) {
            setIdx(2)
        } else {
            setIdx(idx-1)
        }
    }

    const shiftRight = () => {
        if (idx === 2) {
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
                    <i class="arrow left"></i>
                </span>
            </div>
            <img className='photo'
                src={`${photoUrl}`}
                alt=""
            />
            <div className='right_arrow'
                onClick={()=>shiftRight()}>
                <span>
                    <i id='la'class="arrow right"></i>
                </span>
            </div>
            <div className='dot-container'>
                <div>
                    {[...Array(3).keys()].map((i) => {
                        return (
                            <span
                                key={i}
                                id={idx === i ? 'selected-dot' : ''}
                                class="dot"
                                onClick={() => setIdx(i)}></span>                          
                        )
                    })}
                </div>
            </div>
        </div>
    )
}