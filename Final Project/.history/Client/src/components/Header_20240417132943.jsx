
import { AppBar, Toolbar, styled } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)({
	background: '#F5F5F5'
	bo
})
const Header = () => {
	return (
		<StyledAppBar position="static">
			<Toolbar>
				<MenuIcon />
			</Toolbar>
		</StyledAppBar>
	)
}

export default Header;