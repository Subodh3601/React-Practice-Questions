import React from 'react'
import './styles.css'
const Card = ({name,about}) => {
  return (
      <div className="card">
          <h1>{name}</h1>
          <p>{about }</p>
    </div>
  )
}

export default Card