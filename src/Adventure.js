import React from 'react'

function Adventure({adventure, onRemoveAdventure}) {

function handleClick(){
    fetch(`http://localhost:8000/adventures/${adventure.id}`, {"method": "delete"});
    onRemoveAdventure(adventure.id)
}

  return (
      <div className={"card"} >
    <div className={"adventureTitles"}> {adventure.title}</div>
    <img src={adventure.image} className={"image"} height={400} width={550}></img>
    <div>Location: {adventure.location}</div>
    <div> {adventure.moreInfo}</div>
    {adventure.isNew ? <button onClick={handleClick}>Delete</button> : null }
    </div>
  )
}

export default Adventure