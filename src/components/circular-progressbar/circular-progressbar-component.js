import React from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import image from '../../zura.jpg'
import styled from 'styled-components'

const CircularProgressbarComponent = ({image, width, percentage, pathColor, trailColor}) => {
  return (
    <div style={{width}}>
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={4}
        styles={buildStyles({
          width: 'min-width',
          rotation: 0.4,
          strokeLinecap: 'butt',
          pathTransitionDuration: 0.5,
          pathColor,
          // trailColor,
          textColor: '#f88',
          backgroundColor: '#3e98c7'
        })}>
        <Img src={image} alt="doge"/>
        <LevelDiv>
          <Span>
            16
          </Span>
        </LevelDiv>
      </CircularProgressbarWithChildren>
    </div>
  )
}
const Img = styled.img`
    margin-top: -10px;
  	width: 98%;
	  border-radius: 50%;
	  z-index: -100
`

const LevelDiv = styled.div`
	  border-radius: 50%;
	  width: 24px;
	  height: 24px;
	  position: absolute;
	  padding: 10px;
	  right: 10px;
	  bottom: 10px;
	  color: white;
	  background-color: rgba(240, 52, 52, 1);
	  border: solid 2px #060608;
`

const Span = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;`

export default CircularProgressbarComponent
