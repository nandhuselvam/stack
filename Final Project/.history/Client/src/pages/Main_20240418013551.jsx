

import { useState } from 'react';
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Main = () => {
	const [openDrawer, SetOpenDrawer] = useState(true);

	const toggleDrawer = () => {
		setOpenDrawer(prev)
	}


	return (
		<div>
			<Header />
			<SideBar />
			<div>Display mails</div>
		</div>
		
	)
}

export default Main;