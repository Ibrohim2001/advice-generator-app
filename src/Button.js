import React from 'react';
import Dice from './img/dice.svg'

const Button = ({ item, setAdvice }) => {
  return (
    <button 
      className='button'
      onClick={() => setAdvice(item)}
    >
      <img src={Dice} alt="" />
    </button>
  )
}

export default Button