import React from 'react'
import { useState } from 'react'

function ParentComponent() {
	const [message, setMessage] = useState("Hello I am Arthanari");
  return (
	<div>
	  <h1>ParentComponent</h1>
		<ParentComponent message={message/>
	</div>
  )
}

export default ParentComponent
