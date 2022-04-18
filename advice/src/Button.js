import React from 'react'
import './Button.scss';
import dice from './svg/icon-dice.svg';

function Button({getNewData}) {
  return ( 
    <button className='btn primary' onClick={() => {getNewData()}}><img src={dice} alt="dice" /></button>
  )
}

export default Button