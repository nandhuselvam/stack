
import { CircularPregress, Typography, Box } from "@mui/material"



const SuspenseLoader = () => {

	return (
		<Box>
			<CircularPregress/>
			<Typography> Lodaing...</Typography>
		</Box>
	)
}

export default SuspenseLoader;