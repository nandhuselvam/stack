
import { AppBar, Toolbar, styled } from '@mui/material'
import { Menu as MenuIcon} from '@mui/icons-material'


const StyledAppBar = styled(AppBar)({
	background: 'grey',
	
})


const  Header = ()  => {
  return (
	<AppBar position="static" >
		<Toolbar>
			<MenuIcon/>
		</Toolbar>
	</AppBar>
  )
}

export default Header;
