
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material';
import { Close, DeleteOutline } from '@mui/icons-material';

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
		marginTop: 10
	}
});

const Footer = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	padding: '10px 15px',
});

const SendButton = styled(Button)({
	background: '#0B57D0',
	color: '#fff',
	fontWeight: 500,
	textTransform: 'none',
	borderRadius: 18,
	width: 100
});

const ComposeMail = ({openDialog, setOpenDialog}) => {

	const config

	const closeComposeMail = (e) => {
		e.preventDefault();

		setOpenDialog(false);
	}
	const sendMail = () => {
		Email.send({
				Host : "smtp.elasticemail.com",
				Username : "nandhuselvam1997@yopmail.com",
				Password : "A4D3A61C0A99A406B451066DB7AE6186167D",
				Port: 2525,
				To : 'them@website.com',
				From : "you@isp.com",
				Subject : "This is the subject",
				Body : "And this is the body"
		}).then(
				message => alert(message)
		);
		setOpenDialog(false);
	}

	return (
		<Dialog
			open={openDialog}
			PaperProps={{ sx: dialogStyle }}
		>
			
			<Header>
				<Typography>New Message</Typography>
				<Close fontSize="small" onClick={(e)=> closeComposeMail()} />
			</Header>
			<RecipientsWrapper>
				<InputBase placeholder="Recipients" />
				<InputBase placeholder="Subject" />
			</RecipientsWrapper>

			<TextField
				multiline
				rows={20}
				sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
			/>
			<Footer>

				<SendButton onClick={(e)=> sendMail(e)}>Send</SendButton >
				<DeleteOutline onClick={() => setOpenDialog(false)}/>
			</Footer>
		</Dialog>
	)

}

export default ComposeMail;