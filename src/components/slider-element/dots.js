import React from 'react'
import styled from 'styled-components'

const Dots = ({ slides, activeSlide, nextSlide }) => (
  <StyledDotsMain>
    {slides.map((slide, i) => (
      <StyledDotSpan key={slide} onClick={() => {
        nextSlide(i)
      }} style={activeSlide === i ? {
        background: 'rgba(255,255,255, 1)',
        padding: '3px 41px'
      } : {
        background: 'rgba(255,255,255, 0.7)',
        padding: '3px 12.5px'
      }}/>
    ))}
  </StyledDotsMain>
)

const StyledDotsMain = styled.div`
      position: absolute;
      left: 42px;
      bottom: 35px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
    `

const StyledDotSpan = styled.span`
      margin-right: 5px;
      cursor: pointer;
      border-radius: 5px;
    `

export default Dots
