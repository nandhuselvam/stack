import React, { useContext, useState } from 'react'
import { ProfileNameContext } from './ProfileNameContext'

function Messenger() {
	const { profileName, setProfileName } = useContext(ProfileNameContext);
    const { profileName1, setProfileName1 } = useContext(ProfileNameContext);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(profileName);

    const handleSave = () => {
		setProfileName(name);
        setProfileName1(name);
        setEditMode(false);
    }
    return (
        <div>
            {!editMode ? (
                <div>
                    <p>{profileName} - {</p>
                    <button onClick={() => setEditMode(true)}>Edit Name</button>
                </div>
            ) : (
                <div>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    )
}

export default Messenger