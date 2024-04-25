import { Box, Button, styled  } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material"


const ComposeButton = styled(Button)({
	background: '#c2e7ff',
	color: '#001d35',
	padding: 16,
	borderRadius: 16
})


const SideBarContent = () => {
	return (
		<Box>
			<ComposeButton>
				<CreateOutlined> Compose </CreateOutlined>
			</ComposeButton>
			<Box></Box>
		</Box>
	)
}

export default SideBarContent; 