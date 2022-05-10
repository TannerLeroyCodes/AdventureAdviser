import React from 'react'

function Adventure({adventure}) {

function handleClick(){
    fetch(`http://localhost:8000/adventures/${adventure.id}`, {"method": "delete"});

}

  return (
      <li className={"card"} >
    <div className={"adventureTitles"}> {adventure.title}</div>
    <img src={adventure.image} className={"image"} height={400} width={550}></img>
    <div>Location: {adventure.location}</div>
    <div> {adventure.moreInfo}</div>
    {adventure.isNew ? <button onClick={handleClick}>Delete</button> : null }
    </li>
  )
}

export default Adventure