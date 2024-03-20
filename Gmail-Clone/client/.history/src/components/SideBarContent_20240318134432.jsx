

import { CreateOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material'



const ComposeButton = styled(Button)({

	background: "#c2e7ff",
	color:"#001d35",
	padding: "15px",
	borderRadius: "16px",
	minWidth:"140px",
	testTransform: "none"
})




const SideBarContent = () => {

	return (
		<Box>
			<Button>
				<CreateOutlined />Compose
				</Button>
			<Box></Box>
		</Box>
	)
	}

export default SideBarContent;