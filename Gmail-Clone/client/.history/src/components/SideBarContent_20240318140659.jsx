

import { CreateOutlined } from '@mui/icons-material';
import { Box, Button, styled, List, ListItem } from '@mui/material'
import { SIDEBAR_DATA } from '../config/sidebar.config';



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
		<Cointainer>
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
		</Cointainer>
	)
	}

export default SideBarContent;