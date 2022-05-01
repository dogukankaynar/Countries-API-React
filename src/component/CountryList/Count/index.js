import React from 'react'

function Count(props) {
  return (
    <div className='country-count'>
      <h1 className='App-header'>{props.name || 'Count Name'}</h1>
      <img className='count-flag' src={props.flag} />
      <span>{props.capital}</span>
      <span>{props.subregion}</span>
    </div>
  )
}

export default Count