import React from 'react'
import Adventure from './Adventure'

function AdventureList({adventures, filterBy, onSelect, onRemoveAdventure, searchInput, setSearchInput}) {

  function handleChangeFilter(event){
    onSelect(event.target.value)
  }

const arrOfAdventures = adventures.map(adventure => <Adventure key ={adventure.id} adventure={adventure} onRemoveAdventure={onRemoveAdventure}/>)

  return (
      <>
      <h1>Adventure Recommendations</h1>
      <h3>Checkout these events and activities across the globe</h3>
      <select onChange={handleChangeFilter} value={filterBy}>
        <option value="" >All Adventures</option>
        <option value="event" > Events</option>
        <option value="activity"> Activties</option>
      </select>
      <input
       type="text"
       id="search"
       placeholder="Type a name or country to search..."
       value={searchInput} 
       onChange={(e) => setSearchInput(e.target.value)} 
       />
    <ul> {arrOfAdventures}</ul>
    </>
  )
}

export default AdventureList