import React, { useState } from 'react'

function ToyBox() {

	const [toys, setToys] = useState(["Teddy Bear", "Race Car"]);

	const addToy = (newToy) => {
		setToys(oldToys => [...oldToys, newToy]);
	}

  return (
	<>
	  <h1>Toy Box</h1>

	  <li>
	  {toys.map(toy => <li>{toy}</li>)}
	  </li>
	  <button onClick={() => addToy("Doll")}>Kids</button>
	  <button onClick={() => addToy("Ambassador")}> Car</button>
	  <button onClick={() => addToy("6 Series")}> BMW</button>
	  
	  
	</>
  )
}

export default ToyBox
