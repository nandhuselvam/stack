
import { Dialog, Box, Typography } from  '@mui/material';
import { Close } from '@mui/icons-material';



const  dialogstyle = {
	height: '90%',
	width: '80%',
	maxWidth: '100%',
	maxHeight: '100%',
	boxShadow: 'none',
	borderRadius: '10px 10px 0 0'
}


const ComposeMail = () => {

	return(
		<Dialog
			open={true}
			PaperProps={{ sx: dialogstyle }}
		>
			<Box>
				<Typography>New Message</Typography>
				<Close fontsize=/>
			</Box>
				<Typography>To</Typography>
			<Box>
				<Typography>Subject</Typography>
			</Box>
			<Box>
				Text
			</Box>
			<Box>

			</Box>
		</Dialog>
	)
};

export default ComposeMail;