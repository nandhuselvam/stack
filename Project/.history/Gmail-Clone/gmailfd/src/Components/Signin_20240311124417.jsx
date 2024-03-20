import React from 'react'
import { Button } from'@mui/material'

function Signin() {
  return (
	<center>
		<div style={{position:"absolute", top:"40%, left:35%"}}>
		<div style={{border:"1px solid grey", padding:"20px", textAlign: "center", borderRadius:"5"}}>
		<h1 style={{fontWeight:"200"}}>Create your google clone account</h1>
		<h3 style={{fontWeight:"200"}}>Click the sign in button</h3>
	   	<Button varient="contained">Signin with google</Button>
		</div>
	</div>
	</center>
  )
}

export default Signin
