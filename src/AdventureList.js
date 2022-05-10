import React from 'react'
import Adventure from './Adventure'

function AdventureList({adventures, onRemoveAdventure, searchInput, setSearchInput}) {


const arrOfAdventures = adventures.map(adventure => <Adventure key ={adventure.id} adventure={adventure} onRemoveAdventure={onRemoveAdventure}/>)

  return (
      <>
      <h1>Adventure Recommendations</h1>
      <h3>Checkout these events and activities across the globe</h3>
      <input
       type="text"
       id="search"
       placeholder="Type a name to search..."
       value={searchInput} 
       onChange={(e) => setSearchInput(e.target.value)} 
       />
    <ul> {arrOfAdventures}</ul>
    </>
  )
}

export default AdventureList