import {useState} from 'react';

import {AppBar, Box, Button, Toolbar, IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import {useNavigate, useLocation} from 'react-router-dom';
import {theme} from '../theme.js'

const pages = [
  {name: 'Home', path: '/'},
  {name: 'Menu', path: '/menu'},
  {name: 'Order', path: '/order'},
];

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        height: "6vh",
        justifyContent: "center",
        backgroundColor: "background.paper",
      }}
    >
      <Box>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            sx={{display: {xs: "flex", sm: "none"}}}
          >
            <MenuIcon/>
          </IconButton>
          <IconButton
            onClick={() => navigate('/')}>
            <FoodBankOutlinedIcon color="primary" sx={{fontSize: "3rem"}}/>
          </IconButton>

          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
            transformOrigin={{vertical: 'top', horizontal: 'left'}}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={() => {
                  navigate(page.path);
                  handleCloseNavMenu();
                }}
              >
                {page.name}
              </MenuItem>
            ))}
          </Menu>
          <Box sx={{
            display: 'flex',
            gap: '1rem',
            margin: '0 auto'
          }}>
            {pages.map((page) => (
              <Button
                sx={{
                  display: {xs: "none", sm: "inline-flex"},
                  color: location.pathname === page.path
                    ? theme.palette.primary.main
                    : theme.palette.text.disabled,
                  textShadow: location.pathname === page.path
                    ? `
                       0 0 5px #facef5,
                       0 0 10px #facef5,
                       0 0 20px #ff80ff,
                       0 0 30px #ff80ff,
                       0 0 40px #ff80ff
                    `
                    : "none"
                }}
                key={page.name}
                color="primary"
                onClick={() => navigate(page.path)}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}