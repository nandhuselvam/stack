import React, { useState } from 'react'

function Search() {

	const [searchText, setSearchText] = useState("");
  return (
	<div>
		<h1>Search Text</h1>
		<label htmlFor='search'>Search: </label>
	</div>
  )
}

export default Search
