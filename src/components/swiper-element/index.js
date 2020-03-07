import React, { useState, useEffect, useRef } from 'react'
import Swiper from 'swiper'
import styled from 'styled-components'
import './index.css'
import 'swiper/css/swiper.css'

const Slideshow = props => {
  const { slidesPerView, height, slides, spaceBetween, loop, slidesPerGroup, autoplay,parallax } = props.properties
  const swiper = useRef(false)
  const story = useRef(false)

  useEffect(() => {
    story.current = new Swiper(swiper.current, {
      slidesPerView,
      spaceBetween,
      slidesPerGroup,
      loop,
      effect: slidesPerView === 1 ? 'fade' : '',
      autoplay,
      parallax,
      speed: 1100,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>'
        }
      }
    })
  }, [])

  const prevSlide = () => {
    story.current.slidePrev()
  }

  const nextSlide = () => {
    story.current.slideNext()
  }

  return (
    <SwiperContainer height={height || 100} className="swiper-container" ref={swiper}>
      <div className="container-story-wrapper swiper-wrapper">
        {slides.map((slide, i) => (

          <SlideDiv className="swiper-slide" key={slide + i} img={slide.img} >
            {
              parallax && <>
            <div class="title" data-swiper-parallax="-300">Slide 3</div>
            <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div class="text" data-swiper-parallax="-100">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
            </div>
            </>
          }
          </SlideDiv>
        ))}
      </div>
      <ActionButtonsPlace>
        <div className="swiper-pagination"></div>
      </ActionButtonsPlace>
      {/* <div className="navigation"> */}
      {/*  <button onClick={prevSlide}> Previous </button> */}
      {/*  <button onClick={nextSlide}> Next </button> */}
      {/* </div> */}
      {/* <div className="lightbox-container"></div> */}
    </SwiperContainer>
  )
}

const SlideDiv = styled.div`
    height: 100%;
    background-image: ${props => `url(${props.img})` || ''};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
   `

const ActionButtonsPlace = styled.div`
    position: absolute;
    left: 42px;
    bottom: 35px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
   `
const SwiperContainer = styled.div`
    width: 100%;
    height: ${props => `${props.height}vh`};
   `

export default Slideshow
