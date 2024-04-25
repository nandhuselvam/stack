
import { Drawer, styled } from '@mui/material';
const SideBar = () => {

	return (
		<Drawer
			anchor='left'
			open={true}
			hideBackdrop={true}
			ModelProps={{
				keepMounted: true
			}}
			variant=''
		>
			YES
		</Drawer> 
	)
}

export default SideBar;