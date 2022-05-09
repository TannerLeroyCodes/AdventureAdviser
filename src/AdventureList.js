import React from 'react'
import Adventure from './Adventure'

function AdventureList({adventures}) {


const arrOfAdventures = adventures.map(adventure => <Adventure adventure={adventure}/>)

  return (
    <div> {arrOfAdventures}</div>
  )
}

export default AdventureList