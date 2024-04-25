
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


const Header = styled(Box) ({
	display: 'flex',
	justifyContent: 'space-between',
	padding: '10px 15px',
	background: '#f2f6fc'
})

const ComposeMail = () => {

	return (
		<Dialog
			open={true}
			PaperProps={{ sx: dialogStyle }}

		>
			
			<Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
            </Header>
			
			

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