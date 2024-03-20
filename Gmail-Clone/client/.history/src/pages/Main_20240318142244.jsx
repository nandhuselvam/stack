import { Header }from "../components/Header";
import { Sidebar }from "../components/SideBar";
import { useState } from "react";


const Main = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }

	return (
		<div>
			<Header toggleDrawer=/>
			<Sidebar/>
		</div>
	)
}

export default Main;