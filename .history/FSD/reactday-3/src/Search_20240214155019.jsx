import React, { useState } from 'react'

function Search() {
	let search

	// const [searchText, setSearchText] = useState("");

	const handleChange = (event) => {
		setSearchText(event.target.value);
		console.log("Search Text:", searchText);
	}
  return (
	<div>
		<h1>Search Text</h1>
		<label htmlFor='search'>Search: </label>
		<input type="text" id='search' onChange={handleChange}/>
		<p>
			Searching for 
		</p>
	</div>
  )
}

export default Search
