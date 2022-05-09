import React from 'react'

function Adventure({adventure}) {
  return (
      <>
    <div>Title: {adventure.title}</div>
    <img src={adventure.image} height={400} width={500}></img>
    <div>Location: {adventure.location}</div>
    <div> {adventure.moreInfo}</div>
    </>
  )
}

export default Adventure