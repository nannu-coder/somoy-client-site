import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FiUser } from 'react-icons/fi';
import { IconContext } from "react-icons";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './NavBar.css';
import { Divider } from '@mui/material';


const NavBar = () => {
    const { user, logOut } = useAuth()

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <div>
            <AppBar className='navbar' color="inherit" elevation={3}>
                <Container>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">

                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <NavLink style={{ textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }} to='/home'>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#343434', display: 'block' }}
                                >
                                    Home
                                </Button>
                            </NavLink>

                            <NavLink style={{ textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }} to='/allproduct'>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#343434', display: 'block' }}
                                >
                                    Products
                                </Button>
                            </NavLink>

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {user.email ? <Box>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                                        <IconContext.Provider
                                            value={{ color: '#343434', size: '36px' }}
                                        >
                                            <div>
                                                <FiUser />
                                            </div>
                                        </IconContext.Provider>
                                    </IconButton>
                                </Tooltip>

                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link style={{ color: '#343434', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }} to='/'>
                                                profile
                                            </Link>
                                        </Typography>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link style={{ color: '#343434', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }} to='/dashboard'>
                                                Dashboard
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Button style={{ color: '#343434', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }} onClick={logOut} variant="text">Log Out</Button>
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </Box> : <Link style={{ color: '#343434', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }} to='/login'>
                                <Button variant='content'>Login</Button>
                            </Link>}



                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default NavBar;