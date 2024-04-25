
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
			variant="persistent"
			sx={{
				'& .MuiDrawer-paper': {
					marginTop: '64px',
					width: 250,
					background: '#F5F5F5',
				}
			}}
		>
			YES
		</Drawer> 
	)
}

export default SideBar;