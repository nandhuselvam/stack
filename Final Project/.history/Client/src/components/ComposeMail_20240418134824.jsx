
import { Dialog, Box, Typography, styled } from '@mui/material';
import { Close } from '@mui/icons-material';

const dialogStyle = {
	height: '90%',
	width: '80%',
	maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}


const Header = Styled (Box)({
	display: 'flex',
	justifyContent: 'space-between',
	padding: '10px 15px',
})
const ComposeMail = () => {

	return (
		<Dialog
			open={true}
			PaperProps={{ sx: dialogStyle }}

		>
			
			<Box>
				<Typography>   New Message</Typography>
				<Close font size="small"/>
			</Box>

			<Box>
			</Box>

			<Box>
				Text Area
			</Box>
			<Box>
			</Box>
		</Dialog>
	)

}

export default ComposeMail;