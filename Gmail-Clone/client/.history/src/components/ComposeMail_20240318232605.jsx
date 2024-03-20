
import { Dialog, Box, Typography } from  '@mui/material';

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

			</Box>
			<Box>
				
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