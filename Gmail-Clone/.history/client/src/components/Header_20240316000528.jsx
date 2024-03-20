
import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material'
import { Menu as MenuIcon, Search, Tune, HelpOutlineOutlined,
 SettingsOutlined } from '@mui/icons-material'
import { gmailLogo } from '../constants/constants'

const StyledAppBar = styled(AppBar)({
	background: '#F5F5F5',
	boxShadow: 'none'
})

const SearchWrapper = styled (Box) ({
	background: '#EAF1FB',
	marginLeft: '80px',
	borderRadius: '8px',
	minWidth: '690px',
	maxwidth: '720px',
	height: '48px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '0 20px',
	'& > div': {
        width: '100%',
		padding: '0 10px',
	}
})


const  Header = ()  => {
  return (
	<StyledAppBar position="static" >
		<Toolbar>
			<MenuIcon color="action" />
			<img src={gmailLogo} alt="logo" style={{width: 110, marginleft: 15 }}/>
			<SearchWrapper>
			<Search color="action" />
			<InputBase placeholder='Search mail' />
				
			<Tune color="action" />
			</SearchWrapper>
			<div>
				<HelpOutlineOutlined color='action' padding= '0 10px'/>
				<SettingsOutlined color= 'action' padding= '0 10px' marginLeft: '80px'/>
			</div>
		</Toolbar>
	</StyledAppBar>
  )
}

export default Header;
