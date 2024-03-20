
import { Drawer, styled } from '@mui/material'

const  Sidebar = ()  => {
	return (
	  <div>
		 <Drawer
		 anchor='left'
            open={true}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
			varient= "persistent"
			sx={{
				'& .MuiDrawer-paper': {
					marginTop: '64px',
					width
				},
			}}
			>
		 </Drawer>

	  </div>
	)
  }
  
  export default Sidebar;
  