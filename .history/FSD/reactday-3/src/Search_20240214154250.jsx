import React, { useState } from 'react'

function Search() {

	const [searchText, setSearchText] = useState("");

	const handleChange = (event) =>
  return (
	<div>
		<h1>Search Text</h1>
		<label htmlFor='search'>Search: </label>
		<input type="text" id='search' />
		<p>
			Searching for 
		</p>
	</div>
  )
}

export default Search
