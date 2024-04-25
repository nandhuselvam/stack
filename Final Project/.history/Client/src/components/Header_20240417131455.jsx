
import { AppBar, Toolbar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material/Menu';

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<MenuIcon />
			</Toolbar>
		</AppBar>
	)
}

export default Header;