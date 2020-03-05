import React from 'react'
import styled from 'styled-components'

const Slide = ({ content, width }) => <SlideDiv style={{ width: `${width}px`, backgroundImage: `url('${content.img}')` }}/>

const SlideDiv = styled.div`
   height: 100%;
     background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `

export default Slide
