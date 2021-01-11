import React, { useState } from 'react'
import { Container } from './style'
import ExampleComponent from '../ExampleComponent'
import Task from '../task'
import SearchBar from '../searchBar'
//import FocusedInput from '../FocusedInput'

const NewTask = ({ label }) => {
  const [todo, setTodo] = useState('')
  const [all, setAll] = useState([])

  return (
    <>
      <Container>
        <h1>{label}</h1>
        <input maxLength="100" placeholder="learn javascript..." value={todo} onChange={e => setTodo(e.target.value)} />
        <ExampleComponent
          buttonText="Enter"
          action={() => {
            setAll(all.concat([todo]))
            setTodo('')
          }}
        />
        {all.map(todo=> <Task detail={todo} />)}
        <ExampleComponent
          buttonText="Complete Task!"
          action={() => {
            setAll(all.slice(1, all.length))
            {all.map(todo => <Task detail={todo} />)}
            // choose one to delete
          }}
        />
      </Container>
      <Container>
        <SearchBar allTask={all} />
      </Container>
    </>
  )
}
export default NewTask
