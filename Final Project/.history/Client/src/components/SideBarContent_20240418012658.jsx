import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined, CurtainsRounded } from "@mui/icons-material"
import { SIDEBAR_DATA } from "../config/sidebar.config";


const ComposeButton = styled(Button)({
	background: '#c2e7ff',
	color: '#001d35',
	padding: 16,
	borderRadius: 16,
	minWidth: 140,
	textTransform: 'none'
});

const Container = styled(Box)({
	padding: 8,
	'& > ul': {
		padding: '10px 0 0 5px',
		fontSize: 14,
		fontWeight: 500,
		cursor: 'pointer'
	},
	'& > ul > li > svg'
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