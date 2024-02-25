import React from 'react'
import { useState } from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent() {
	const [message, setMessage] = useState("Hello I am Arthanari");
  return (
	<div>
	  <h1>ParentComponent</h1>
		<ChildComponentComponent message={message} />
	</div>
  )
}

export default ParentComponent
