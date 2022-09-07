import React from 'react'

const AdviceNumber = ({ item }) => {
  return (
    <header className='header'>
      <p>Advice</p>
      <span className='advice_number'># {item.id}</span>
    </header>
  )
}

export default AdviceNumber