import React from 'react'
import GrandChildComponent from './GrandChildComponent'

function ChildComponent({message}) {
  return (
	<div>
	  <h2>ChildComponent</h2>
	  <GrandChildComponent 
	</div>
  )
}

export default ChildComponent
