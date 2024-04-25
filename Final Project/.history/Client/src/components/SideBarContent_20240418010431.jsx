import { Box, Button, styled, List } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material"
import { SIDEBAR_DATA } from "../config/sidebar.config";


const ComposeButton = styled(Button)({
	background: '#c2e7ff',
	color: '#001d35',
	padding: 16,
	borderRadius: 16,
	minWidth: 140,
	textTransform: 'none'

})


const SideBarContent = () => {
	return (
		<Box>
			<ComposeButton>
				<CreateOutlined /> Compose
			</ComposeButton>
			<Box></Box>
		</Box>
	)
}

export default SideBarContent; 