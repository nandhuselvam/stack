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
	  {toys.map(toy => <li>{toy}</li>)}
	  </ul>
	  <button onClick={() => addToy("Doll")}>Add</button>
	  <button onClick={() => addToy("Ambassador")}>Add Car</button>
	  <button onClick={() => addToy(""6)}>Add BMW</button>
	  
	  
	</>
  )
}

export default ToyBox