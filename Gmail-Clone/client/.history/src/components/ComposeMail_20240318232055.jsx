
import { Dialog } from  '@mui/material';

const  dialogstyle = {
	height: '90%',
	width: '80%',
	max
}


const ComposeMail = () => {

	return(
		<Dialog
			open={true}
			PaperProps={{ sx: dialogstyle }}
		>
			Helloooo
		</Dialog>
	)
};

export default ComposeMail;