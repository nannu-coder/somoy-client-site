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
            <AppBar position="static">
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

                            <NavLink to='/home'>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Home
                                </Button>
                            </NavLink>

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {user.email ? <Box>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                                        <IconContext.Provider
                                            value={{ color: '#fff', size: '36px' }}
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
                                            <Link to='/'>
                                                profile
                                            </Link>
                                        </Typography>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link to='/dashboard'>
                                                Dashboard
                                            </Link>
                                        </Typography>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Button onClick={logOut} variant="text">Log Out</Button>
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </Box> : <Link to='/login'>
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