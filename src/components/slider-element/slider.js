import React, { useState, useEffect, useRef } from 'react'
import SliderContent from './slider-content'
import Slide from './slide'
import styled from 'styled-components'
// import Arrow from './Arrow'
import Dots from './dots'

const getWidth = () => window.innerWidth

/**
 * @function Slider
 */
const Slider = props => {
  const { slides } = props

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
    _slides: slides
  })

  const { activeSlide, translate, _slides, transition } = state

  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()

  useEffect(() => {
    const next = activeSlide === (slides.length - 1) ? 0 : (activeSlide + 1)
    autoPlayRef.current = () => nextSlide(next)
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const smooth = e => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current()
      }
    }

    const resize = () => {
      resizeRef.current()
    }

    const transitionEnd = window.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)

    let interval = null

    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000)
    }

    return () => {
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)

      if (props.autoPlay) {
        clearInterval(interval)
      }
    }
  }, [])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const smoothTransition = () => setState({
    ...state,
    _slides,
    translate: getWidth()
  })

  const nextSlide = (i) => setState({
    ...state,
    activeSlide: i,
    translate: getWidth() * i
  })

  return (
    <SliderDiv>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide width={getWidth()} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>
        <Dots slides={slides} nextSlide={nextSlide} activeSlide={activeSlide} />
    </SliderDiv>
  )
}

const SliderDiv = styled.div`
  position: relative;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`

export default Slider
