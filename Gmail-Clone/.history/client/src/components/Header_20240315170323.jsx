
import { AppBar, Toolbar, styled } from '@mui/material'
import { Menu as MenuIcon} from '@mui/icons-material'
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
			<img src={gmailLogo} alt="logo" style={{/>
		</Toolbar>
	</StyledAppBar>
  )
}

export default Header;
