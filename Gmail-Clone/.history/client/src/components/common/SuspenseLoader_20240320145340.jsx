
import { ircularPregress, Typography, Box } from "@mui/material"



const SuspenseLoader = () => {

	return (
		<Box>
			<circularPregress/>
			<Typography> Lodaing...</Typography>
		</Box>
	)
}

export default SuspenseLoader;