
import { AppBar, Toolbar,  sty} from '@mui/material'
import { Menu as MenuIcon} from '@mui/icons-material'


const  StylesAppBar = ()  => {
  return (
	<AppBar position="static" >
		<Toolbar>
			<MenuIcon/>
		</Toolbar>
	</AppBar>
  )
}

export default Header;
