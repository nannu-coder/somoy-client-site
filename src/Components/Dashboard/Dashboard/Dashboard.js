import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FaHome } from 'react-icons/fa';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';


const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link to='/home'>
                    <ListItem button>
                        <ListItemIcon>
                            <FaHome size={25} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography >
                                Home
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>

                <ListItem button>
                    <ListItemIcon>
                        <FaHome size={25} />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography >
                            <Link to={`${url}/makeadmin`}>Make Admin</Link>
                        </Typography>
                    </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <FaHome size={25} />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography >
                            <Link to={`${url}/manageorders`}>Manage Order</Link>
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );



    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ padding: '20px' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {/* <Toolbar /> */}
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageorders`}>
                        <ManageOrder></ManageOrder>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};

export default Dashboard;