
import { Dialog } from '@mui/material';

const dialogStyle = {
	height: '90%',
	width
}

const ComposeMail = () => {

	return (
		<Dialog
			open={true}
			PaperProps={{ sx: dialogStyle }}

		>
			Hello from Compose
		</Dialog>
	)

}

export default ComposeMail;