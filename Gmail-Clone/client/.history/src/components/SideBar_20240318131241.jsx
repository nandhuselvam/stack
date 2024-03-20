
import { Drawer, styled } from '@mui/material'

const  Sidebar = ()  => {
	return (
	  <div>
		 <Drawer>
		 anchor='left'
            open={true}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
			varient=''
		 </Drawer>

	  </div>
	)
  }
  
  export default Sidebar;
  