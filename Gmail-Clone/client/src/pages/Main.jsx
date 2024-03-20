import  SideBar  from '../components/SideBar';
import  Header  from '../components/Header';
import { useState } from "react";
import Emails from '../components/Emails';


const Main = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }

	return (
		<div>
			<Header toggleDrawer={toggleDrawer} />
			<SideBar openDrawer ={ openDrawer } />
			<Emails openDrawer ={ openDrawer }/>
		</div>
	)
};

export default Main;