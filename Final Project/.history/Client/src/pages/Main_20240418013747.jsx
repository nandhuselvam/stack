

import { useState } from 'react';
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Main = () => {
	const [openDrawer, setOpenDrawer] = useState(true);

	const toggleDrawer = () => {
		setOpenDrawer(prevState => !prevState);
	}


	return (
		<div>
			<Header toggleDrawer/>
			<SideBar />
			<div>Display mails</div>
		</div>
		
	)
}

export default Main;