import React from 'react'
import images from '../images'
import SwiperElement from '../components/swiper-element'

const Login = ({ children }) => {
  const singleSlide = {
    slides: images,
    slidesPerView: 1,
    loop: true,
    parallax: true,
    slidesPerGroup: 1
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  }

  return (
    <>
      <SwiperElement properties={singleSlide}/>
      {children}
    </>
  )
}

export default Login
