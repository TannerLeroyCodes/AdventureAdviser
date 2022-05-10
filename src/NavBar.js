import React from 'react'
import {NavLink} from "react-router-dom"


function NavBar() {
  return (
    <div className={'navBar'}>
      <NavLink className={'navBarLink'} to="/"> Home    </NavLink>
      <NavLink className={'navBarLink'} to="/adventures" >  Adventures  </NavLink> 
      <NavLink className={'navBarLink'} to="/adventures/new" > Submit an Adventure    </NavLink>
      </div>
  )
}

export default NavBar