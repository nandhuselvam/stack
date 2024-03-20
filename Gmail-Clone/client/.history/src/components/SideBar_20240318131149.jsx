
import { Drawer, styled } from '@mui/material'

const  Sidebar = ()  => {
	return (
	  <div>
		 <Drawer>
		 anchor='left'
            open={true}
            onClose={toggleDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
		 </Drawer>

	  </div>
	)
  }
  
  export default Sidebar;
  