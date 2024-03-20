
import { Dialog } from  '@mui/material';

const  dialogstyle = {
	height: '90%',
	
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