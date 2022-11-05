import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import "./AnimatedTitle.css"

function AnimatedTitle({ strings }) {
    const inAnimation = 'animate__fadeInRight'
    const [outAnimation, setOutAnimation] = useState('')
    const [stringIndex, setStringIndex] = useState(0)
    const elementRef = useRef()
    useEffect(() => {
        const setFadeOutAnimation = (event) => {
            if (event.animationName === inAnimation.split('_')[2]) {
                setTimeout(() => {
                    setOutAnimation('animate__fadeOutLeft')
                }, 2000)
            } else {
                setOutAnimation('')
                setStringIndex(index => index === strings.length - 1 ? 0 : index + 1)
            }
        }
        const currentRef = elementRef.current;
        currentRef.addEventListener('animationend', setFadeOutAnimation)
        return () => {
            currentRef.removeEventListener('animationend', setFadeOutAnimation)
        }
    }, [])

    return (
        <h1 ref={elementRef} className={`title animate__animated ${inAnimation} ${outAnimation} `}>
            {strings[stringIndex]}
        </h1>
    );
}

export default AnimatedTitle;
