import React, { useState } from 'react'

function Search() {
	let searchText = "";

	// const [searchText, setSearchText] = useState("");

	const handleChange = (event) => {
		searchText = event.target.value;
		setSearchText(event.target.value);
		console.log("Search Text:", searchText);
	}
  return (
	<div>
		<h1>Search Text</h1>
		<label htmlFor="search">Search: </label>
		<input type="text" id="search" onChange={handleChange} />
		<p>
			Searching for <strong> {searchText} </strong>
		</p>
	</div>
  )
}

export default Search
