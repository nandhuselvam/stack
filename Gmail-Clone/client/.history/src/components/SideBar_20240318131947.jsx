
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
					marginTop: "64px",
					width: "250px",
					background: '#f5F5F5",				},
			}}
			>
		 </Drawer>

	  </div>
	)
  }
  
  export default Sidebar;
  