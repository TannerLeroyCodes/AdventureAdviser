import React from 'react'
import {NavLink} from "react-router-dom"


function NavBar() {
  return (
    <div>
      <NavLink to="/"> Home    </NavLink>
      <NavLink to="/adventures" >  Adventure List     </NavLink> 
      <NavLink to="/adventures/new" > Submit an Adventure    </NavLink>
      </div>
  )
}

export default NavBar