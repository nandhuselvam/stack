import React from 'react'
import { Button } from'@mui/material'
import social from "../images/social.png"
function Signin() {
  return (
	
	<div style={{position:"absolute", top:"25%", left:"35%"}}>
		<div style={{border:"1px solid grey", padding:"20px", textAlign: "center", borderRadius:"5px"}}>
			<img style= {{width:"100px"}} src={social}/>
			<h2 style={{fontWeight:"200"}}>Create your google clone account</h2>
			<h3 style={{fontWeight:"200"}}>Click the sign in button</h3>
			<Button varient="contained">Signin with google</Button>
		</div>
			
	</div>
	
  )
}

export default Signin
