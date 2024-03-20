
import { Dialog, Box, Typography, styled } from  '@mui/material';
import { Close } from '@mui/icons-material';
import Header from './Header';



const  dialogstyle = {
	height: '90%',
	width: '80%',
	maxWidth: '100%',
	maxHeight: '100%',
	boxShadow: 'none',
	borderRadius: '10px 10px 0 0'
}

const   Header = styled(Box)({
    display: 'flex',
    justifycontent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontsize: '14px',
        fontweight: '500',
	}
})

const ComposeMail = () => {

	return(
		<Dialog
			open={true}
			PaperProps={{ sx: dialogstyle }}
		>
			<Header>
				<Typography>New Message</Typography>
				<Close  fontsize="small" />
			</Header>
				
			<Box>
				<InputBase placeholder="Recipients"/>
				<InputBase placeholder="subject"/>
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