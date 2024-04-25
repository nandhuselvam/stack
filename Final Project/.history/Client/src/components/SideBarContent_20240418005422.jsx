import { Box, Button, styled  } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material"


const ComposeButton = styled(Button)({
	background: '#c2e7ff'
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