
import { AppBar, Toolbar, Styled } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)({
	background: '#F5F5F5'
})
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