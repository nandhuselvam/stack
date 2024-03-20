
import { Drawer, styled } from '@mui/material'

const  Sidebar = ()  => {
	return (
	  <div>
		 <Drawer>
		 anchor='left'
            open={openDrawer}
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
  