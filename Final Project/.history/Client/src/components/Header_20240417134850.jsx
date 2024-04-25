
import { AppBar, Toolbar, styled } from '@mui/material';
import { Menu as MenuIcon, Search } from '@mui/icons-material';
import { gmailLogo } from '../constants/constant';

const StyledAppBar = styled(AppBar)({
	background: '#F5F5F5',
	boxShadow: 'none'
})
const Header = () => {
	return (
		<StyledAppBar position="static">
			<Toolbar>
				<MenuIcon color="action" />
				<img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
				<div>
					<Search />
				</div>
			</Toolbar>
		</StyledAppBar>
	)
}

export default Header;