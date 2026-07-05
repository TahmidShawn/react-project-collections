import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'

const SearchBar = () => {
	const {state,dispatch} = useContext(TaskContext)
  return (
	<div>
	  Search
	</div>
  )
}

export default SearchBar

