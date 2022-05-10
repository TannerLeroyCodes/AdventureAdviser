import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home';
import AdventureList from './AdventureList';
import AdventureSubmit from './AdventureSubmit';
import ErrorPage from './ErrorPage';

function App() {

const [adventures, setAdventures] = useState([])

useEffect(()=> {
  fetch("http://localhost:8000/adventures")
  .then(r => r.json())
  .then(data => setAdventures(data))
}, [])


function addSubmit(obj){
  const arr = [...adventures, obj]
  setAdventures(arr)
}

function handleRemoveAdventure(id) {
  const filteredAdventures = adventures.filter(adventure => adventure.id !== id)
  setAdventures(filteredAdventures)
}



  return (
    <Router>
    <NavBar className={"Navbar"}/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/adventures" element={<AdventureList onRemoveAdventure={handleRemoveAdventure}adventures={adventures}/>}/>
      <Route path="/adventures/new" element={<AdventureSubmit addSubmit={addSubmit}/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </Router>
  );
}

export default App;
