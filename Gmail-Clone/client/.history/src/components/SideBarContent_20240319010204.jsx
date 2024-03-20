
import {}
import { CreateOutlined } from '@mui/icons-material';
import { Box, Button, styled, List, ListItem } from '@mui/material'
import { SIDEBAR_DATA } from '../config/sidebar.config';
import ComposeMail from './ComposeMail'


const ComposeButton = styled(Button)({

	background: "#c2e7ff",
	color:"#001d35",
	padding: "15px",
	borderRadius: "16px",
	minWidth:"140px",
	testTransform: "none"
})

const Container = styled(Box) ({
	padding: 8,
	'& > ul': {
		padding: "10px 0 0 5px",
		fontSize: 14,
		fontweight: 500,
		cursor: "pointer",
	},
	'& > ul > li > svg': {
		marginRight: 20
	}

})


const SideBarContent = () => {

	return (
		<Container>
			<ComposeButton>
				<CreateOutlined />Compose
			</ComposeButton>
			<List>
				{
					SIDEBAR_DATA.map(data => (
						<ListItem>
							<data.icon fontSize="small"/>{data.title}
						</ListItem>
					))
				}
			</List>
			<ComposeMail />
		</Container>
	)
	}

export default SideBarContent;