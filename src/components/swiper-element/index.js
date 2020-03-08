import React, { useState, useEffect, useRef } from 'react'
import Swiper from 'swiper'
import styled from 'styled-components'
import './index.css'
import 'swiper/css/swiper.css'

const Slideshow = props => {
  const { slidesPerView, height, slides, spaceBetween, loop, slidesPerGroup, autoplay, parallax } = props.properties
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
      <div className="swiper-wrapper">
        {slides.map((slide, i) => (

          <SlideDiv className="swiper-slide" key={slide + i} img={slide.img} >
            {
              parallax && <Info>
            <Title className="title" data-swiper-parallax="-300">Slide 3</Title>
            <Description className="text" data-swiper-parallax="-100">
              <p> Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
            </Description>
            </Info>
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
    text-align: center;
    font-size: 18px;
    /*background: #fff;*/
    background-color: #007aff;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
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

const Info = styled.div`
    display: block;
    width: 35%;
    position: absolute;
    left: 42px;
    bottom: 71px;
   `

const Title = styled.div`
    width: 100px;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.67;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
   `

const Description = styled.div`
    font-size: 14px;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
    color: rgba(255, 255, 255, .3);
   `

export default Slideshow
