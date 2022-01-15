import React, { useState } from 'react';
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
import { FaHome, FaStar, FaCartPlus, FaUserCog, FaAmazonPay, FaGift } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import AdminRoute from '../AdminRoute/AdminRoute';
import useAuth from '../../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import Review from '../Ratings/Ratings';
import MyOrders from '../MyOrders/MyOrders';
import AddServices from '../AddServices/AddServices';


const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, isLoading } = useAuth();

    if (isLoading) {
        return <CircularProgress />
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar style={{ padding: '36px' }} />
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

                <Link to='/comesoon'>
                    <ListItem button>
                        <ListItemIcon>
                            <FaAmazonPay size={25} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography >
                                Payment
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>

                <Link to={`${url}/review`}>
                    <ListItem button>
                        <ListItemIcon>
                            <FaStar size={25} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography >
                                Review
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>

                <Link to={`${url}/myorders`}>
                    <ListItem button>
                        <ListItemIcon>
                            <FaCartPlus size={25} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography >
                                My Orders
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>

                {admin && <Link to={`${url}/makeadmin`} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}> <ListItem button>
                        <ListItemIcon>
                            <FaUserCog size={25} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography >
                                Make Admin
                            </Typography>
                        </ListItemText>
                    </ListItem> </Link>}

                {admin && <Link to={`${url}/manageorder`}><ListItem button>
                    <ListItemIcon>
                        <AiFillSetting size={25} />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography >
                            Manage Order
                        </Typography>
                    </ListItemText>
                </ListItem> </Link>}

                {admin && <Link to={`${url}/addservice`}><ListItem button>
                    <ListItemIcon>
                        <FaGift size={25} />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography >
                            Add Service
                        </Typography>
                    </ListItemText>
                </ListItem> </Link>}
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
                <Toolbar elevation={3} style={{ padding: '20px', backgroundColor: '#ffff' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ color: '#343434' }} variant="h6" noWrap component="div">
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
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>

                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageorder`}>
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addservice`}>
                        <AddServices></AddServices>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
};

export default Dashboard;