import  SideBar  from '../components/SideBar';
import  Header  from '../components/Header';
import { useState } from "react";


const Main = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }

	return (
		<div>
			<Header toggleDrawer={toggleDrawer} />
			<SideBar openDrawer ={ openDrawer } />
			<Em
		</div>
	)
};

export default Main;