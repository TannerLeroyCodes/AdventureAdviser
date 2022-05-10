import React from 'react'
import Adventure from './Adventure'

function AdventureList({adventures}) {


const arrOfAdventures = adventures.map(adventure => <Adventure key ={adventure.id} adventure={adventure}/>)

  return (
      <>
      <h1>Adventure Recommendations</h1>
      <h3>Checkout these events and activities across the globe</h3>
    <ul> {arrOfAdventures}</ul>
    </>
  )
}

export default AdventureList