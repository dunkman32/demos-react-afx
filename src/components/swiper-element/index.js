import React, { useState, useEffect, useRef } from 'react'
import Swiper from 'swiper'
import './index.css'
import 'swiper/css/swiper.css'

const Slideshow = props => {
  const swiper = useRef(false)
  const story = useRef(false)

  const [activeSlide, setActiveSlide] = useState('')

  useEffect(() => {
    story.current = new Swiper(swiper.current, {
      loop: false,
      speed: 1100,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
    })
  }, [])

  const prevSlide = () => {
    setActiveSlide('PREV')
    story.current.slidePrev()
  }

  const nextSlide = () => {
    setActiveSlide('NEXT')
    story.current.slideNext()
  }

  return (
    <div className="swiper-container container-story" ref={swiper}>
      <div className="container-story-wrapper swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        <div className="swiper-slide">Slide 4</div>
        <div className="swiper-slide">Slide 5</div>
        <div className="swiper-slide">Slide 6</div>
        <div className="swiper-slide">Slide 7</div>
        <div className="swiper-slide">Slide 8</div>
      </div>
      <div className={'spanButtons'}>
        <div className="swiper-pagination"></div>
      </div>
      {/*<div className="navigation">*/}
      {/*  <button onClick={prevSlide}> Previous </button>*/}
      {/*  <button onClick={nextSlide}> Next </button>*/}

      {/*  {activeSlide}*/}
      {/*</div>*/}
      {/*<div className="lightbox-container"></div>*/}
    </div>
  )
}
export default Slideshow
