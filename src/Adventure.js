import React from 'react'

function Adventure({adventure}) {
  return (
      <li className={"card"}>
    <div>Title: {adventure.title}</div>
    <img src={adventure.image} className={"image"} height={400} width={550}></img>
    <div>Location: {adventure.location}</div>
    <div> {adventure.moreInfo}</div>
    </li>
  )
}

export default Adventure