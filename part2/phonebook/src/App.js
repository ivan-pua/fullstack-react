import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [ persons, setPersons ] = useState(props.notes) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  // const [showAll, setShowAll] = useState(true)
  const [filterPattern, setNewFilter] = useState('')
  

  const addName = (event) => {
    event.preventDefault() // remember to prevent the default action of submitting HTML forms!
    const noteObject = {
      name: newName,
      number: newNum,
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }

  const arr = persons.map(p => p.name)
    
    // handles duplicates
  if (arr.includes(newName)) {
      console.log(arr)
      window.alert(`${newName} is already added to phonebook`);
    } else {
    // does not mutate original 'notes' array, but creates a NEW ARRAY + 1
      setPersons(persons.concat(noteObject))
      setNewName('')
      // setPersons(persons.concat(noteObject))
      setNewNum('')
    }
  }
  
  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    // console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    // console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  // Check for filtered pattern - case insensitive
  function searchContact (p) { 
    return p.name.toLowerCase().includes(filterPattern); 
  }
  const notesToShow = persons.filter(searchContact);

  console.log(notesToShow)
  
    return (
      <div>
        <h2>Phonebook</h2>

        <form>
          <div>Filter shown with            
            <input 
            value={filterPattern} 
            onChange = {handleFilterChange} // onChange is a built in 
            />
          </div>

        </form>

        <h2>Add a new</h2>
        <form onSubmit={addName}>
          <div>
            Name: 
            <input 
            value={newName} 
            onChange = {handleNameChange} // onChange is a built in 
            />
          </div>

          <div>
            Phone Number: 
            <input 
            value={newNum} 
            onChange = {handleNumChange} // onChange is a built in 
            />
          </div>

          <div>
            <button type="submit">add</button>
          </div>
          
        </form>  

        <h2>Numbers</h2>
        
        <ul>
          {notesToShow.map((p) => 
          
            <Note key={p.id} note={p} />
          )}
        </ul>
      </div>
    )
  }

export default App 