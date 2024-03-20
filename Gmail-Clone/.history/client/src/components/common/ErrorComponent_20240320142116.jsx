
import { Box, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom'; 

const ErrorComponent = () => {
	const error = useRouterError();
	console.log
	return (
		<Box style={{ marginLeft: "250px"}}>
			<Typography></Typography>
		</Box>
)
}

export default ErrorComponent;