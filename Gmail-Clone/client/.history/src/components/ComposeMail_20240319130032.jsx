
import { Dialog, Box, Typography, InputBase, TextField, Button } from  '@mui/material';
import { Close, DeleteOutline } from '@mui/icons-material';
import { styled } from '@mui/material/styles';


const  dialogStyle = {
	height: '90%',
	width: '80%',
	maxWidth: '100%',
	maxHeight: '100%',
	boxShadow: 'none',
	borderRadius: '10px 10px 0 0'
};

const  Header = styled(Box)({
    display: 'flex',
    justifycontent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontsize: '14px',
        fontweight: '500',
	}
});

const RecipientsWrapper = styled(Box) ({
	display: 'flex',
	flexDirection: 'column',
	padding: '0 15px',
	'& > div': {
		fontsize: '14px',
		borderBottom: '1px solid #F5F5F5',
        marginTop: '10px',
	}

});

const Footer = styled(Box)({
	display: 'flex',
    justifyContent: 'space-between',
	padding: '10px 15px',
    alignItems: 'center',
});

const SendButton = styled(Button) ({
	background: '#0B57D0',
    color: '#fff',
    fontweight: '500',
    textTransform: 'none',
    borderRadius: '18px',
    width: '100px',
});

const ComposeMail = ({openDialog, setOpenDialog }) => {

	const config = {
			Host : "smtp.elasticemail.com",
			Username : "project@yopmail.com",
			Password : "0C6FE327A635C760CD383E1056158B9D517B",
			Port: 2525,
		}

	const closeComposeMail = (e) => {
		e.preventDefault();

		setOpenDialog(false);
	}

	const sendMail = () => {

			if(window.Email) {
				window.Email.send({
					...config,
					To : "project7099@gmail.com",
					From :"project7099@gmail.com",
					Subject : "This is the subject",
					Body : "And this is the body"
				}).then(
				message => alert(message)
				);
				setOpenDialog(false);
		}
	return(
		<Dialog
			
			open={openDialog}
			PaperProps={{ sx: dialogstyle }}
		>
			<Header>
				<Typography>New Message</Typography>
				<Close fontsize="small" onClick={(e) => closeComposeMail(e)} />
			</Header>
				
			<RecipientsWrapper>
				<InputBase placeholder="Recipients"/>
				<InputBase placeholder="subject"/>
			</RecipientsWrapper>
			<TextField
				multiline
				rows={20}
				sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' }}}
                
			/>
			<Footer>
				<SendButton onClick={() => sendMail()}> Send </SendButton>
				<DeleteOutline onClick={() => setOpenDialog(false)}/>
			</Footer>
		</Dialog>
	)
};

export default ComposeMail;