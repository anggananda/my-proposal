import React from 'react'

const Audio = () => {
  return (
    <audio autoPlay loop controls={false}>
        <source src="./audio/lovelysound.mp3" type="audio/mpeg" />
    </audio>
  )
}

export default Audio