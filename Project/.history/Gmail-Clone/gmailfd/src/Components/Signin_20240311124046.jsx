import React from 'react'
import { Button } from'@mui/material'
function Signin() {
  return (
	<div style={{}}>
		<div style={{border:"1px solid grey", padding:"20px"}}>
		<h1 style={{fontWeight:"200"}}>Create your google clone account</h1>
		<h3 style={{fontWeight:"200"}}>Click the sign in button</h3>
	   	<Button varient="contained">Signin with google</Button>
		</div>
	</div>
  )
}

export default Signin
