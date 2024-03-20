import React from 'react'
import { Button } from'@mui/material'
import social from "../images/social.png"
import {signInWithPopup} from "firebase/auth"
import { auth, googleProvider } from '../Firebase/Setup'


function Signin() {

	const googleSignin = async() => {
		try{
			await signInWithPopup(auth,googleProvider)
		}catch(err) {
			console.log(err)
		}
		
	}
  return (

	
	<div style={{position:"absolute", top:"25%", left:"35%"}}>
		<div style={{border:"1px solid grey", padding:"20px", textAlign: "center",
		 borderRadius:"5px", height:"320px"}}>

			<img style= {{width:"100px"}} src={social}/>
			<h1 style={{fontWeight:"200"}}>Create your google clone account</h1>
			<h2 style={{fontWeight:"200"}}>Click the sign in button</h2>
			<Button onClick= {googleSignin} varient="contained">Signin with google</Button>
		</div>
			
	</div>
	
  )
}

export default Signin
