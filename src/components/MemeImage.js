import React from 'react'

const MemeImage = ({meme}) => {
  
  return (
    <img className = "meme--image" src = {meme.randomImage} alt = {meme.imageTitle} />
  )
}

export default MemeImage