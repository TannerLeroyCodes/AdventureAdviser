import React from 'react'
import {NavLink} from "react-router-dom"
import Home from './Home'
import AdventureList from './AdventureList'
import AdventureSubmit from './AdventureSubmit'


function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
      > 
    Home  
      </NavLink>
      <NavLink
        to="/adventurelist"
      >
        Adventure List   
      </NavLink>
      <NavLink
        to="/submit" >
           Submit  
      </NavLink>
      </div>
  )
}

export default NavBar