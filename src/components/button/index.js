import React from 'react'
import styled from 'styled-components'

const hexToRgb = hex => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

const getTextColor = (color) => {
  const rgb = hexToRgb(color)
  if (rgb) {
    const o = Math.round(((parseInt(rgb.r) * 299) +
      (parseInt(rgb.g) * 587) +
      (parseInt(rgb.b) * 114)) / 1000)
    return (o > 125) ? 'black' : 'white'
  }
}

const StyledButtonCss = styled.button`
    padding: 15px 50px;
  	width: auto;
  	background:  ${props => props.color || '#0066ff'};
	  border: none;
	  color: white;
	  cursor: pointer;
	  display: inline-block;
    margin: 15px 5px;
  	outline: none;
  	color:  ${props => getTextColor(props.color || '#0066ff')};
  	border: 1px solid #bbb;
    border-radius: 5px;
    transition:  .3s;
    :hover {
        opacity: 0.8
    }
`
const Button = ({ label, color, mission }) =>
  <StyledButtonCss color={color} onClick={mission}>{label}</StyledButtonCss>

export default Button
