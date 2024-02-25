import React from 'react'

function Villager() {

	const {profileName, setProfileName} = useContext(profileNameContext);
	const [editMode, setEditMode] = useState(false);
	const [name, setName] = useState(profileName);

	const handleSave = {} => {
		setProfileName(name);
		setEditMode(false);
	}
   return (
	<div>
		{!editMode ? (
			<div>
				

		)}
	</div>
  )
}

export default Villager
