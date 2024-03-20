
import { AppBar, Toolbar, styled } from '@mui/material'
import { Menu as MenuIcon} from '@mui/icons-material'


const StyledAppBar = styled(AppBar)({
	background: 'grey',
	boxShadow: 'none'
})


const  Header = ()  => {
  return (
	<StyledAppBar position="static" >
		<Toolbar>
			<MenuIcon color="action/>
		</Toolbar>
	</StyledAppBar>
  )
}

export default Header;
