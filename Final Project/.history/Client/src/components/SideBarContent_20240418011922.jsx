import { Box, Button, styled, List, ListItem, Container } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material"
import { SIDEBAR_DATA } from "../config/sidebar.config";


const ComposeButton = styled(Button)({
	background: '#c2e7ff',
	color: '#001d35',
	padding: 16,
	borderRadius: 16,
	minWidth: 140,
	textTransform: 'none'
});

const Container = styled(Box) ({
	padding
})


const SideBarContent = () => {
	return (
		<Container>
			<ComposeButton>
				<CreateOutlined /> Compose
			</ComposeButton>
			<List>
				{
					SIDEBAR_DATA.map(data => (
						<ListItem>
							<data.icon fontSize="medium" />{data.title}
						</ListItem>
					))
				}
			</List>
		</Container>
	)
}

export default SideBarContent; 