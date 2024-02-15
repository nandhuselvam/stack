import React, { useState } from 'react'

function ToyBox() {

	const [toys, setToys] = useState(["Teddy Bear", "Race Car"]);

	const addToy = (newToy) => {
		setToys()
	}
  return (
	<>
	  <h1>Toy Box</h1>
	</>
  )
}

export default ToyBox
