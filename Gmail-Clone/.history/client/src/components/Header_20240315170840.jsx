
import { AppBar, Toolbar, styled, InputBase } from '@mui/material'
import { Menu as MenuIcon, Search, Tune } from '@mui/icons-material'
import { gmailLogo } from '../constants/constants'

const StyledAppBar = styled(AppBar)({
	background: '#F5F5F5',
	boxShadow: 'none'
})


const  Header = ()  => {
  return (
	<StyledAppBar position="static" >
		<Toolbar>
			<MenuIcon color="action" />
			<img src={gmailLogo} alt="logo" style={{width: 110, marginleft: 15 }}/>
			<div>
			<Search />
			<In
			<Tune />
			</div>
		</Toolbar>
	</StyledAppBar>
  )
}

export default Header;
