import React from 'react';

const Content = ({item}) => {
  return (
    <section className='content'>
      <h1 className='advice_text'>"{item.advice}"</h1>

      <div className="divider">
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default Content