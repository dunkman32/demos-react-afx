import React from 'react'
import styled from 'styled-components'

const Input = ({ mission, value }) => <StyledInput onChange={mission} value={value}/>

const StyledInput = styled.input`
    padding: 15px;
  	width: auto;
	  cursor: pointer;
	  display: inline-block;
    margin: 15px 5px;
  	outline: none;
  	border: 1px solid #bbb;
    border-radius: 5px;
`

export default Input
