import React, { useState } from 'react'
import { Container } from './style'
import Task from '../task'

const SearchBar = ({ allTask }) => {
  const [search, setSearch] = useState('')
  const searchTask = allTask.filter(task => task.includes(search))

  return (
    <Container>
      <input maxLength="100" placeholder="Search your tasks" value={search} onChange={e => setSearch(e.target.value)} />
      {searchTask.map(todo => <Task detail={todo} />)}
    </Container>
  )
}

export default SearchBar
