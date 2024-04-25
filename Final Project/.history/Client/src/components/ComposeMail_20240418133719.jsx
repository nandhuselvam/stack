
import { Dialog, Box, Typography, } from '@mui/material';


const dialogStyle = {
	height: '90%',
	width: '80%',
	maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}

const ComposeMail = () => {

	return (
		<Dialog
			open={true}
			PaperProps={{ sx: dialogStyle }}

		>
			
			<Box>
					<Typography>   New Message</Typography>
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