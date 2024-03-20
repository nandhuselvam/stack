
import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material'
import { Menu as MenuIcon, Search, Tune } from '@mui/icons-material'
import { gmailLogo } from '../constants/constants'

const StyledAppBar = styled(AppBar)({
	background: '#F5F5F5',
	boxShadow: 'none'
})

const SearchWrapper = styled (Box) ({
	background: '#EAF1FB',
	marginLeft: 80,
	borderRadius: 8,
	minWidth: 690,
	maxwidth: 720,
	height: 48,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between'
})


const  Header = ()  => {
  return (
	<StyledAppBar position="static" >
		<Toolbar>
			<MenuIcon color="action" />
			<img src={gmailLogo} alt="logo" style={{width: 110, marginleft: 15 }}/>
			<SearchWrapper>
			<Search color="action" />
			<InputBase/>
			<Tune color="action" />
			</SearchWrapper>
		</Toolbar>
	</StyledAppBar>
  )
}

export default Header;
