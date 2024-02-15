import React, { useState } from 'react'

function ToyBox() {

	const [toys, setToys] = useState(["Teddy Bear", "Race Car"]);

	const addToy = (newToy) => {
		setToys(oldToys => [...oldToys, newToy]);
	}

  return (
	<>
	  <h1>Toy Box</h1>

	  <ul>
	  {toys.map(toy => <li>{toys}</li>)}
	  </ul>
	</>
  )
}

export default ToyBox
