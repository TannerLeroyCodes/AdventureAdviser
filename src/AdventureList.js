import React from 'react'
import Adventure from './Adventure'

function AdventureList({adventures}) {


const arrOfAdventures = adventures.map(adventure => <Adventure adventure={adventure}/>)

  return (
      <>
      <h1>Adventure Recommendations</h1>
    <div> {arrOfAdventures}</div>
    </>
  )
}

export default AdventureList