
import { Dialog, Box, Typography, styled, InputBase } from '@mui/material';
import { BorderBottom, Close } from '@mui/icons-material';

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
	background: '#f2f6fc',
	'& > p': {
		fontSize: 14,
		fontWeight: 700
	}
});

const RecipientsWrapper = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	padding: '0 15px',
	'& > div': {
		fontSize: 14,
		borderBottom: '1px solid #F5F5F5',
		marginTop: '10px'
	}
})

const ComposeMail = () => {

	return (
		<Dialog
			open={true}
			PaperProps={{ sx: dialogStyle }}

		>
			
			<Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" />
            </Header>
			<RecipientsWrapper>
				<InputBase placeholder="Recipients"/>
				<InputBase placeholder="Subject"/>
			</RecipientsWrapper>

			<Box>
				Text Area
			</Box>
			<Box>
			</Box>
		</Dialog>
	)

}

export default ComposeMail;