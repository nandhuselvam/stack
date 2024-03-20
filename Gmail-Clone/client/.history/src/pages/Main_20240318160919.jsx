import { Header }from "../components/Header";
import
import { useState } from "react";


const Main = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }

	return (
		<div>
			<Header toggleDrawer={toggleDrawer}/>
			<SideBar openDrawer ={openDrawer}/>
			<div>display mail</div>
		</div>
	)
}

export default Main;