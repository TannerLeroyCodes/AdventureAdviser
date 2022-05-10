import React, {useState} from 'react'

function AdventureSubmit() {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  const [moreInfo, setMoreInfo] = useState("")

  return (
    <form>
    <label for="fname">Enter title here</label>
    <input type="text" id="fname" name="fname" value="John"/>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" value="Doe"/>
    </form>

  )
}

export default AdventureSubmit;