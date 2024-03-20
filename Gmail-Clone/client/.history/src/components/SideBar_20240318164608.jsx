
import { Drawer, Styled } from '@mui/material'
import SideBarContent from './SideBarContent';


const StyledDrawer = styled(Drawer)
    margintop: 54;

const  SideBar = ({ openDrawer })  => {
	return (
	  <div>
		 <Drawer
		 anchor='left'
            open={openDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
			varient= "persistent"
			sx={{
				'& .MuiDrawer-paper': {
					marginTop: "64px",
					width: "250px",
					background: "#f5F5F5",	
					borderRight: "none",
					height: "calc(100vh - 64px)"		
				},
			}}
			>
				<SideBarContent />
		 </Drawer>

	  </div>
	)
  };
  
  export default SideBar;
